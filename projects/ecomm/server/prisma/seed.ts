
// server/prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

type ProductInput = {
  name: string;
  price: number;
  image?: string | null;
};

async function main() {
  const filePath = path.join(__dirname, "product.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const products: ProductInput[] = JSON.parse(raw);

  for (const p of products) {
    // basic validation
    if (!p.name || p.price == null) {
      console.warn("Skipping invalid product entry:", p);
      continue;
    }

    // Try to find an existing product by name (since schema has no unique field)
    const existing = await prisma.products.findFirst({
      where: { name: p.name },
    });

    if (existing) {
      // Update existing
      await prisma.products.update({
        where: { id: existing.id },
        data: {
          price: Number(p.price),
          image: p.image ?? "",
        },
      });
      console.log(`Updated product: ${p.name}`);
    } else {
      // Create new
      await prisma.products.create({
        data: {
          name: p.name,
          price: Number(p.price),
          image: p.image ?? "",
        },
      });
      console.log(`Created product: ${p.name}`);
    }
  }
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

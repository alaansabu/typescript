import dotenv from "dotenv";
import { createPool, Pool } from "mysql2/promise";

dotenv.config();

const host = process.env.DB_HOST ||"127.0.0.1"!;
const port = Number(process.env.DB_PORT);       // must be number
const user = process.env.DB_USER!;
const password = String(process.env.DB_PASS);
const database = process.env.DB_NAME ||"ecom"!;

export const connection: Pool = createPool({
  host,
  port,
  user,
  password,
  database,
  connectionLimit: 10
});



try {
    connection.getConnection().then(()=>console.log("db is connected"))
    
} catch (error) {
    console.log("error is:-",error);
    
}

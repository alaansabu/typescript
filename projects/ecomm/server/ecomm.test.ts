import express from "express";
import {productCard} from './src/controllers/productController'

const app = express();
app.use(express.json());


app.get("/test",productCard, async (req, res) => {
  try {


    res.json({
      message: "Test server is working!",
      result: "Put your test logic inside /test route",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong", detail: error });
  }
});

// Start server
app.listen(5005, () => {
  console.log("🧪 Test server running at http://localhost:5005/test");
});

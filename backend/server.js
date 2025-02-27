import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/api/message", (req, res) => {
  res.json({ message: "This is a ping message from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
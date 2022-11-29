import express from 'express';
import todoRoutes from './api/todoRoutes';

const router = express.Router();

router.use("/api/todo", todoRoutes);

router.get("/", (req, res) => {
  res.send({"message": "Hello there world!"});
});

export default router;

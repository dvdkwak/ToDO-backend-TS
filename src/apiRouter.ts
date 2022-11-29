import express from 'express';
import todoRoutes from './api/todoRoutes';

const router = express.Router();

// All routes for this router must start with "/api/todo"
router.use("/api/todos", todoRoutes);

// A get request to test the api with. (Simple hello world message.)
router.get("/", (req, res) => {
  res.send({"message": "Hello there world!"});
});

export default router;

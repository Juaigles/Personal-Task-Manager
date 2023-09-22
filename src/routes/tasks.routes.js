import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  getAllTask,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller.js";
import {validateSchema} from '../middlewares/validator.middelware.js';
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getAllTask);
router.get("/task/:id", authRequired, getTask);
router.post("/task", authRequired, validateSchema(createTaskSchema) ,createTask);
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask);

export default router;

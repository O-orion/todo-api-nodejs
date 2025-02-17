import { Router } from "express";
import TarefaController from "../controllers/TarefaController";

const routers = Router();

routers.get("/api/tarefa", TarefaController.get);
routers.get("/api/tarefa/:id", TarefaController.getById);
routers.post("/api/tarefa", TarefaController.post);
routers.put("/api/tarefa/:id", TarefaController.put);
routers.delete("/api/tarefa/:id", TarefaController.delete);

export default routers;

import { Router } from "express";
import TarefaController from "../controllers/TarefaController";

const routers = Router();

routers.get("/api/tarefa", TarefaController.get);

export default routers;

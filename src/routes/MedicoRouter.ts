import {Router,Response,Request} from "express";
import MedicoController from "../controllers/MedicoController";

class MedicoRouter{
    /**
     * Router de medico se encarga tomando  de asignar
     * el controlador a cada ruta correpsndiente
     * 
     */
    router:Router;
    medicoController:MedicoController;

    constructor(){
        this.router = Router();
        this.medicoController = new MedicoController();
        this.routes();
    }

    private routes():void{
        this.router.post("/crear_medico",(req:Request,res:Response)=>{
            this.medicoController.crearMedico(req,res);
        });
        this.router.get("/medicos",(req:Request,res:Response)=>{
            this.medicoController.obtenerMedicos(req,res);
        });
    }
}
const miRouter = new MedicoRouter();
export default miRouter.router;
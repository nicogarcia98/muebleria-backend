// src/routes/userRoutes.ts
import { Router } from 'express';
import tipoMuebleController from '../controllers/tipoMuebleController';

const router = Router();

router.post('/', tipoMuebleController.createTipoMueble);

// Agregar rutas para tipoMueble Crud

export default router;
import { Request, Response } from 'express'
import tipoMuebleService from '../services/tipoMuebleService';


class TipoMuebleController {
    async createTipoMueble(req: Request, res: Response): Promise<void> {
        try {
            const user = await tipoMuebleService.createTipoMueble(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    async getAllTipoMueble(req: Request, res: Response) {
        // Implementación para obtener todos los tipos de mueble
        res.send('Get all tipo mueble');
    };

    async getTipoMuebleById(req: Request, res: Response) {
        // Implementación para obtener un tipo de mueble por ID
        res.send('Get tipo mueble by ID');
    };

    async updateTipoMueble(req: Request, res: Response) {
        // Implementación para actualizar un tipo de mueble
        res.send('Update tipo mueble');
    };

    async deleteTipoMueble(req: Request, res: Response) {
        // Implementación para eliminar un tipo de mueble
        res.send('Delete tipo mueble');
    };

}

export default new TipoMuebleController();
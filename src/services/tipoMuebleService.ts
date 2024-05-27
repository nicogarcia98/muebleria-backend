import { CreateTipoMuebleDTO } from "../dtos/tipoMuebleDTO";
import { ITipoMueble } from "../models/tipoMuebleModel";

class TipoMuebleService {
    async createTipoMueble(createItem: CreateTipoMuebleDTO) : Promise<ITipoMueble> {
        const newTipoMueble: ITipoMueble = {
            codigo: createItem.codigo,
            descripcion: createItem.descripcion
        }
        return newTipoMueble
    }
}

export default new TipoMuebleService();
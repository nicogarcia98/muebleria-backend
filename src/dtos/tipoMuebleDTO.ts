
export interface CreateTipoMuebleDTO {
    codigo: number;
    descripcion: string;
}

export interface DeleteTipoMuebleDTO {
    codigo: number;
}

export interface UpdateTipoMuebleDTO {
    codigo: number;
    descripcion: string;
}

export interface FilterTipoMuebleDTO {
    descripcion: string;
}

export interface FilterGetOneTipoMuebleDTO {
    codigo: number;
}
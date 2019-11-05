export interface Parque {
  _id?: string;
  _createdOn?: string;
  nombre: string;
  direccion: string;
  posicion: {
    lat: number,
    lon: number
  };
  valoracion?: number;
  foto?: string;
  distancia?: number;
}

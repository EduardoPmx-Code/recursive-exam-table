import { Table } from '../interfaces/table.interface';

export const setTable:Table[]=[
    { Id: 1, Nombre: "Mascotas", idPadre: 0 },
    { Id: 2, Nombre: "Gato", idPadre: 1 },
    { Id: 3, Nombre: "Perro", idPadre: 1 },
    { Id: 4, Nombre: "Plantas", idPadre: 0 },
    { Id: 5, Nombre: "Árbol", idPadre: 4 },
    { Id: 6, Nombre: "Flores", idPadre: 4 },
    { Id: 7, Nombre: "Micu", idPadre: 2 },
    { Id: 8, Nombre: "Sasy", idPadre: 2 },
    { Id: 9, Nombre: "Fido", idPadre: 3 },
    { Id: 10, Nombre: "Bobby", idPadre: 3 },
    { Id: 11, Nombre: "Roble", idPadre: 5 },
]


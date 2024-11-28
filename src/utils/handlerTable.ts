import { Table } from "../interfaces/table.interface";

export class HandlerTable{
    static printHierarchy(data: Table[], parentId: number = 0, level: number = 0): void {
        // Filtrar los nodos que tienen como padre el `parentId`
        const children = data.filter((node) => node.idPadre === parentId);

        // Recorrer los nodos hijos
        children.forEach((child) => {
            console.log(`${'  '.repeat(level)}${child.Nombre}`);
          // Indentación según el nivel
            HandlerTable.printHierarchy(data, child.Id, level + 1);
          // Llamada recursiva para procesar descendientes
        });
    }
}
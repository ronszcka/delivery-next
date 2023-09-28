import { PedidoItemDTO } from "./PedidoItemDTO";

export class PedidoDTO {
    
    public itens: PedidoItemDTO[];

    constructor(itens: PedidoItemDTO[]) {
        this.itens = itens;
    }

}
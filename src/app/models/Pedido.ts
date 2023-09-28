import { PedidoItem } from "./PedidoItem";

export class Pedido {

    public cliente: string;
    public itens: PedidoItem[];
    public total: number;

    constructor(cliente: string = "", itens: PedidoItem[] = []) {
        
        this.cliente = cliente;
        this.itens = itens;
        
        this.total = 0;

        for (let item of this.itens) {
            this.total += item.produto.preco;
        }

    }
    
}
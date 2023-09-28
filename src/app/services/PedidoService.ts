import { api } from './API';

import { Produto } from '../models/Produto';
import { ProdutoInputDTO } from '../dtos/ProdutoInputDTO';

export class PedidoService {
    
    static async criarPedido(pedido: ProdutoInputDTO) : Promise<Produto> {
        return (await api().post("/produtos", produto)).data;
    }

}
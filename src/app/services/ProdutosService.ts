import { api } from './API';

import { Produto } from '../models/Produto';
import { ProdutoInputDTO } from '../dtos/ProdutoInputDTO';

export class ProdutosService {
    
    static async getProdutos() : Promise<Produto[]> {
        return (await api().get("/produtos")).data; 
    }

    static async postProduto(produto: ProdutoInputDTO) : Promise<Produto> {
        return (await api().post("/produtos", produto)).data;
    }

}
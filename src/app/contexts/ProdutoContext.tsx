"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ProdutosService } from "../services/ProdutosService";

import { Produto } from "../models/Produto";
import { ProdutoInputDTO } from "../dtos/ProdutoInputDTO";

interface ProdutosContextData {
    produtos: Produto[];
    createProduto: (produtoInputDTO: ProdutoInputDTO) => Promise<void>;
}

const ProdutosContext = createContext<ProdutosContextData>(
    {} as ProdutosContextData
);

interface ProdutosProviderProps {
    children: ReactNode;
}

export function ProdutosProvider({ children } : ProdutosProviderProps ) {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    // [] - roda apenas na criação do componente...
    // [produtos] - toda vez que alterar a lista de produtos, vai chamar o callback do useEffect
    useEffect(() => {
        
        ProdutosService.getProdutos().then((data) => {
            setProdutos(data);
            console.log(data);
        });

    }, []);

    async function createProduto(produtoInputDTO: ProdutoInputDTO): Promise<void> {

        const produto = await ProdutosService.postProduto(produtoInputDTO);

        setProdutos([
            ...produtos,
            produto
        ]);

    }

    return (

        <ProdutosContext.Provider value={{
            produtos,
            createProduto
        }}>

            { children }

        </ProdutosContext.Provider>

    )

}

export function useProdutos() {
    return useContext(ProdutosContext);
}

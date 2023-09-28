"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { Pedido } from "../models/Pedido";
import { Produto } from "../models/Produto";
import { PedidoItem } from "../models/PedidoItem";

interface PedidosContextData {
    pedido: Pedido;
    adicionarItem: (produto: Produto) => void;
    removerItem: (produto: Produto) => void;
}

const PedidosContext = createContext<PedidosContextData>(
    {} as PedidosContextData
);

interface PedidosProviderProps {
    children: ReactNode;
}

export function PedidosProvider({ children } : PedidosProviderProps ) {

    const [pedido, setPedido] = useState<Pedido>(new Pedido());

    function adicionarItem(produto: Produto): void {

        setPedido(pedido => {

            const pedidoAtualizado = { ...pedido };

            const item: PedidoItem | undefined = pedidoAtualizado.itens.find(item => item.produto.id === produto.id);
            
            if (item) {
                item.quantidade++;
            } else {
                pedidoAtualizado.itens.push(new PedidoItem(produto, 1));
            }
            
            pedidoAtualizado.total += produto.preco;
            
            console.log(pedidoAtualizado);
            console.log(pedidoAtualizado.total);
            
            return pedidoAtualizado;

        });
    }

    function removerItem(produto: Produto): void {
        
        setPedido(pedido => {
            
            const pedidoAtualizado = { ...pedido };
            const item: PedidoItem | undefined = pedidoAtualizado.itens.find(item => item.produto.id === produto.id);
            
            if (item) {
                item.quantidade--;
                pedidoAtualizado.total -= produto.preco;
                
                if (item.quantidade === 0) {
                    const index = pedidoAtualizado.itens.indexOf(item);
                    pedidoAtualizado.itens.splice(index, 1);
                }
            }
            
            console.log(pedidoAtualizado);
            console.log(pedidoAtualizado.total);
            
            return pedidoAtualizado;

        });

    }

    return (

        <PedidosContext.Provider value={{
            pedido,
            adicionarItem,
            removerItem,
        }}>

            { children }

        </PedidosContext.Provider>

    )

}

export function usePedidos() {
    return useContext(PedidosContext);
}

"use client";

// import { useProdutos } from "@/app/contexts/ProdutoContext";

import { usePedidos } from "@/app/contexts/PedidoContext";
import { Produto } from "@/app/models/Produto";
import { ProdutosService } from "@/app/services/ProdutosService";
import { useEffect, useState } from "react";

// async function getProdutos() {
//     const res = await fetch('http://localhost:8081/produtos', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTUzOTEyODksImV4cCI6MTY5NTQ3NzY4OX0.HNA44SJo89ma0QZ0W7ZO9WrwqOWvdrIvU4n6NOZV_xtKaXNnhtm6ysHEDEiN_fBq'
//         }
//     });
    
//     return res.json();

// }

export default function Produtos() {

    // const produtos: Produto[] = [];
    //const produtos: Produto[] = await getProdutos();

    // const { produtos } = useProdutos();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    // [] - roda apenas na criação do componente...
    // [produtos] - toda vez que alterar a lista de produtos, vai chamar o callback do useEffect
    useEffect(() => {
        
        ProdutosService.getProdutos().then((data) => {
            setProdutos(data);
            console.log(data);
        });

    }, []);

    const { adicionarItem, removerItem } = usePedidos();

    function handleAddButton(produto: Produto) {
        adicionarItem(produto);
    }

    function handleRemoveButton(produto: Produto) {
        removerItem(produto);
    }
    
    return (
        <div className="flex flex-col p-2">
            {
                produtos && produtos.length > 0 && produtos.map((produto: Produto) => {
                    return (
                        <div key={produto.id} className="flex items-center p-4 border border-slate-400 w-full">
                            <div className="text-lg font-bold">
                                { produto.nome }
                            </div>
                            <div className="flex flex-grow justify-end px-4 font-bold">
                                <h5>{ produto.preco }</h5>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={ () => handleAddButton(produto) } className="w-10 h-10 text-2xl font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">+</button>
                                <button onClick={ () => handleRemoveButton(produto) } className="w-10 h-10 text-2xl font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">-</button>
                            </div>
                        </div>
                    )
                })

                ||

                produtos.length === 0 && (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <h1 className="mt-8 text-2xl font-bold text-gray-700">Nenhum produto cadastrado</h1>
                    </div>
                )

            }
            
        </div>
    )
}
"use client";

import { usePedidos } from "@/app/contexts/PedidoContext";

export default function PedidoItens() {

    const { pedido } = usePedidos();

    return (
        <>
            <div className="flex p-4">
                <div className="text-2xl font-bold">
                    Total:
                </div>
                <div className="flex flex-grow justify-end text-2xl font-bold">
                    <h5>R$ { pedido && pedido.total }</h5>
                </div>
            </div>
            <hr className="mx-3 border-gray-500" />

            {
                pedido && pedido.itens.length > 0 && pedido.itens.map(item => (
                    <div key={ item.produto.id } className="flex p-4">
                        <div className="w-1/12 text-medium">
                            { item.quantidade }
                        </div>
                        <div className="text-medium">
                            { item.produto.nome }
                        </div>
                        <div className="flex flex-grow justify-end text-medium font-bold">
                            R$ { item.produto.preco * item.quantidade }
                        </div>
                    </div>
                ))
            }

            <div className="flex flex-grow justify-end p-4">
                <button className="w-24 h-10 text-md font-bold 
                text-white  bg-blue-400 
                hover:bg-blue-500 shadow rounded-md">
                    Salvar
                </button>
            </div>
        </>
    )
}
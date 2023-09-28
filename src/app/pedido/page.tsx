import { PedidosProvider } from "../contexts/PedidoContext";

import Produtos from "./components/Produtos";
import PedidoItens from "./components/PedidoItens";

export default function Pedido() {
    return (
        <PedidosProvider>
            <div className="flex w-full h-screen">
                <div className="w-2/3 bg-slate-200">
                    <Produtos />
                </div>
                <div className="w-1/3 bg-slate-300">
                    <PedidoItens />
                </div>
            </div>
        </PedidosProvider>
    )
}
"use client";

import { useEffect, useState } from "react";
import { ProdutosService } from "../services/ProdutosService";
import { Produto } from "../models/Produto";

export default function Produtos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    // [] - roda apenas na criação do componente...
    // [produtos] - toda vez que alterar a lista de produtos, vai chamar o callback do useEffect
    useEffect(() => {
        
        ProdutosService.getProdutos().then((data) => {
            setProdutos(data);
            console.log(data);
        });

    }, []);

    return (
        <>
            <h1>produtos...</h1>
            <pre>{JSON.stringify(produtos, null, 2)}</pre>
        </>
    )
}

// import { Produto } from "../models/Produto";

// async function getProdutos() {
//     const res = await fetch('http://localhost:8081/produtos', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTU0OTU1MTIsImV4cCI6MTY5NTU4MTkxMn0.pgFnFIY6YN9eapcL77hWWPDVbyarxlssYLa0YG2Ixztrv60Imd36RcxBJzWnTMJJ'
//         }
//     });
    
//     return res.json();

// }

// export default async function Produtos() {

//     const produtos: Produto[] = await getProdutos();

//     return (
//         <>
//             <h1>produtos...</h1>
//             <pre>{JSON.stringify(produtos, null, 2)}</pre>
//         </>
//     )
// }
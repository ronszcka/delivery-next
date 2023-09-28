export class PedidoItemDTO {

  public produto: number;
  public quantidade: number;

  constructor(produto_id: number, quantidade: number) {
      this.produto = produto_id;
      this.quantidade = quantidade;
  }

}
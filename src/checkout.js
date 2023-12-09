import {
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
  salvarLocalStorage,
  apagaDoLocalStorage,
} from "./utilidades";

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho");
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produto-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }

  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };

  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizados);
  apagaDoLocalStorage("carrinho");

  window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutosCheckout();
document.addEventListener("submit", (evt) => finalizarCompra(evt));

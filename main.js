import { renderizarCatalogo } from "./src/cartaoProduto";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtroCatalogo";

renderizarCatalogo();
inicializarCarrinho();
inicializarFiltros();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros;

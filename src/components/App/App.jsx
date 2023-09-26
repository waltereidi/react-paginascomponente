import React, { Fragment, useState } from "react";
import { CadastroProvider } from "./ContextPaginaCadastro";
import { Paginainicial } from "components/PaginaInicial/PaginaInicial";
import { Contato } from "components/Contato/Contato";
import { Servicos } from "components/Servicos/Servicos";
import '../../sass/App/app.scss';
function ChoosePage({ page }) {
  const Page = [Paginainicial, Servicos , Contato ][page];
  return <Page />;
}

export default function App() {
    const [page , setPage ] = useState(0);
  return (
    <Fragment>
      <CadastroProvider>
        <div class="content">
            <div class="content--header">
                <div class="content--header__item">
                    <p onClick={() => setPage(0)}>PaginaInicial</p>
                </div>
                <div class="content--header__item">
                    <p onClick={() => setPage(1)}>Servicos</p>
                </div>
                <div class="content--header__item-last">
                    <p onClick={() => setPage(2)}>Contato</p>
                </div>
            </div>
          <div class="content--page">
            <ChoosePage page={page} />
          </div>
        </div>
      </CadastroProvider>
    </Fragment>
  );
}

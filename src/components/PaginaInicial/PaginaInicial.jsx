import React ,{Fragment , useState , useContext } from 'react' ; 
import { CadastroContext } from '../App/ContextPaginaCadastro';
import "./../../sass/PaginaInicial/paginainicial.scss";

export function Paginainicial(){
    return(
        <Fragment> 
            <h1>paginainicial </h1>
            <div class="paginainicial"></div>

        </Fragment>
    );
}
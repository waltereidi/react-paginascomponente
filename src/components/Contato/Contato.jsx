import React ,{Fragment , useState , useContext } from 'react' ; 
import { CadastroContext } from '../App/ContextPaginaCadastro';
import "./../../sass/Contato/contato.scss";

export function Contato(){
    return(
        <Fragment> 
            <h1>Contato </h1>
            <div class="contato"></div>
        </Fragment>
    );
}
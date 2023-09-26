import React ,{Fragment , useState , useContext } from 'react' ; 
import { CadastroContext } from '../App/ContextPaginaCadastro';
import "./../../sass/Servicos/servicos.scss";

export function Servicos(){
    return(
        <Fragment> 
            <h1>Servicos </h1>
            <div class="servicos"></div>

        </Fragment>
    );
}
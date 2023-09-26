import React , { useState , createContext } from 'react';
export const CadastroContext = createContext(); 

export function CadastroProvider({children}){
const cadastroDataSource = useState([{
    id : null ,
    nome : '' , 
    descricao : ''
}]);
return <CadastroContext.Provider value={cadastroDataSource}>{children}</CadastroContext.Provider>
}
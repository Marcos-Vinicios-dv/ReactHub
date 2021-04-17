import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

 export default function Routes() {
   return (
     <BrowserRouter>
        <Switch>
          {/* acesso a rota raiz, para que o router faça uma comparação de
          endereços mais fiel ao path, atribuimos a propriedade 'exact' */}
          <Route path="/" exact component={Main}/>
          <Route path="/repository/:repository" component={Repository}/>
        </Switch>
     </BrowserRouter>
   );
 }

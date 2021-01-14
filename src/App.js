import React from 'react';
import Timer from './components/Timer';
import Counter from './components/Counter';
import {Row,Column} from './components/layouts/Layouts';
import ShoppingList from './components/ShoppingList/ShoppingList'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Row className="m-2">
          <Column className="col-lg-6 col-md-12 col-sm-12">
            <Timer  title="Timer"/>
          </Column>
        <Column className="col-lg-6 col-md-12 col-sm-12">
          <Counter title="Counter"/>        
        </Column>
        <Column className="col-lg-6 col-md-12 col-sm-12">
          <ShoppingList title="Shopping List"/>        
        </Column>
      </Row>
    </React.Fragment>
  );
}

export default App;

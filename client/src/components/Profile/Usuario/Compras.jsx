import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PurchaseHistoryList from './components/PurchaseHistoryList';
import PurchaseHistoryDetails from './components/PurchaseHistoryDetails';
import AddPurchaseHistory from './components/AddPurchaseHistory';
import UpdatePurchaseHistory from './components/UpdatePurchaseHistory';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PurchaseHistoryList} />
        <Route path="/history/:id" component={PurchaseHistoryDetails} />
        <Route path="/add-history" component={AddPurchaseHistory} />
        <Route path="/update-history/:id" component={UpdatePurchaseHistory} />
      </Switch>
    </Router>
  );
}

export default App;

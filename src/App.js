import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Topbar from './Components/Topbar/Topbar.jsx';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import UserList from './Pages/Home/UserList/UserList.jsx';
import ProductList from './Pages/ProductList/ProductList.jsx';
import Product from './Pages/Product/Product.jsx';
import NewProduct from './Pages/NewProduct/NewProduct.jsx';
import NewUser from './Pages/NewUser/NewUser.jsx';


function App() {
  return (

    <Routes>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/users">
            <UserList />
          </Route>

          <Route path="/user/:userId">
            <Product />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route exact path="/products">
            <ProductList />
          </Route>

          <Route exact path="/product/:productId">
            <Product />
          </Route>

          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Routes >



  );
}

export default App;

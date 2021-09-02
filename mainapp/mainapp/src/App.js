import React, {useState} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import data from "./data.json";
//components
import Header from "./Header";
import PackageList from "./packageList";
import Home from "./components/home";
import Login from "./Pages/login";
import Register from "./Pages/register";
import './App.css';


function App() {
const [packageList, setTracking] = useState(data);

// const handleToggle = (id) => {
//   let mapped = packageList.map (tracking => {
//     return tracking.id == id ? {tracking, complete: !tracking.complete}:  
//   })
//   setTracking(mapped);
// }
// { <PackageList packageList={packageList}/> }


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <br></br>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={PackageList} />
          <Route path="/login" component={Login} id="login"/>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
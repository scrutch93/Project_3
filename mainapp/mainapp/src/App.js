import React, { useState, useEffect } from 'react'; //you will nned this for backend as well
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from "./data.json";
//components
import Header from "./Header";
import PackageList from "./packageList";
import Home from "./components/home";
import Login from "./Pages/login";
import Register from "./Pages/register";



import './App.css';
let TEST_API_KEY = "TEST_QPWngtFuNk2D2rae/AapqmQ51OZiv0F9C7PgCkNhpxM";
let test_url = 'https://api.shipengine.com/v1/carriers'
// var cors_api_host = 'cors-anywhere.herokuapp.com';



function App() {
  const [packageList, setTracking] = useState(data);

  // console.log(process.env.API_KEY);

  // useEffect(() => {
  //   fetch(test_url, {
  //     method: "GET",

  //       mode: 'cors',
  //     withCredentials: true,
  //     credentials: 'include',
  //     headers: {
  //       'API-Key': TEST_API_KEY,
  //       'Content-Type': 'application/json',
  //        'Origin': 'https://https://api.shipengine.com'
  //     }
  //   })
  //     .then(response => 
  //      response.json()
  //     )
  //     .then(data => 
  //       console.log(data)
  //       //  Update the State with the returned data
  //     )
  //     .catch(error => 
  //       console.log(error)
  //     )
  // }, []);
  // const handleToggle = (id) => {
  //   let mapped = packageList.map (tracking => {
  //     return tracking.id == id ? {tracking, complete: !tracking.complete}:  
  //   })
  //   setTracking(mapped);
  // }
  // { <PackageList packageList={packageList} /> }


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <br></br>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={PackageList} />
          <Route path="/login" component={Login} id="login" />
          <Route path="/register" component={Register} />
          {/* <Route path="/packages" component={Inventory} /> */}
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
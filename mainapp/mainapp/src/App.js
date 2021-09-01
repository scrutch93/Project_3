import React, {useState} from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import PackageList from "./packageList";

import './App.css';


function App() {
const [packageList, setTracking] = useState(data);

  return (
    <div className="App">
      <Header />
      <PackageList packageList={packageList}/>
    </div>
  );
}

export default App;
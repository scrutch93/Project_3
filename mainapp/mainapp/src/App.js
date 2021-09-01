import React, {useState} from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import PackageList from "./packageList";

import './App.css';


function App() {
const [packageList, setTracking] = useState(data);

const handleToggle = (id) => {
  let mapped = packageList.map (tracking => {
    return tracking.id == id ? {tracking, complete: !tracking.complete} 
  })
  setTracking(mapped);
}

const handleFilter = () => {
  const filtered = packageList.filter(tracking => {
    return !tracking.complete;
  })
  setTracking(filtered);
}
  return (
    <div className="App">
      <Header />
      <PackageList packageList={packageList}/>
    </div>
  );
}

export default App;
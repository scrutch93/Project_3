import React, { useState, useEffect } from 'react';
import Packages from '../packages';

import data from "../data.json";

//const PackageList = ({packageList, handleToggle, handleFilter}) => {

const PackageList = () => {
    const [packageList, setTracking] = useState(data);

    useEffect (() => {
      /*  const filtered = packageList.filter(tracking => {
          return !tracking.complete;
        })
        setTracking(filtered); */
      }, []
    );

    const handleFilter = () => {
        const filtered = packageList.filter(tracking => {
            return !tracking.complete;
        })
        setTracking(filtered);
    }

    const handleToggle = (id) => {
//   let mapped = packageList.map (tracking => {
//     return tracking.id == id ? {tracking, complete: !tracking.complete}:  
//   })
//   setTracking(mapped);
     }

    return (
        <div>
            {packageList.map(packages => {
                return (
                    <Packages packages={packages} handleToggle={handleToggle} />
                )
            })}
            <button style={{margin: '20px' , backgroundColor: 'grey', padding: '10px' }} onClick={handleFilter}>Clear Completed Deliveries</button>

        </div>
    )
}

export default PackageList;
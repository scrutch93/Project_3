import React, { useState, useEffect } from 'react';
import Packages from './packages';

import data from "./data.json";

// const PackageList = ({packageList, handleToggle, handleFilter}) => {

const PackageList = () => {
    const [packageList, setTracking] = useState(data);

    useEffect(() => {
          const filtered = packageList.filter(tracking => {
            return !tracking.complete;
          })
          setTracking(filtered); 
    }, [packageList]
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
        <div id='pkgList'>
            <input></input> <br></br>
            <button style={{ margin: '20px', backgroundColor: 'rgb(10, 128, 124)', padding: '10px', color: 'white', fontWeight: 'bold' }} >Submit Tracking</button>
            {packageList.map(packages => {
                return (
                    <Packages packages={packages} handleToggle={handleToggle} />
                )
            })}
            <button style={{margin: '20px' , backgroundColor: 'rgb(10, 128, 124)', padding: '10px', color: 'white', fontWeight: 'bold'}} onClick={handleFilter}>Clear Completed Deliveries</button>
        </div>
    )
}

export default PackageList;
import React from 'react';
import Packages from './packages';


const PackageList = ({packageList, handleToggle, handleFilter}) => {
    return (
        <div>
            {packageList.map(packages => {
                return (
                    <Packages packages={packages} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default PackageList;
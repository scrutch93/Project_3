import React from 'react';
import Packages from './packages';


const PackageList = ({packageList}) => {
    return (
        <div>
            {packageList.map(packages => {
                return (
                    <Packages packages={packages} />
                )
            })}
        </div>
    )
}

export default PackageList;
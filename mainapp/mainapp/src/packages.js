import React from 'react';

const Packages = ({packages}) => {
    return (
        <div id = 'list' className={packages.status ? "strike" : ""}>
            {packages.tracking}
        </div>
    )
}

export default Packages;
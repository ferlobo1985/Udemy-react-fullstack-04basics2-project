import React,{ useState } from 'react';

const PureCompF = () => {
    const [name,setName] = useState('Francis')
    console.log('render')
    return(
        <>
          <h3>{name}</h3>
             <button
                onClick={
                    ()=> setName('Francis')
                }
            >
                    Click to change
            </button>
        </>
    )
}

export default PureCompF
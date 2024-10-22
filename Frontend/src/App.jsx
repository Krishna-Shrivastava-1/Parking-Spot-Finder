import React, { useEffect, useState } from 'react'
// import {Routes ,Route} from 'react-router-dom'
const App = () => {
  const [cona, setcona] = useState([])
  useEffect(() => {
    const fetcher = ()=> fetch(`http://localhost:8081/parkingspot`)
      .then(res => res.json())
      .then(data =>{ setcona(data) ,console.log(data)})
      .catch(err => console.log(err));

    fetcher()
  }, [])

  return (
    <div>
      <div>
      {
  cona.length > 0 ? (
    <ol type='1'>
      {cona.slice(0, 10).map(({ id, carname, vehiclenumber }) => (
        <li key={id}>
          <h1 className='text-white'>
            Car name = {carname} Car number = {vehiclenumber}
          </h1>
        </li>
      ))}
    </ol>
  ) : (
    <p className='text-white'>No parking spots are available</p>
  )
}

        {/* {
        // cona.length > 0 && cona.length < 10 ?
          cona.slice(0,10).map(({ id, carname ,vehiclenumber }) => (
            <div key={id} >
              <ol type='1' >
                <li  >
                   <h1 className='text-white' >Car name = {carname} Car number = {vehiclenumber}</h1>
                </li>
              </ol>
             
            
            </div>
          )) 
          // :<p className='text-white' >No parking spot are available </p>
        } */}
      </div>

    </div>
  )
}

export default App

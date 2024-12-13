// import React, { useEffect, useState } from 'react'
// // import {Routes ,Route} from 'react-router-dom'
// const App = () => {
//   const [cona, setcona] = useState([])
//   useEffect(() => {
//     const fetcher = () => fetch(`http://localhost:8081/parkingspot`)
//       .then(res => res.json())
//       .then(data => { setcona(data), console.log(data) })
//       .catch(err => console.log(err));

//     fetcher()
//   }, [])

//   return (
//     <div>
//       <div>
//         {
//           cona.length > 0 ? (
//             cona.slice(0, 10).map(({ id, carname, vehiclenumber }) => (
//               <div key={id}>
//                 <div className='border-white w-[47%] m-4 bg-slate-400' >
//                   <h1 className='text-white'>
//                     Car name = {carname} Car number = {vehiclenumber}
//                   </h1>
//                 </div>

//               </div>
//             ))
//           ) : (
//             <p className='text-white'>No parking spots are available</p>
//           )
//         }

//         {/* {
//         // cona.length > 0 && cona.length < 10 ?
//           cona.slice(0,10).map(({ id, carname ,vehiclenumber }) => (
//             <div key={id} >
//               <ol type='1' >
//                 <li  >
//                    <h1 className='text-white' >Car name = {carname} Car number = {vehiclenumber}</h1>
//                 </li>
//               </ol>
             
            
//             </div>
//           )) 
//           // :<p className='text-white' >No parking spot are available </p>
//         } */}
//       </div>

//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react';

const App = () => {
  const [cona, setcona] = useState([]);

  useEffect(() => {
    const fetcher = () => 
      fetch(`http://localhost:8081/parkingspot`)
        .then(res => res.json())
        .then(data => {
          setcona(data);
          console.log(data);
        })
        .catch(err => console.log(err));

    fetcher();
  }, []);

  // Create an array with 10 parking spots
  const parkingSpots = Array.from({ length: 10 }, (_, index) => {
    const car = cona[index]; // Get the car data if available
    return {
      id: index + 1, // Parking spot id (1-10)
      carname: car ? car.carname : '', // Car name if available
      vehiclenumber: car ? car.vehiclenumber : '', // Vehicle number if available
    };
  });

  return (
    <div>
      <div className='flex flex-wrap' >
        {parkingSpots.map(({ id, carname, vehiclenumber }) => (
          <div key={id} className={`border-white w-[47%] m-4 ${carname ? 'bg-red-500' : 'bg-green-500'}`}>
            <h1 className='text-white'>
           Spot {id}:   {carname ? `Car name = ${carname} Car number = ${vehiclenumber}` : 'Available Spot'}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;





import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';


  const App = () => {

    const[tours, setTours] = useState(data);

    function removeTour(id){
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    function addTour(id){
      const onlyTour = tours.filter(tour => tour.id ==id);
      setTours(onlyTour);
    }

    if(tours.length === 0 ){
      return(
        <div className="refresh">
          <h2>No tours left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
        </div>
      );
    }


    return(
      <div>
        
        <Tours tours={tours} removeTour = {removeTour} addTour = {addTour}> </Tours>
      </div>
    )
  };

export default App;

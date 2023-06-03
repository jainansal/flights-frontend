import React from "react";
import InputForm from "./components/InputForm";
import FlightInfo from "./components/FlightInfo";

function App() {
  const [flights, setFlights] = React.useState(null);

  let flightItems = [];

  if(flights) {
    for(const [key, value] of Object.entries(flights)) {
      const newItem = <FlightInfo airline={key} cost={value} />
      flightItems=[...flightItems, newItem];
    }
  }

  return (
    <div className="app">
      <InputForm setContent={setFlights} />
      {flightItems}
    </div>
  );
}

export default App;

import React from "react";
import "./app.scss";
import InputForm from "./components/inputForm/InputForm";
import FlightInfo from "./components/FlightInfo";
import ResultScreen from "./components/resultScreen/ResultScreen";

function App() {
  const [welcome, setWelcome] = React.useState(true);
  const [flights, setFlights] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  let flightItems = [];

  if (flights) {
    for (const [key, value] of Object.entries(flights)) {
      const newItem = <FlightInfo airline={key} cost={value} />;
      flightItems = [...flightItems, newItem];
    }
  }

  return (
    <div className="app">
      <h1>Search Flights</h1>
      <div className="wrapper">
        <InputForm setContent={setFlights} setLoading={setLoading} setWelcome={setWelcome} />
        <ResultScreen welcome={welcome} content={flightItems} isLoading={loading} />
      </div>
    </div>
  );
}

export default App;

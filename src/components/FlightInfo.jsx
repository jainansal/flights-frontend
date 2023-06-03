import React from 'react'

function FlightInfo(props) {
  return (
    <div>
      {props.airline} : {props.cost}
    </div>
  )
}

export default FlightInfo

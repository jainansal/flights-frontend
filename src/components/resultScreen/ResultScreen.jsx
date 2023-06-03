import React from "react";
import "./resultScreen.scss";

function ResultScreen(props) {
  
  return (
    <div className="result-screen">
      {
        props.loading ? '...finding flights...' :
          (props.welcome ? 'Enter query' :
            (props.content.length ? props.content : 'No flights found'))
      }
    </div>
  )
}

export default ResultScreen;

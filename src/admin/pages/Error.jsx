import React from 'react'
import "../../App.css"
import bg  from "../../assets/error.png"

function Error() {
  return (
    <div className="error_background">
        <img src={bg} alt="Error 404"/>
       <button className="error_btn">Go Back</button>
    </div>
  )
}

export default Error
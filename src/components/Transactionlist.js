import React from 'react'

function Transactionlist() {
  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
         <li className="minus">
          Cash <span>-$400</span><button class="delete-btn">x</button>
        </li> 
      </ul>
    </div>
  )
}

export default Transactionlist

import React, { useState } from "react"
import LoadingMask from './Components/LoadingMask'


const Subscription = () => {
  
  const [loading, setLoading ] = useState(false)
  const [value, setValue ] = useState("")
  const [response, setResponse ] = useState(null)
  const [showForm, setShowForm] = useState(true)
  
  const submitForm = () => {
    setLoading(true)
    setShowForm(false)
    
  fetch("https://api/hotels/subscribe", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
  }).then((response) => setResponse(true))
    .catch((error) => setResponse(false))
    .finally(() => setLoading((false), 5000))
  }
  
return (
  <div>
    {showForm === true ?
      <form onSubmit={e => e.preventDefault()}>
        <h1>Request more info about</h1>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="email" />
        <button 
              disabled = {!(value.includes("@") && value.includes("."))} onClick={submitForm}>Submit</button>
        {response === true ?
        <p>Subscribed</p> : response === false ?
        <p>Oops, something happened.</p> : ''}
        </form> : <p>Subscribed</p>}
   </div>
)
};

export default Subscription;
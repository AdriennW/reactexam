import React, { useState, useEffect } from 'react'
import LoadingMask from './Components/LoadingMask'
import Hotels from './Compontents/Hotels'
import Subscripton from './Compontents/Subscription'
import './App.css'

const App = () => {
   
  const [ isLoading, setIsLoading ] = useState(false)
  const [ hotels, setHotels ] = useState([])
  const [ showForm, setShowForm ] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://api/hotels')
      .then((response) => response.json())
      .then(data => setHotels(data))
      .catch(error => setHotels(null))
      .finally(() => setIsLoading(false))
    }, []) 
  
    useEffect(() => {
      setTimeout(() => setShowForm(true), 2000)
    }, [])
  
  return (
    <div className="App">
      <h1>Hotels</h1>
      <Hotels name={hotels.name}/>
    </div>
  )
}

export default App

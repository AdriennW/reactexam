import React, { useState } from 'react'

const Hotels = (props) => {
  const [ shown, setShown ] = useState(false)

  const setDetails = () => {
    setShown(!shown)
}

  return (
    <div>
      <p>{props.name}</p>
      <button onClick={setDetails}>
        {shown ? 'show less' : 'show more'}</button> 
    </div>
  )
};

export default Hotels;
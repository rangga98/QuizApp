import React, { useContext, useEffect, useState } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useStateContext from '../hooks/useStateContext';

export default function Quiz() {

  const [qns, setQns] = useState([])

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.question)
    .fetch()
    .then( res => {
      setQns(res.data)
      console.log(res.data);
    })
    .catch(err => {console.log(err);})
  }, [])
    
  return (
    <div>Question</div>
  )
}

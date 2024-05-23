import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((Response)=>{
      setjokes(Response.data)
    })
      .catch((error)=>{
        console.log(error)
      })
    
  })

  return (
    <div className='ml-[40em] mt-[8em]'>

      <h1 className='font-bold text-xl'>Hello</h1>
      <p >JOKES: {jokes.length}</p>

    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }

    </div>
  )
}

export default App

import { useState } from 'react'


const ResyForm = ({ makeNewResy }) => {
  const [formProgress, setFormProgress] = useState({
    name: "",
    date: "",
    time: "",
    number: ""
  })

  const updateForm = (event) => {
    setFormProgress({
      ...formProgress, [event.target.name]: event.target.value
    })
  }

  const submitResy = (event) => {
    event.preventDefault()
    const resy = {...formProgress, id: Date.now()}
    makeNewResy(resy)
  }

  return (
    <form>
      <h1>Make A Reservation!</h1>
      <input 
        type="text" 
        placeholder="Your Name" 
        name="name" 
        value={formProgress.name} 
        onChange={updateForm}
      />
      <input 
        type="text" 
        placeholder="Date" 
        name="date" 
        value={formProgress.date} 
        onChange={updateForm}/>
      <input
        type="text" 
        placeholder="Time" 
        name="time" 
        value={formProgress.time}
        onChange={updateForm}/>
      <input 
        type="text" 
        placeholder="Number of People" 
        value={formProgress.number} 
        name="number" 
        onChange={updateForm}/>
      <button onClick={submitResy}>Make Your Reservation</button>
    </form>
  )
}

export default ResyForm
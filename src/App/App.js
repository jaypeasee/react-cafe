import './App.css';
import ResyForm from '../ResyForm/ResyForm'
import Resys from '../Resys/Resys'
import { getAllResys, postNewResy } from '../ApiCalls'
import { useState, useEffect } from 'react'

const App = () => {
  const [allResys, setAllResys] = useState([])
  
  useEffect(() => {
    getAllResys()
      .then(data => setAllResys(data))
  }, [])

  const makeNewResy = (resy) => {
    postNewResy(resy)
      .then(setAllResys([...allResys, resy]))
  }

  return (
    <section>
      <ResyForm makeNewResy={makeNewResy}/>
      <Resys allResys={allResys}/>
    </section>
  )
}

export default App;
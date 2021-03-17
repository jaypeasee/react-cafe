import './App.css';
import ResyForm from '../ResyForm/ResyForm'
import Resys from '../Resys/Resys'
import { getAllResys, postNewResy, deleteResy } from '../ApiCalls'
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

  const cancelResy = (resyId) => {
    deleteResy(resyId)
      .then(setAllResys(allResys.filter(resy => {
        return resy.id !== resyId
      })))
  }

  return (
    <section>
      <ResyForm makeNewResy={makeNewResy}/>
      <Resys allResys={allResys} cancelResy={cancelResy}/>
    </section>
  )
}

export default App;
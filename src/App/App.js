import './App.css';
import ResyForm from '../ResyForm/ResyForm'
import Resys from '../Resys/Resys'
import { getAllResys } from '../ApiCalls'
import { useState, useEffect } from 'react'

const App = () => {
  const [allResys, setAllResys] = useState([])
  
  useEffect(() => {
    getAllResys()
      .then(data => setAllResys(data))
  }, [])

  return (
    <section>
      <ResyForm/>
      <Resys
        allResys={allResys}
      />
    </section>
  )
}

export default App;
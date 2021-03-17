import './Resys.css'
import ResyCard from '../ResyCard/ResyCard'

const Resys = ({ allResys }) => {

  const renderAllResys = () => {
    return allResys.map(resy => {
      return <ResyCard resy={resy}/>
    })
  }

  return (
    <section className="all-resys">
      {renderAllResys()}
    </section>
  )
}

export default Resys
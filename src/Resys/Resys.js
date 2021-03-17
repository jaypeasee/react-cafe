import './Resys.css'
import ResyCard from '../ResyCard/ResyCard'

const Resys = ({ allResys, cancelResy }) => {

  const renderAllResys = () => {
    return allResys.map(resy => {
      return <ResyCard key={resy.id} resy={resy} cancelResy={cancelResy}/>
    })
  }

  return (
    <section className="all-resys">
      {renderAllResys()}
    </section>
  )
}

export default Resys
import './ResyCard.css'

const ResyCard = ({ resy, cancelResy }) => {
  const { name, date, time, number, id } = resy
  return (
    <section className="resy-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number} people</p>
      <button onClick={() => cancelResy(id)}>X</button>
    </section>
  )
}

export default ResyCard
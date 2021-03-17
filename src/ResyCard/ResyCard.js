import './ResyCard.css'

const ResyCard = ({ resy }) => {
  const { name, date, time, number } = resy
  return (
    <section className="resy-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number} people</p>
    </section>
  )
}

export default ResyCard
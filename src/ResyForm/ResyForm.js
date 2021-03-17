
const ResyForm = () => {
  

  return (
    <form>
      <h1>Make A Reservation!</h1>
      <input type="text" placeholder="Your Name" name="name"/>
      <input type="text" placeholder="Date" name="date"/>
      <input type="text" placeholder="Time" name="time"/>
      <input type="text" placeholder="Number of People" name="number"/>
      <button>Make Your Reservation</button>
    </form>
  )
}

export default ResyForm
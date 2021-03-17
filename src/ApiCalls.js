const getAllResys = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

const postNewResy = (resy) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resy)
  })
    .then(response => response.json())
}

export { getAllResys, postNewResy }
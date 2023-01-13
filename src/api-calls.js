// GET
function fetchAllData(endpoint) {
  let fetchedInfo = fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then((response) => response.json())
  return fetchedInfo
}

// POST
function updateAPIData(newData, endpoint) {
  const results =   fetch(`http://localhost:3001/api/v1/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(newData), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(res.status)
    }
    return response.json()
  }).catch(error => console.log(new Error(error)))
  return results
}

// DELETE
// const deleteTrip = () => {
// 
// }

export { fetchAllData, updateAPIData }
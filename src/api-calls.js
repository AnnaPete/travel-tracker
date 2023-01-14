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
  })
  .catch(error => console.log(new Error(error)))
  return results
}

// DELETE
function deleteData(trip, endpoint) {
  const deletedInfo =   fetch(`http://localhost:3001/api/v1/${endpoint}`, {
    method: 'DELETE',
    body: JSON.stringify(trip), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(res.status)
    }
    return response.json()
  })
  .catch(error => console.log(new Error(error)))
  return deletedInfo
}

export { fetchAllData, updateAPIData, deleteData }
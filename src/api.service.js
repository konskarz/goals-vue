function handleResponse(response) {
  if (response.status === 204) {
    return '';
  } else if (response.status === 404) {
    return null;
  } else {
    return response.json();
  } 
}
function apiService(endpoint, method, data) {
  const config = {
    method: method || 'GET',
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      'content-type': 'application/json'
    }
  };
  return fetch(endpoint, config)
    .then(handleResponse)
    .catch(error => console.log(error))
}
export { apiService };
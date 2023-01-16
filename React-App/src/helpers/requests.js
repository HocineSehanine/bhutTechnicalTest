const getCars = async () => {
  const request = await fetch('http://api-test.bhut.com.br:3000/api/cars');
  const requestJson = await request.json();
  return requestJson;
};


const updateCar = async (id, data) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const request = await fetch(`http://api-test.bhut.com.br:3000/api/cars/${id}`, options);
  const requestJson = await request.json();
  return requestJson;
};

const createCar = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const request = await fetch(`http://api-test.bhut.com.br:3000/api/cars`, options);
  const requestJson = await request.json();
  return requestJson;
};

const deleteCar = async (id, data) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const request = await fetch(`http://api-test.bhut.com.br:3000/api/cars/${id}`, options);
  const requestJson = await request.json();
  return requestJson;
};

export {
  getCars,
  updateCar,
  deleteCar,
  createCar,
};
const { fetchData } = require('./1-understanding-promises.js');

fetchData((data) => {
  console.log(data)
})
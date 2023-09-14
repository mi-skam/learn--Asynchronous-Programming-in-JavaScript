const XMLHttpRequest = require('xhr2');

function fetchData(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.boredapi.com/api/activity');
  xhr.onload = () => {
    const fact = JSON.parse(xhr.responseText)
    callback(fact);
  }
  xhr.send();
}

module.exports = { fetchData }

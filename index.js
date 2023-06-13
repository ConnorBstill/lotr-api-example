// When you first clone this, if you want to run it you have to first run `npm i` and also create a `secret.js` file with your `apiKey`

const fetch = require('node-fetch');
const apiKey = require('./secrets/secrets');
const apiUrl = 'https://the-one-api.dev/v2';

const main = async () => {
  // Using .then and .catch
  fetch(`${apiUrl}/movie`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    console.log(response)

    response.json().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err)
    })
  }).catch(err => {
    console.log(err)
  });

  // Using async/await
  try {
    const response = await fetch(`${apiUrl}/movie`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  
    console.log('response', response);
  
    const data = await response.json();
    
    console.log('data', data);
    data[0].name;
  } catch (err) {
    console.log('err', err);
  }
}

try {




} catch (err) {
  console.log()
}

main();

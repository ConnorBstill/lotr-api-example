const fetch = require('node-fetch');

const apiKey = require('./secrets');
const apiUrl = 'https://the-one-api.dev/v2';

const main = async () => {

  // fetch(`${apiUrl}/movie`, {
  //   method: 'get',
  //   headers: {
  //     Authorization: `Bearer ${apiKey}`
  //   }
  // }).then(response => {
  //   console.log(response)

  //   response.json().then(data => {
  //     console.log(data);
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }).catch(err => {
  //   console.log(err)
  // });

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
  } catch (err) {
    console.log('err', err);
  }
}

main();

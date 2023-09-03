import React,{useState} from 'react';


function App() {
  //registering with company
  fetch('http://20.244.56.144/train/register', {
  method: 'POST',
  
  body: JSON.stringify({
    "companyName": "Train Central",
    "ownerName": "Satya",
    "rollNo": "124004423",
    "ownerEmail": "124004423@sastra.ac.in",
    "accesscode": "XGgVsc"
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  //registering with train company
  // fetch('http://20.244.56.144/train/register')
  // .then(res=>res.json())
  // .then(data=>console.log(data))
  //giving invalid response
//   Failed to load resource: the server responded with a status of 405 (Method Not Allowed)
// VM55:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
// register:1     Failed to load resource: the server responded with a status of 405 (Method Not Allowed)
// VM56:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
//     at App.js:5:1
// (anonymous) @ App.js:5

//auth token
// fetch('http://20.244.56.144/train/auth')
// .then(res=>res.json())
// .then(data=>console.log(data))
// ERROR
// Unexpected end of JSON input
// SyntaxError: Unexpected end of JSON input
//     at http://localhost:3000/main.f356ef1cc460b891d111.hot-update.js:37:60
// getting error again

// this is an api to register ur company with joe doe railway server
// fetch('http://20.244.56.144/train/register')
// {
//   "companyName" : "Train Central",
//   "ownerName" : "Satya",
//   "rollNo" : "124004423",
//   "ownerEmail" : "124004423@sastra.ac.in",
//   "accesscode" : "FKDLjg"
// }
// response executed successfully
// {
//   "companyName":"Train Central",
//   "clientID":"b4612a0-f5a4-11ec-9a03-0242ac130002",
//   "clientSecret":"c1b1d0c0-0b5d-11ec-9a03-0242ac130002"
// }
  return (
    <div >
      Hdellow orld 
    </div>
  );
}

export default App;

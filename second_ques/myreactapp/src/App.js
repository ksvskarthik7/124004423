import React,{useState} from 'react';


export default function App() {
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
  //encountering CORS error

  //registering with train company
  
  // FOr getting the auth token
const authenticationData = {
  clientID: 'your-client-id', // Replace with your actual client ID
  clientSecret: 'your-client-secret', // Replace with your actual client secret
};


const authEndpoint = 'http://20.244.56.144/train/auth';


const headers = {
  'Content-Type': 'application/json',
};

// Make the POST request to obtain the access token
fetch(authEndpoint, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(authenticationData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Nework response wasnot ok');
    }
    return response.json();
  })
  .then((data) => {
    
    const accessToken = data.accessToken; // Replace 'accessToken' with the actual property name in the response JSON
    console.log('Access Token:', accessToken);

    
  })
  .catch((error) => {
    console.error('Error:', error);
  }); //again blocked by cors policy and unable to get the data

  //lets say we got the 
  return (
    <div >
      Hdellow orld 
    </div>
  );
}



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
  
  //after getting the auth token and getting the train details like below.
  //but right now it is being blocked by CORS policy

  //lets say we got the train details from the trains endpoint
  //it will return a json. lets say we have it in 'data'
  const trainDetails = useState(data);
  //keeping our data in usestate variable so we can use it everywhere.
  const [traindelay,settraindelay]=useState(false);
  
  const gettraindelays = () =>{
    //iterating through the data json.
    settraindelay(true);
      
  }

  return (
    <div >
      <h1>Trains Central </h1>
      <p>get all your train details here</p>
      <button onClick={gettraindelays}>delayed by more than 30min</button>
      { traindelay &&
        data.map((item) => {
          if(item.delayedby > 30){
            return <p>item.trainName</p>
          }//delayed train names are added.
        })
      }
    </div>
  );
}



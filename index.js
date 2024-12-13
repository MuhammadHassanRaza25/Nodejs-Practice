const tasks = [
  {
    id: 1,
    task: "Nothing is impossible"
  },
  {
    id: 2,
    task: "Never give up"
  },
  {
    id: 3,
    task: "Create your own shine"
  }
]

import express from 'express'
const app = express()
const PORT = 4000;

app.get('/', (req, res)=>{
  console.log("req==>", req);
  res.status(200).send(tasks)
})  

app.post('/', (req, res)=>{
  console.log("req==>", req);
  res.send('Post request by Hassan Raza')
}) 

app.put('/', (req, res)=>{
  console.log("req==>", req);
  res.send('Put request by Hassan Raza')
}) 

app.delete('/', (req, res)=>{
  console.log("req==>", req);
  res.send('Delete request by Hassan Raza')
})  
 
// server localhost pe run karne ke liye
app.listen(PORT,()=>{
    console.log('Server is running on PORT' + PORT);
})


// SUMMARY OF THIS CODE  //

// All Requests Summary
// jab bhi request ati hai to callback milta hai or usme 2chezain milti hain. 1.request 2.response
// response:res dena zarori hai agar ham response:res nahi send karenge to localhost par reload hota rahega.

// Request Status
// status: 200 OK. Request is successfull.
// status: 400 Bad Request. Server ko request samajh nahi aayi.
// status: 403 Forbidden. Client ko request access karne ki permission nahi hai.
// status: 404 Not Found. Requested resource nahi mila.
// status: 500 Internal Server Error. means hamny data sahi send kia hai server pe koi masla hogaya.

// koi bhi file run karne ke liye. in cmd: node fileName.js
// agar main koi change karon to mujhy bar bar server nahi chalana pare iske liye
// package.json main scripts main "start": "node index.js", "dev": "nodemon index.js" ye add kardenge.
// ye add karne ke baad cmd main (npm run dev) type karenge to run project hojayega or refresh karne par changes bhi honge.
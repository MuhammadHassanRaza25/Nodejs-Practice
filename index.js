import express from 'express'
import morgan from 'morgan';
import userRoutes from './routers/users.js'
const app = express()
const PORT = 4000;

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
  },
  {
    id: 4,
    task: "Muhammad Hassan Raza: Sofyware Engineer 📱🚀"
  },
  {
    id: 5,
    task: "Think less do more"
  },
   {
    id: 6,
    task: "MERN Stack Expert"
  }
]

app.use(morgan("tiny")) //morgan install from npm. ye konsi api call howi h wo check karne ke liye use krte hain. samajho ye application level middleware lag gaya h. ye req ki details batayga konsi req call howi h or konse route pe call howi hai. 
app.use(express.json()) //ham body main jo data send krte hain ye usko json main convert krta h. ye nhi lagaynge to req.body main undefined ayga.


function middleware(req, res, next){
  req.requestBy = 'Hassan Raza'  //ham middleware ke through koi key bhi add karsakte hain.
  // res.status(500).send('System main koi masla hai.') //ham chahen to res:response ko yahin se rok sakte hain.
  next()
}
app.use(middleware) 
// Summary of Middleware //
// ye middleware pure app ke uper laga howa hai means application level par laga howa h har request par chalega.
// ham chahen to route level pe lagaden means only get,post,put,delete etc par.
// agar next() nhi lagaynge to load hota rahe ga age nhi jayga.


app.get('/', (req, res)=>{
  res.status(200).send(tasks)
  console.log('Request By ==>', req.requestBy);
})  

app.use('/users', userRoutes) // app.use isliye kia h taky /user karke agar mere backend par request ay to wo userRoutes par chale jay jo import kia hai.

app.post('/', (req, res)=>{
  console.log('req body==>', req.body);
  res.send('Post request by Hassan Raza')
}) 

app.put('/', (req, res)=>{;
  res.send('Put request by Hassan Raza')
}) 

app.delete('/', (req, res)=>{
  res.send('Delete request by Hassan Raza')
})  
 
// server localhost pe run karne ke liye
app.listen(PORT,()=>{
    console.log('Server is running on PORT' + PORT);
})


// SUMMARY OF THIS CODE  //

// All Requests Summary //
// jab bhi request ati hai to callback milta hai or usme 2chezain milti hain. 1.request 2.response
// response:res dena zarori hai agar ham response:res nahi send karenge to localhost par reload hota rahega.

// All Request Status //
// status: 200 OK. Request is successfull.
// status: 201. Jab DB main koi data add ho or successfully get hojaye to 201 status dete hain.
// status: 400 Bad Request. Server ko request samajh nahi aayi.
// status: 403 Forbidden. Client ko request access karne ki permission nahi hai.
// status: 404 Not Found. Requested resource nahi mila.
// status: 500 Internal Server Error. means hamny data sahi send kia hai server pe koi masla hogaya.

// koi bhi file run karne ke liye. in cmd: node fileName.js
// agar main koi change karon to mujhy bar bar server nahi chalana pare iske liye
// package.json main scripts main "start": "node index.js", "dev": "nodemon index.js" ye add kardenge.
// ye add karne ke baad cmd main (npm run dev) type karenge to run project hojayega or refresh karne par changes bhi honge.
import express from 'express'
const app = express()
const PORT = 4000;

app.get('/', (req, res)=>{
  console.log("req==>", req);
  res.send('Muhammad Hassan Raza > MERN Stack Developer 🚀📊📱')
})   
// summary
// jab bhi request ati hai to callback milta hai or usme 2chezain milti hain. 1.request 2.response
// response:res dena zarori hai agar ham response:res nahi send karenge to localhost par reload hota rahega.

// server localhost pe run karne ke liye
app.listen(PORT,()=>{
    console.log('Server is running on PORT' + PORT);
})

// koi bhi file run karne ke liye. in cmd: node fileName.js
// agar main koi change karon to mujhy bar bar server nahi chalana pare iske liye
// package.json main scripts main "start": "node index.js", "dev": "nodemon index.js" ye add kardenge.
// ye add karne ke baad cmd main (npm run dev) type karenge to run project hojayega or refresh karne par changes bhi honge.
import express from "express";
const router = express.Router()

const users = [
    {
        id: 1,
        fullName: "Muhammad Hassan Raza",
        email: "Developer@gmail.com"
    }
]

router.get("/", (req, res)=>{
   res.send(200).json({
    error: false,
    data: users,
    msg: "Users Fetched Successsfully"
   })
})

router.post("/", (req, res)=>{
    const {fullName, email} = req.body;
    users.push({fullName, email, id: users.length+1})
    res.send(201).json({
        error: false,
        data: users,
        msg: "Users Added Successsfully"
       })
})

router.get("/:id", (req, res)=>{     
    const user = users.find((data)=> data.id == req.id) 
    users.push({fullName, email, id: users.length+1})
    if(!user){
        res.send(404).json({
            error: true,
            data: users,
            msg: "User Not Found Added"
        })
    }

    res.send(201).json({
        error: false,
        data: users,
        msg: "User Found Successsfully"
    })
})
// Summary: id dynamic hogi isliye : lagaya h id ke ilwa kuchbhi likh sakte hain jo likhenge us name se data miljayega. // 

export default router;
const express = require('express');
const bodyparser= require('body-parser');
const cors = require('cors')
const path = require('path');
const sequelize = require('./database');
const User = require('./usertable');
const app =express();
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended:true }));
app.use(cors())
app.use(express.static('public'));

app.get('/',(req,res)=>{
   res.sendFile(path.join('./index.html'))
})

app.post('/add-user',async(req,res,next)=>{
    const food1 = req.body.food1;
    const category1 = req.body.category1;
    const foodname1 = req.body.description1;
    console.log(food1,category1,foodname1);

    const data = await User.create({food:food1,category:category1,foodname:foodname1});
    res.status(201).json({newuser:data})

});
app.get('/getuser', async (req,res,next)=>{
     const users = await User.findAll();
     res.status(200).json({alluser:users})
});

app.delete('/delete-user:id',async(req,res)=>{
    try{
  const uid = req.params.id;
  await User.destroy({where:{id:uid}});
  res.sendStatus(200)

    }catch(err){
        console.log(err);
        
    }
})

app.listen(3000,()=>{
    console.log('app listening on port 3000')
})

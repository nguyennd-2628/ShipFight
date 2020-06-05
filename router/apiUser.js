const express = require('express');
const apiUser = express.Router();


// create new user
apiUser.post("/",(req,res)=>{
    console.log("create new user")
})

// get all user
apiUser.get('/', (req, res) => {
  console.log("all user")
});

// get user by id 
apiUser.get('/:id', (req, res) => {
  console.log("get user by id")
});

// apdate user by id
apiUser.put('/:id', (req, res) => {
  console.log("da login")
})

// delete user by id
apiUser.delete('/:id',(req,res)=>{
    console.log("delete user by id")
})

module.exports = apiUser;
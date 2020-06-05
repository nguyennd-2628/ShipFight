  const express = require('express');
  const apiAuth = express.Router();
  var {Pool,Client} = require("pg");
  
  var connectionString = "postgres://postgres:123@localhost:5432/BattleShip";
  var pool = new Pool({
    connectionString:  connectionString,
  })

  // login ---------------
  apiAuth.post('/login', (req, res) => {
    // var (username, password) = req.body;
    // pool.query(`select * from taikhoan where tendangnhap = '${User.username}' and matkhau ='${User.password}'`,
    //     (err,data)=>{
    //         if(err) res.status(500).send({success:0,err})
    //         else{
    //             if(data.rows.length > 0 ){
    //                 console.log("success");
    //                 res.status(201).send({success:1,userName : data.rows[0]})
    //             }
    //             else{
    //                 res.status(500).send({success:0,error:'ten dang nhap hoac mat khau ko dung'})
    //             }
    //         }
    //     }
    // )
  });

  // logout -------------- 
  apiAuth.get('/logout', (req, res) => {
    console.log("logout")
  });

  // check login
  apiAuth.get('/login/check', (req, res) => {
    console.log("da login")
  })

  module.exports = apiAuth;
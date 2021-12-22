const {connect} = require('mongoose')
require('dotenv').config()

connect(process.env.DATABASE_URL,{
     useNewUrlParser: true,
     useUnifiedTopology:true
 }).then(()=> console.log("database connected succesfully")).catch(err=>console.log(err))
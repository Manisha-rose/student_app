const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manisharose_db_user:manisha123@cluster0.jog14qj.mongodb.net/kmct?appName=Cluster0")
  .then(()=>{
    console.log('connected!')
  })
  .catch((err)=>{
    console.log(err)
  })
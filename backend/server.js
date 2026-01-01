const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

 const path= require("path")

require("dotenv").config(); //   VERY IMPORTANT

 const User = require("./models/user")

  const sendMail= require("./utils/sendMail")
 
const app = express();




// middleware
app.use(cors());
app.use(express.json());


  // mongodb


  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error:", err.message));

const port = process.env.PORT || 4000;


// mongoose
//   .connect("mongodb://127.0.0.1:27017/kishandatabase")
//   .then(() => console.log("mongoDB connected successfully ")).catch((err)=> console.log("erro", err.message))








  //  for    download resume


   app.get("/resume-download",(req,res)=>{

  const   filepath= path.join(
  __dirname,
   "public",
  "kishan_resume.pdf"

)


res.download(filepath,"Kishan_kumar_sahu_resume.pdf",(err)=>{

  if(err){
    res.status(500).send(" File Download Error")
  }
})

   })

   



app.post("/register",async (req, res) => {


   
   try {

      const { name, email, message } = req.body;


    

     let  newuser= await User.create({
    name,
    email,
    message
   })

     await sendMail(name, email, message);

     res.status(201).json({
    success: true,
    message:"registration successful",
    data:newuser
  
     })

   } catch (error) {
    
   res.status(500).json({
          success: false,
      message:  "registration failed",
      error: error.message, 
   })

   }

  
});

// -------------------- Serve Frontend -------------------- //

// Path to frontend build
const frontendDistPath = path.join(__dirname, "..", "frontend", "dist");

// Serve static files
app.use(express.static(frontendDistPath));

// SPA fallback (React Router refresh fix)
app.use((req, res) => {
  res.sendFile(path.join(frontendDistPath, "index.html"));
});










app.listen(port, () => {
  console.log("server started on port 4000");
});

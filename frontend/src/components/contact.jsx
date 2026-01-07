import React, { useState } from 'react'

   
function Contact() {


  const [name, setName] = useState("")
 const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")



  const  handlesubmit =async(e)=>{


       const  clientData={
        name,
        email,
        message
       }


  e.preventDefault();

   await fetch("https://portfolio-1-serverr.onrender.com/register" ,{

    method: "POST",


    headers:  {
      "Content-Type" : "application/json"
    },

     body: JSON.stringify(clientData)

   });
   

   alert("Data sent to database")

     console.log(name, email, message)

      setName("")
      setEmail("")
       setMessage("")

  };




  return (
    <section className="min-h-screen pt-24 px-6 md:px-16 bg-[#020617] mb-32">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3  text-zinc-300">
          Contact Me
        </h2>
        {/* <p className="text-gray-400  ">
          Feel free to reach out for collaborations or opportunities
        </p> */}
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE – Contact Info */}

   {/*  */}


















        {/*  */}
        <div className="space-y-6">

<h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
      <p className="text-gray-400">
        Open for job opportunities, freelance projects and collaborations.
      </p>




  <div className="bg-white p-5 rounded-xl shadow-md   hover:skew-y-3 duration-500">
                  <p className='text-black'>📧 kumarkishan@gmail.com</p>
        <p className='text-black'>📞 +91 8409660865</p>
      
          </div>
 
         

          <div className="bg-white p-5 rounded-xl shadow-md  hover:skew-y-3 duration-500">
            <a href="https://www.linkedin.com/in/kishan-kumar-sahu-10b3b6315/"   className="block"
            

            >  <h3 className="font-semibold text-lg">💼 LinkedIn</h3></a>
            
              
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md   hover:skew-y-3 duration-500">
              <a href="https://github.com/kishan-kumar-sahu/"   className="block "
            
   
            >  <h3 className="font-semibold text-lg  "> 💼  GitHub</h3></a>
            
         
          </div>

          

        </div>

        {/* RIGHT SIDE – Form + Image */}
        <div className="bg-gray-400 p-6 rounded-xl shadow-lg">

          <img
           src="/illution_image.png "

            alt="contact"
            className="w-24 mx-auto mb-6 hover:rotate-[360deg] duration-300  rounded-lg"
          />
 
          <form className="space-y-4"    onSubmit={handlesubmit} >

            <input

             value={name}
             onChange={(e)=> setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
            />

            <input
 onChange={(e)=> setEmail(e.target.value)}
            value={email}
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
            />

            <textarea
             onChange={(e)=> setMessage(e.target.value)}
            value={message}
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md transition hover:bg-gray-800"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;

import {BsRocketTakeoff} from "react-icons/bs";
import {FiMail} from 'react-icons/fi';
const ContactWithMe = () => {
  return (
    <div
      // style={{ border: "1px solid red" }}
      className="max-w-[1280px] mt-16 mx-auto grid sm:grid-cols-2 px-5"
    >
      <div  className="mb-8">
        <div className="mb-5">
        <small className="bg-[#222222] text-[#fff]  px-4 py-3 rounded-3xl ">CONTACT</small>
        </div>
        <h1 className="font-bold text-[45px] font-serif py-2">
          Got a problem to solve?
        </h1>
        <p className="text-[20px] font-serif font-thin">
          Get your space suit ready and tell me your ideas to <strong>develop</strong> your <strong>dream
          website</strong>.
        </p>
      </div>

      <div >
        <form
          action=""
          method="get"
          className="flex flex-col sm:px-4"
          style={{ caretColor: "red" }}
        >
          <div className="" >
            <label
              htmlFor=""
              className=" uppercase font-mono font-bold text-[20px]"
            >
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter Your Name"
            
              className="w-full border-[2px] focus-within:border-3  focus:border-[#5252ff]  border-[black] outline-none  my-3 font-mono font-extrabold text-[18px] h-[60px] p-[12px]"
            />
          </div>
          <div className="pt-">
            <label
              htmlFor=""
              className=" uppercase font-mono font-bold text-[20px]"
            >
              Your Email address
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              required
              // style={{border:"2px solid black"}}
              className="w-full border-[2px] focus-within:border-3  focus:border-[#5252ff]  border-[black] outline-none  my-3 font-mono font-extrabold text-[18px] h-[60px] p-[12px]"
            />
          </div>
          <div className="pt-">
            <label
              htmlFor=""
              className=" uppercase font-mono font-bold text-[20px]"
            >
              Type Your MESSAGE
            </label>
            <textarea
              name=""
              id=""
              placeholder="Type message..."
              className="w-full border-[2px] focus-within:border-3  focus:border-[#5252ff]  border-[black] outline-none  my-3 font-mono font-extrabold text-[18px] h-[120px] p-[12px]"
            ></textarea>
          </div>
          <div  className="flex  w-full items-center">
            <p  className= "flex-1 text-[18px]  lg:text-[20px] hidden font-mono lg:flex items-center ">
           <span className="mt-2"> <FiMail/></span>  <span className="px-2">mr7aali@gmail.com</span>
            </p>
          <button
          type="submit"
              // style={{ border: "3px solid #111" }}
              
              style={{ border: "2px solid #111" }}
              className="no-underline w-full lg:w-auto  py-2 px-3 lg:py-3 lg:px-5 text-[15px] lg:text-[18px]  hover:bg-slate-400 cursor-pointer bg-slate-300  text-center flex items-center justify-center font-semibold uppercase"
            >
              Hit Me Up <span className="px-1 text-[18px] text-[#7843e9] mt-1 ml-2"><BsRocketTakeoff/></span>
            </button>
          </div>
          
        </form>
      </div>


    </div>
  );
};

export default ContactWithMe;

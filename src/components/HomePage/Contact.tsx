const ContactWithMe = () => {
  return (
    <div
      // style={{ border: "1px solid red" }}
      className="max-w-[1280px] mt-16 mx-auto grid grid-cols-2"
    >
      <div>
        <h1 className="font-bold text-[45px] font-serif py-2">
          Got a problem to solve?
        </h1>
        <p className="text-[20px] font-serif font-thin">
          Get your space suit ready and tell me your ideas to develop your dream
          website.
        </p>
      </div>

      <div>
        <form
          action=""
          method="get"
          className="flex flex-col px-4"
          style={{ caretColor: "red" }}
        >
          <div className="">
            <label htmlFor="" className=" uppercase font-mono font-bold text-[20px]">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg my-3 font-mono font-extrabold text-[18px] h-[60px] p-[12px]"
            />
          </div>
          <div className="pt-">
            <label htmlFor="" className=" uppercase font-mono font-bold text-[20px]">
              Email
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg my-3 font-mono font-extrabold text-[18px] h-[60px] p-[12px]"
            />
          </div>

          {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
        </form>
      </div>
    </div>
  );
};

export default ContactWithMe;

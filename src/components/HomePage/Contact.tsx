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
        <form action="" method="get" className="flex flex-col px-4" style={{caretColor:"red"}}>
          <div className="">
            <label htmlFor=""  className="uppercase text-[18px]">Name</label>
            <input style={{caretColor:"red"}} type="text" className="w-full rounded-sm text-[18px] h-[24px] p-[12px] caret-slate-950" />
          </div>
          <div className="pt-7">
            <label htmlFor="" className="uppercase text-[18px]">Email</label>
            <input type="text" className="w-full rounded-sm text-[18px] h-[24px] p-[12px]" />
          </div>
         
          {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
        </form>
      </div>





    </div>
  );
};

export default ContactWithMe;

const NavBar = () => {
  return (
    <header  className="max-w-[1280px] py-2 mx-auto flex justify-between" style={{border:"1px solid red"}}>
      <div className="text-2xl">
        <span className="text-2xl">About</span>
        <span>work</span>
      </div>
      <div>
        <p>
          Lokkee <span>Studios</span>
        </p>
      </div>
      <div>
        <button>Hit me up</button>
      </div>
    </header>
  );
};

export default NavBar;

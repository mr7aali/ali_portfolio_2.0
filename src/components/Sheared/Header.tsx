import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Header = () => {
  const NavItem = ["about", "book", "portfolio", "blog", "contact"];
  const SocialIcon = [
    { Icon: LinkedinOutlined },
    { Icon: FacebookOutlined },
    { Icon: InstagramOutlined },
    { Icon: GithubOutlined },
  ];
  return (
    <header className="bg-[#111]">
      <div className="max-w-[1040px] mx-auto flex py-6 items-center">
        <h1 className="text-[#fff] flex-1 mx-5 text-[40px] font-bold ">Aali</h1>
        <div className="flex items-center">
          <ul className="list-none flex">
            {NavItem.map((Item) => (
              <li key={Item} className=" cursor-pointer ">
                <span
                //  style={{border:'1px solid red'}} 
                 className="py-4 px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[18px] transition ease-linear delay-150 font-thin">
                  {Item}
                </span>
              </li>
            ))}
          </ul>

          <div className="ml-10">
            {SocialIcon.map((Item, i) => (
              <span
                key={i}
                // style={{ border: "1px solid red" }}
                className="text-[#fff] text-[30px] p-2 xl:p-3 cursor-pointer hover:opacity-50 delay-150 transition-all"
              >
                <Item.Icon />
              </span>
            ))}
          </div>
          <div className="hidden">
            <span className="text-[#fff] text-[30px] p-3 cursor-pointer hover:opacity-50 delay-150 transition-all">
              <MenuOutlined />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

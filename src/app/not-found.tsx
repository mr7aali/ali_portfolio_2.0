import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Image
        width={800}
        className="h-full"
        height={800}
        src="https://www.startech.com.bd/catalog/view/theme/starship/images/not-found.svg"
        alt=""
        // srcset=""
      />
    </div>
  );
};

export default NotFoundPage;

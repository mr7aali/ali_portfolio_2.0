"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const route = useRouter();
  setTimeout(() => {
    route.back();
  }, 3000);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Image
        width={800}
        className="h-full"
        height={800}
        src="https://www.startech.com.bd/catalog/view/theme/starship/images/not-found.svg"
        alt="This is not found page's picture"
      />
    </div>
  );
};

export default NotFoundPage;

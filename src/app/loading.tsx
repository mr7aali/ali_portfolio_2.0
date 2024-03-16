const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div
          style={{
            borderTop: "4px solid rgb(168 85 247)",
            borderBottom: "4px solid black",
          }}
          className="absolute animate-spin rounded-full h-32 w-32  border-t-2  border-b-2 border-purple-500"
        ></div>
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

export default LoadingPage;

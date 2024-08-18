import banner from "../../assets/images/banner/banner.jpg";

function Home() {
  const handleClickLeft = () => {
    console.log("Left Button was Clicked");
  };
  const handleClickRight = () => {
    console.log("Right Button was Clicked");
  };

  return (
    <div className="relative flex justify-center">
      <img src={banner} alt="banner-img" className="w-full h-[100vh]" />
      <div className="absolute bottom-0 2xl:top-[40rem] z-10 p-4 w-[67%] flex justify-between items-center space-x-4">
        <button
          type="button"
          className="relative z-10 h-60 text-white w-80 px-4 py-2 rounded-[100%]"
          onClick={handleClickLeft}
        >
        </button>
        <button
          type="button"
          className="relative z-10 text-white h-60 w-80 px-4 py-2 rounded-[100%]"
          onClick={handleClickRight}
        >
        </button>
      </div>
    </div>
  );
}

export default Home;

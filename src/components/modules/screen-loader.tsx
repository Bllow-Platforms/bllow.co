import Preloader from "./preloader";

const ScreenLoader = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <Preloader />
    </div>
  );
};

export default ScreenLoader;

const Home = () => {
  return (
    <div className="container relative mx-auto h-[calc(100vh-121px)] w-full py-12">
      {/* <div className=" flex container mx-auto py-12 w-full h-[calc(100vh-150px)]  "> */}
      <div className="absolute mx-80 grid grid-cols-2">
        <div className="grid auto-rows-max py-16">
          <div className="px-1">Hello, i'm Hibban,</div>
          <div className="px-0 text-8xl">Web Developer</div>
          <div className="px-1 mb-5font-semibold">based in Indonesia</div>
          <div className="mt-5 px-1">
            <button className="bg-black px-5 py-2 mx-auto rounded-full text-white">Scroll Down ⇓</button>
          </div>
        </div>
        <div>
          <img src="src/assets/undraw_feeling_proud_qne1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

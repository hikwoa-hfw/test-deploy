import gambar from "../assets/undraw_feeling_proud_qne1.png";

const Home = () => {
  return (
    <div id="home" className="container relative mx-auto h-[calc(100vh-121px)] w-full py-12">
      <div className="absolute mx-80 grid grid-cols-2">
        <div className="grid auto-rows-max py-16">
          <div className="px-1">Hello, I'm Hibban,</div>
          <div className="px-0 text-8xl">Web Developer</div>
          <div className="mb-5 font-semibold px-1">based in Indonesia</div>
          <div className="mt-5 px-1">
            <button className="mx-auto rounded-full bg-black px-5 py-2 text-white">
              Scroll Down ⇓
            </button>
          </div>
        </div>
        <div>
          <img src={gambar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

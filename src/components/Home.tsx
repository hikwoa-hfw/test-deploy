import gambar from "../assets/undraw_feeling_proud_qne1.png";

const Home = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="home"
      className="container relative mx-auto mt-24 h-[calc(100vh-121px)] w-full"
    >
      <div className="absolute mx-80 grid grid-cols-2">
        <div className="grid auto-rows-max py-16">
          <div className="px-1 font-semibold">Hello, I'm Hibban, a fullstack</div>
          <div className="px-0 text-8xl">Web Developer</div>
          <div className="mb-5 px-1 py-1 font-semibold">focusing on front-end and back-end</div>
          <div className="mt-1 px-1">
            <button className="mx-auto rounded-full bg-black px-5 py-2 text-white">
              <a href="#about-me" onClick={(e) => handleSmoothScroll(e,"about-me")}>Scroll Down</a>
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

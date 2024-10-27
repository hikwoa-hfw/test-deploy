const Navbar = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Mencegah perilaku default <a>
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <h1 className="mx-auto flex items-center justify-center py-4 text-5xl font-extrabold">
        Hibban
      </h1>
      <div className="sticky top-4 z-50">
        <div className="z-0 mx-auto w-96 items-center justify-center rounded-full bg-black p-2">
          <ul className="text-s flex justify-center text-white">
            <li className="mx-3">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>Home</a>
            </li>
            <li className="mx-3">
              <a href="#about-me" onClick={(e) => handleSmoothScroll(e, "about-me")}>About Me</a>
            </li>
            <li className="mx-3">
              <a href="#my-project" onClick={(e) => handleSmoothScroll(e, "my-project")}>My Project</a>
            </li>
            <li className="mx-3">
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

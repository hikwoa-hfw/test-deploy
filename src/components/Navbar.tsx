const Navbar = () => {
  return (
    <>
      <h1 className="mx-auto flex items-center justify-center py-4 text-5xl font-extrabold">
        Hibban
      </h1>
      <div className="sticky top-4 z-50">
        <div className="z-0 mx-auto w-96 items-center justify-center rounded-full bg-black p-2">
          <ul className="text-s flex justify-center text-white">
            <li className="mx-3">Home</li>
            <li className="mx-3">About Me</li>
            <li className="mx-3">My Project</li>
            <li className="mx-3">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

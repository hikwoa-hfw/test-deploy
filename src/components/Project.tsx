import gambar1 from "../assets/Card - Element-desktop.png";
import gambar2 from "../assets/Card - Element-desktop (1).png";
import gambar3 from "../assets/Card - Element-desktop (3).png";
import gambar4 from "../assets/Card - Element-desktop (4).png";

const Project = () => {
  return (
    <div className="container mx-auto mb-10 h-screen items-center">
      <div>
        <div className="mx-80">
          <h3 className="mb-6 font-bold">My Work</h3>
          <h4 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex
            doloribus aspernatur fugit magnam quidem sed autem quibusdam
            voluptates laudantium asperiores ullam commodi esse quia pariatur
            nam voluptatibus, neque dignissimos?
          </h4>
        </div>
        <div className="mx-80 mt-10 grid grid-cols-2">
          <div className="mr-4 space-y-2">
            <img src={gambar1} alt="" />
            <h2 className="font-semibold">Crotly</h2>
            <h5 className="pb-3">Mobile App</h5>
          </div>
          <div className="ml-4 space-y-2">
            <img src={gambar2} alt="" />
            <h2 className="font-semibold">Tansto</h2>
            <h5 className="pb-3">Web Design</h5>
          </div>
          <div className="mr-4 space-y-2">
            <img src={gambar3} alt="" />
            <h2 className="font-semibold">Senta</h2>
            <h5 className="pb-3">Mobile App & Branding</h5>
          </div>
          <div className="ml-4 space-y-2">
            <img src={gambar4} alt="" />
            <h2 className="font-semibold">Crint</h2>
            <h5 className="pb-3">Mobile App</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

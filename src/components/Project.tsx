import gambar1 from '../assets/Card - Element-desktop.png'
import gambar2 from '../assets/Card - Element-desktop (1).png'
const Project = () => {
  return (
    <div className="container relative mx-auto flex h-screen items-center">
      <div>
        <div className="mx-80">
          <h3>About Me</h3>
          <h4 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex
            doloribus aspernatur fugit magnam quidem sed autem quibusdam
            voluptates laudantium asperiores ullam commodi esse quia pariatur
            nam voluptatibus, neque dignissimos?
          </h4>
        </div>
        <div className="mx-80 mt-10 grid grid-cols-2">
          <div className="">
            <img src={gambar1} alt="" />
            <h5 className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, fugiat?</h5>
          </div>
          <div className="">
            <img src={gambar2} alt="" />
          </div>
          <div className="">
            <h2>• 2017-2090</h2>
            <div className="px-3">Lorem</div>
          </div>
          <div className="">
            <h2>• 2017-2090</h2>
            <div className="px-3">Lorem</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

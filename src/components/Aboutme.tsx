import { TbBrandTailwind } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";

const Aboutme = () => {
  return (
    <div id="about-me" className="container mx-auto flex h-screen items-center">
      <div>
        <div className="mx-80">
          <h3 className="font-bold mb-6 mt-6">About Me</h3>
          <h4 className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            sapiente delectus iusto voluptatem nihil cupiditate quas repellendus
            rem veritatis laborum neque explicabo architecto eius iste quos
            ratione tempore, recusandae ducimus quam temporibus. Dolorem quos
            exercitationem debitis accusamus vitae hic voluptatem?
          </h4>
        </div>
        <div className="mx-80 mt-6">
          <h2 className="py-3 font-bold">Expertise</h2>
        </div>
        <div className="flex mx-80 mt-10 text-9xl">
          <div className="px-3">
            <TbBrandTailwind />
          </div>
          <div className="px-3">
            <FaHtml5 />
          </div>
          <div className="px-3">
            <IoLogoCss3 />
          </div>
          <div className="px-3">
            <VscVscode />
          </div>
          <div className="px-3">
            <BiLogoTypescript />
          </div>
          <div className="px-3">
            <FaReact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:p-10 w-full pr-5 pl-5">
        <img src="/assets/sample.jpg" alt="" className="rounded-3xl" />
      </div>
      <div className="flex justify-center items-center p-2">
      <Link to="/allstories" className="flex justify-center items-center w-fit h-10 rounded-lg p-1 bg-black text-white">
        All stories
      </Link>
      </div>
    </div>
  );
};

export default Hero;

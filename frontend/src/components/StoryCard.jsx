import {
  FaPenNib,
  FaTags,
  FaRegEye,
  FaRegCommentAlt,
  FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const StoryCard = () => {
  return (
    <div className="h-[400px] w-[300px] rounded-lg shadow-3xl shadow-md">
      <div className="flex items-center justify-start gap-3 p-2">
        <div className="w-10 h-10 rounded-full bg-black"></div>
        <div className="flex">
          <FaPenNib />
          <p className="text-sm">Author</p>
        </div>
      </div>
      <div className="flex justify-normal items-center">
        <h4 className="pl-3 font-medium text-lg">Story Heading...</h4>
      </div>
      <div className="pl-3 pb-1 flex justify-start items-center gap-1 text-sm">
        <FaTags />
        <h5>tag</h5>
      </div>
      <div className="p-4 pt-0 flex justify-normal items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          mollitia quidem eos harum dolorem aut autem recusandae sed optio
          labore odit veritatis praesentium eveniet, suscipit provident,
          nesciunt ipsam dolore ea?
        </p>
      </div>
      <div>
        <Link
          to="/story"
          className="flex justify-end items-center text-black pr-6"
        >
          read...
        </Link>
      </div>
      <div className="flex justify-around p-4">
        <div className="flex gap-1">
          <FaRegEye />
          <p className="text-xs">12,000</p>
        </div>
        <div className="flex gap-1">
          <FaRegCommentAlt />
          <p className="text-xs">12,000</p>
        </div>
        <div className="flex gap-1">
          <FaRegHeart />
          <p className="text-xs">12,000</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

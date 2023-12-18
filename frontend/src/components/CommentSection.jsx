import { IoSend } from "react-icons/io5";

const CommentSection = () => {
  return (
    <div>
      <div className="flex justify-start items-center p-5 gap-4">
        <div className="">
          <div className="w-10 h-10 rounded-full bg-black"></div>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Add a comment..."
            className=" border-b-2 outline-none w-full"
          />
        </div>
        <IoSend className="w-5 h-5"/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CommentSection;

import {
  FaPenNib,
  FaTags,
  FaRegEye,
  FaRegCommentAlt,
  FaRegHeart,
} from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import CommentSection from "../components/CommentSection";

const Story = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 lg:w-[50vw] md:w-[60vw]">
        <div className="flex justify-between items-center pr-5">
          <div className="pl-3 pb-1 flex justify-start items-center gap-1 text-sm">
            <FaTags />
            <a href="">tag</a>
          </div>
          <FaBookmark />
        </div>
        <div className="p-2">
          <h1 className="text-5xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h1>
        </div>
        <div className="flex justify-between items-center lg:justify-start lg:gap-20">
          <div className="flex items-center justify-start gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <div className="flex items-center">
              <FaPenNib />
              <p className="lg:text-lg text-sm">Author</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 lg:pr-20 pr-10">
            <FaRegEye />
            <p className="lg:text-sm text-xs">12000 views</p>
          </div>
        </div>
        <div className="p-2">
          <p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
            <br />
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </span>
            <br />
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </span>
            <br />
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            ipsum quisquam exercitationem eius voluptatem, fugiat obcaecati
            doloribus id, dolore in iure fugit accusantium necessitatibus sequi
            quaerat iste, voluptatibus eum! Neque.
          </p>
        </div>
        <hr />
        <div className="flex gap-2 items-center pl-8">
          <FaRegHeart className="w-5 h-5" />
          <p className="font-bold text-lg">12,000</p>
        </div>
        <CommentSection/>
        <p className="pl-8 font-bold mb-5">1 comment</p>
      </div>
    </div>
  );
};

export default Story;

import React from "react";
import Image from "next/image";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-b-0 border-l-0 border-gray-600 p-5 hover:bg-slate-900 -all cursor-pointer gap-3">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/44976328?v=4"
            alt="cholaimage"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>CHOLA RAJ</h5>
          <pre></pre>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            obcaecati debitis perspiciatis officiis. Quo sit voluptates harum
            laudantium ad aut provident minima, repellat inventore tempore quia
            molestias? Veniam, reiciendis vitae!
          </p>
          <div className="flex justify-between mt-5 text-xl items-center  p-2 pr-2 w-[90%]">
            <div>
              <BiMessageRoundedCheck />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <AiOutlineUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

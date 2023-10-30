import Image from "next/image";
import {
  BsBell,
  BsEnvelope,
  BsFillBookmarkHeartFill,
  BsTwitter,
} from "react-icons/bs";
import { BiHomeCircle, BiMoneyWithdraw, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

import React from "react";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  { title: "Messages", icon: <BsEnvelope /> },
  { title: "TwitterBlue", icon: <BiMoneyWithdraw /> },
  { title: "BookMarks", icon: <BsFillBookmarkHeartFill /> },
  { title: "profile", icon: <BiUser /> },
  { title: "More options", icon: <SlOptions /> },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-2   ml-28">
          <div className="text-2xl  h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
            <div className="mt-1 text-2xl  pr-4">
              <ul>
                {sidebarMenuItems.map((item) => (
                  <li
                    className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor mt-2"
                    key={item.title}
                  >
                    <span className="text-3xl">{item.icon}</span>{" "}
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#1c9bef] mt-5 py-2 px-2 rounded-full w-full ">
                {" "}
                Tweet{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600 ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

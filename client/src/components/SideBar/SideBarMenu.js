import { RiFileCopyLine } from "react-icons/ri";
import { AiOutlinePieChart, AiOutlineFlag,AiOutlineSetting } from "react-icons/ai";
import { MdOutlineFlight } from "react-icons/md";

export const menu = [
    {
        name: "Blogs",
        link: "/userdashboard-blogs",
        icon: <RiFileCopyLine />
    },
    {
        name: "Flags",
        link: "/userdashboard-flags",
        icon: <AiOutlineFlag />
    },
    {
        name: "Plans",
        link: "/userdashboard-plans",
        icon: <MdOutlineFlight />
    },
    {
        name: "Settings",
        link: "/userdashboard",
        icon: <AiOutlineSetting />
    }
]
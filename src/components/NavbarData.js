import React from 'react'
//import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
//import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import { TbLayoutDashboard } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineSportsEsports } from "react-icons/md";
import { TbReportMoney} from "react-icons/tb";
import { MdLogout } from "react-icons/md";
//import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
//import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';

//import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
export const NavbarData = [
    {
        title:"Dashboard",
        icon: <TbLayoutDashboard />,
        link: "/home"
    },
    {
        title:"Teams",
        icon: <HiUserGroup />,
        link: "/home"
    },
    {
        title:"Sports",
        icon: <MdOutlineSportsEsports />,
        link: "/home"
    },
    {
        title:"Tournament",
        icon: <GiTrophyCup />,
        link: "/home"
    },
    {
        title:"Winner",
        icon: <GiPodium />,
        link: "/home"
    },
    {
        title:"Fee Records",
        icon: <TbReportMoney />,
        link: "/home"
    },
    {
        title:"Log out",
        icon: <MdLogout />,
        link: "/home"
    },
]
import React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
//TbReportMoney
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
export const NavbarData = [
    {
        title:"Dashboard",
        icon: <DashboardOutlinedIcon/>,
        link: "/home"
    },
    {
        title:"Teams",
        icon: <Groups3RoundedIcon/>,
        link: "/home"
    },
    {
        title:"Sports",
        icon: <SportsBaseballIcon/>,
        link: "/home"
    },
    {
        title:"Tournament",
        icon: <GiTrophyCup/>,
        link: "/home"
    },
    {
        title:"Winner",
        icon: <GiPodium/>,
        link: "/home"
    },
    {
        title:"Fee Records",
        icon: <RequestQuoteRoundedIcon/>,
        link: "/home"
    },
    {
        title:"Log out",
        icon: <LogoutRoundedIcon/>,
        link: "/home"
    },
]
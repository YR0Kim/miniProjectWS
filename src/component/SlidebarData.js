import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as ImIcons from "react-icons/im";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
    {
        title: '메인 화면으로',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        // cName: 'main'
        cName: '메인'
    },

    {
        title: '디저트',
        path: '/',
        icon: <RiIcons.RiCake3Line />,
        // cName: 'dessert'
        cName: '디저트'
    },

    {
        title: '패션잡화',
        path: '/',
        icon: <GiIcons.GiConverseShoe />,
        // cName: 'fashion'
        cName: '패션잡화'

    },

    {
        title: '액세서리',
        path: '/',
        icon: <GiIcons.GiHeartNecklace />,
        // cName: 'accessory'
        cName: '액세서리'
    },

    {
        title: '육아',
        path: '/',
        icon: <FaIcons.FaBabyCarriage />,
        cName: '육아'
    },

    {
        title: '생활',
        path: '/',
        icon: <ImIcons.ImLeaf />,
        cName: '생활'
    },

    {
        title: '반려동물 용품',
        path: '/',
        icon: <BiIcons.BiBone />,
        cName: '반려동물용품'
    },

    {
        title: '뷰티',
        path: '/',
        icon: <GiIcons.GiLipstick />,
        cName: '뷰티'
    },

    {
        title: '기타',
        path: '/',
        icon: <FiIcons.FiMoreHorizontal />,
        cName: '기타'
    }
]
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
        cName: 'main'
    },

    {
        title: '디저트',
        path: '/?cname=디저트',
        icon: <RiIcons.RiCake3Line />,
        cName: 'dessert'
    },

    {
        title: '패션잡화',
        path: '/?cname=패션잡화',
        icon: <GiIcons.GiConverseShoe />,
        cName: 'fashion'
    },

    {
        title: '액세서리',
        path: '/?cname=액세서리',
        icon: <GiIcons.GiHeartNecklace />,
        cName: 'accessory'
    },

    {
        title: '육아',
        path: '/?cname=육아',
        icon: <FaIcons.FaBabyCarriage />,
        cName: 'childCare'
    },

    {
        title: '생활',
        path: '/?cname=생활',
        icon: <ImIcons.ImLeaf />,
        cName: 'living'
    },

    {
        title: '반려동물 용품',
        path: '/?cname=반려동물용품',
        icon: <BiIcons.BiBone />,
        cName: 'petGoods'
    },

    {
        title: '뷰티',
        path: '/?cname=뷰티',
        icon: <GiIcons.GiLipstick />,
        cName: 'beauty'
    },

    {
        title: '기타',
        path: '/?cname=기타',
        icon: <FiIcons.FiMoreHorizontal />,
        cName: 'etc'
    }
]
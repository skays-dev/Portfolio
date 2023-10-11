'use client'

import { FC, useState } from "react";
import NavBar from "./navBar";
import SideBar from "./sidebar";

import { motion, AnimatePresence } from "framer-motion";

const Header: FC = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const handleOpen = () => {
        setOpenSideBar(!openSideBar);
    }

    return (
        <>
            {openSideBar && <SideBar handleOpen={handleOpen} />}
            <NavBar handleOpen={handleOpen} />
        </>
    );
}

export default Header;
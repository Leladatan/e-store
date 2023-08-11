"use client";

import {type FC, useEffect, useState} from 'react';
import Button from "@/components/ui/Button";
import {FaShoppingCart} from "react-icons/fa";

const NavbarActions: FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <FaShoppingCart size={20} className="text-white"/>
                <span className="ml-2 text-sm font-medium text-white">0</span>
            </Button>
        </div>
    );
};

export default NavbarActions;

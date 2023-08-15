"use client";

import {type FC, useEffect, useState} from 'react';
import Button from "@/components/ui/button";
import {FaShoppingCart} from "react-icons/fa";
import useCart from "@/hooks/use-cart";
import {useRouter} from "next/navigation";

const NavbarActions: FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2" onClick={() => router.push("/cart")}>
                <FaShoppingCart size={20} className="text-white"/>
                <span className="ml-2 text-sm font-medium text-white">{cart.products.length > 9? "9+" : cart.products.length}</span>
            </Button>
        </div>
    );
};

export default NavbarActions;

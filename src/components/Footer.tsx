import React from 'react';
import {Link} from "@nextui-org/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href='/'>
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        width={128}
                        height={38}
                    />
                </Link>

                <p>© 2024 yodon.top. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

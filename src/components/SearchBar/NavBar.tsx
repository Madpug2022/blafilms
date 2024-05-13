import Logo from "@/assets/logos/logo.png"
import Image from "next/image"
import Link from "next/link"
import { LINKS_LEFT, LINKS_RIGTH } from "./config"
import SubNavbar from "./Subvar"
import SearchBar from "./SearchBar"

const NavBar = () => {
    return (
        <>
            <nav className="relative flex items-center justify-evenly w-full h-28 bg-blue-600">
                <div className="flex items-center justify-end w-full pr-36">
                    {LINKS_LEFT.map((link, index) => (
                        <Link key={index} href={link.url} className="uppercase font-bold hover:text-blue-300 transition-colors duration-300">{link.name}</Link>
                    ))}
                </div>
                <Image
                    src={Logo}
                    alt="Logo"
                    width={0}
                    height={0}
                    className="absolute left-[48%] w-20 h-20 z-10"
                />
                <div className="flex items-center w-full pl-36">
                    {LINKS_RIGTH.map((link, index) => (
                        <Link key={index} href={link.url} className="uppercase font-bold hover:text-blue-300 transition-colors duration-300">{link.name}</Link>
                    ))}
                </div>
            </nav>
            <SubNavbar />
            <SearchBar />
        </>
    )
}

export default NavBar

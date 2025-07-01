import { useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { Menu, X } from "lucide-react"; // Icônes burger

export default function Navbar() {
    const { auth } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    const deconnexion = () => {
        router.post('/logout');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/30 text-white px-6 py-3">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <img src="/images/logo.png" alt="Logo" className="h-20" />

                {/* Desktop links */}
                <div className="hidden md:flex items-center justify-evenly w-1/3 font-bold text-lg">
                    <Link href="/" className="text-[#0CC0DF]">Accueil</Link>
                    <Link href="/#about" className="text-[#C8F023]">About</Link>
                    <Link href="/#articles" className="text-[#C8F023]">Articles</Link>
                </div>

                {/* Connexion / Déconnexion */}
                <div className="hidden md:flex items-center">
                    {!auth.user ? (
                        <Link href="/login">
                            <img src="/images/connexion.png" className="w-[60px]" alt="Connexion" />
                        </Link>
                    ) : (
                        <button onClick={deconnexion}>
                            <img src="/images/deconnexion.png" className="w-[60px]" alt="Déconnexion" />
                        </button>
                    )}
                </div>

                {/* Burger button (mobile only) */}
                <button onClick={toggleMenu} className="md:hidden text-white">
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden mt-3 flex flex-col gap-4 font-bold text-lg">
                    <Link href="/" className="text-[#0CC0DF]" onClick={toggleMenu}>Accueil</Link>
                    <Link href="/#about" className="text-[#C8F023]" onClick={toggleMenu}>About</Link>
                    <Link href="/#articles" className="text-[#C8F023]" onClick={toggleMenu}>Articles</Link>

                    {!auth.user ? (
                        <Link href="/login" onClick={toggleMenu}>
                            <img src="/images/connexion.png" className="w-[50px]" alt="Connexion" />
                        </Link>
                    ) : (
                        <button onClick={() => { toggleMenu(); deconnexion(); }}>
                            <img src="/images/deconnexion.png" className="w-[50px]" alt="Déconnexion" />
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
}

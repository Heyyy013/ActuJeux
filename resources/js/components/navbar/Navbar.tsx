import { Link, router, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;

    const deconnexion = () => {
        router.post('/logout');
    }

    return (
        <div>
            <nav className="flex justify-between w-full h-25 fixed backdrop-blur-2xl bg-black/30 text-white px-10">

                <img src="/images/logo.png" alt="Logo" />
                <div className="flex items-center justify-evenly w-1/3 font-bold text-lg">
                    <Link href="/" className="text-[#0CC0DF]">Accueil</Link>
                    <Link href="/#about" className="text-[#C8F023]">About</Link>
                    <Link href="/#articles" className="text-[#C8F023]">Articles</Link>
                </div>
                <div className="flex items-center">
                    {!auth.user ? 
                        <Link href="/login"><img src="/images/connexion.png" className="w-[60px] " alt="" /></Link>

                     : 

                        <button onClick={deconnexion} className="cursor-pointer"><img src="/images/deconnexion.png" className="w-[60px] " alt="" /></button>
                    }
                </div>
            </nav>
        </div>
    );
}
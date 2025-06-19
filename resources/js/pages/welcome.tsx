import { Link, router, usePage } from "@inertiajs/react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';
import Navbar from "@/components/navbar/Navbar";

dayjs.extend(relativeTime);
dayjs.locale('fr');


export default function Welcome({ articles }) {

    console.log(articles);

    return (
        <div>
            <Navbar/>
            <section id="about">
                <div style={{ backgroundImage: "url('/images/bgAbout.jpg')" }} className="w-full h-screen text-white bg-cover flex items-center">
                    <p className="text-white w-1/2 mx-auto text-center font-bold text-3xl h-1/2 leading-relaxed">Bienvenue sur <span className="text-lime-300">GamePulse</span> , votre nouvelle source d’actualités dédiée à l’univers des jeux vidéo !

                        Notre mission est simple : vous tenir informé(e) des prochaines sorties, des tendances du moment, et des annonces majeures dans le monde du <span className="text-fuchsia-400">gaming</span>. </p>
                </div>
                <div className="flex flex-col-reverse h-screen" id="articles">

                    {articles.map((article, index) => (
                        <div key={index} className="w-1/2 mx-auto mb-auto mt-10 overflow-hidden rounded-2xl shadow-xl">
                            <Link href={`article/${article.id}`}>

                                <div className="w-9/10 mx-auto">

                                    <p>{article.categories.nom}</p>
                                    <h1 className="mb-5">{article.titre}</h1>
                                    <p className="line-clamp-5">
                                        {article.description}
                                    </p>
                                    <p>{dayjs(article.created_at).fromNow()}</p>
                                    {article.tags.map((tag, index) => (
                                        <p key={index}>{tag.nom}</p>
                                    ))}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
import { Link, router, usePage } from "@inertiajs/react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale('fr');


export default function Welcome({ articles, categories, tags }) {
    const [search, setSearch] = useState('')
    const [filtre, setFiltre] = useState('')

    const filteredArticles = articles.filter(article => (
        article.titre.toLowerCase().includes(search.toLowerCase()) ||
        article.categories.nom.toLowerCase().includes(search.toLowerCase()) ||
        article.tags.some(tag => tag.nom.toLowerCase().includes(search.toLowerCase()))
    ) &&
        (
            filtre === '' || article.categories.nom.toLowerCase() === filtre.toLowerCase() ||
            article.tags.some(tag => tag.nom.toLowerCase().includes(filtre.toLowerCase()))
        )
    )

    console.log(articles);

    return (
        <div>
            <Navbar />
            <section id="about">
                <div style={{ backgroundImage: "url('/images/bgAbout.jpg')" }} className="w-full h-screen text-white bg-cover flex items-center">
                    <p className="text-white w-1/2 mx-auto text-center font-bold text-3xl h-1/2 leading-relaxed">Bienvenue sur <span className="text-lime-300">GameVibe</span> , votre nouvelle source d’actualités dédiée à l’univers des jeux vidéo !

                        Notre mission est simple : vous tenir informé(e) des prochaines sorties, des tendances du moment, et des annonces majeures dans le monde du <span className="text-fuchsia-400">gaming</span>. </p>
                </div>

                <div className="w-1/4 mx-auto flex justify-between">

                    <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="placeholder:text-center text-center" />

                    <select defaultValue={''} name="filtre" id="" className="w-1/3" onChange={(e) => { setFiltre(e.target.value) }}>
                        <option value="" >All</option>
                        {categories.map((categorie, index) => (
                            <option key={index} value={categorie.nom}>{categorie.nom}</option>
                        ))}
                        {tags.map((tag, index) => (
                            <option key={index} value={tag.nom}>{tag.nom}</option>
                        ))}

                    </select>
                </div>


                <div className="flex flex-col-reverse" id="articles">


                    {filteredArticles.map((article, index) => (
                        <div key={index} className="w-3/4 mx-auto my-8 rounded-2xl shadow-xl overflow-hidden bg-white">
                            <Link href={`/article/${article.id}`} className="flex">
                                <img src={article.img} alt="" className="w-1/3 object-cover" />


                                <div className="w-2/3 p-6">
                                    <p className="text-sm text-gray-500 mb-1">{article.categories.nom}</p>
                                    <h1 className="text-xl font-semibold mb-3">{article.titre}</h1>
                                    <p className="text-gray-700 line-clamp-4 mb-3">{article.description}</p>
                                    <p className="text-xs text-gray-400 mb-2">{dayjs(article.created_at).fromNow()}</p>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {article.tags.map((tag, index) => (
                                            <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                                                {tag.nom}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </section>
        </div>
    );
}
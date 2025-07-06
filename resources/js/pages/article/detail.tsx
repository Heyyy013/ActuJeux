import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { SlGameController } from "react-icons/sl";
import Navbar from "@/components/navbar/Navbar";

export default function Detail({ article }) {
    const [values, setValues] = useState({
        contenu: '',
        article_id: article.id,
    });

    console.log(article);


    const toggleLike = (e) => {
        e.preventDefault()

        router.post(`/like/${article.id}`, {}, {
            preserveScroll: true,
        });
    };

    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        router.post('/comment/post', values);
    };

    return (
        <div>
            <Navbar />
            <section className="pt-24 pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">

                    {/* Titre */}
                    <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-400 mb-6"
                        style={{ fontFamily: "'Black Ops One', sans-serif" }}>
                        {article.titre}
                    </h1>

                    {/* Image - taille conservée sur laptop */}
                    <img
                        src={article.img}
                        alt={article.titre}
                        className="w-full md:w-[600px] mx-auto mb-6 rounded-md shadow-2xl"
                    />

                    {/* Tags + Like */}
                    <div className="flex lg:w-1/2 lg:mx-auto justify-between gap-6 md:items-center mb-6">
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-1 text-sm md:text-lg">
                                    <SlGameController className="text-violet-800" />
                                    <span className="font-bold text-violet-800">{tag.nom}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={(e) => toggleLike(e)} className="text-xl cursor-pointer">
                            {article.liked_by && article.liked_by.length > 0 ? (
                                <i className="bi bi-heart-fill text-red-500 pr-1"></i>
                            ) : (
                                <i className="bi hover:bi-heart-fill bi-heart text-red-500 pr-1 "></i>
                            )}
                            {
                                article.liked_by.length >= 1000 ?
                                    <span>

                                        {Math.floor(article.liked_by.length / 1000)}k
                                    </span>
                                    : (
                                        <span>

                                            {article.liked_by.length}
                                        </span>
                                    )
                            }

                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 mb-10">
                        {article.description}
                    </p>

                    {/* Commentaires */}
                    <div className="mb-8 space-y-4">
                        {article.comments.map((comment, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-md shadow">
                                <p className="font-bold text-gray-800">{comment.user.name}</p>
                                <p className="pl-2 text-gray-600">{comment.contenu}</p>
                            </div>
                        ))}
                    </div>

                    {/* Formulaire de commentaire */}
                    <form onSubmit={submit} className="space-y-4">
                        <textarea
                            name="contenu"
                            value={values.contenu}
                            onChange={change}
                            placeholder="Écrire un commentaire..."
                            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

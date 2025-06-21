import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { SlGameController } from "react-icons/sl";
import Navbar from "@/components/navbar/Navbar";

export default function Detail({ article }) {
    console.log(article);

    const [values, setValues] = useState({
        contenu: '',
        article_id: article.id,
    });

    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        router.post('/comment/post', values)
    };

    // const [values, setValues] = useState({
    //     contenu: '',
    // })


    // const ajouter = (e) => {
    //     e.preventDefault()
    //     router.post('/article/post', values, {
    //         onSuccess: () => router.get('/'),
    //         onError: (errors) => console.log(errors)
    //     });
    // }


    return (
        <div>
            <Navbar />
            <section className="pb-20 pt-20">
                <div className="w-4/5 mx-auto border-2xl rounded-2xl h-8/10">

                    <h1 className="mx-auto text-center pt-10 mb-5 text-4xl w-1/2 text-blue-400" style={{
                        fontFamily: "'Black Ops One', sans-serif",
                    }}>{article.titre}</h1>
                    <img src={article.img} alt="" className="w-150 mx-auto mb-5 rounded-md shadow-2xl" />
                    <div className="flex justify-between w-1/2 mx-auto gap-2 flex-wrap">
                        <div >


                            {article.tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-2 text-lg">

                                    <SlGameController className="text-violet-800 font-extrabold" /><p key={index} className="font-extrabold text-violet-800 w-1/2 py-1.5 text-center">{tag.nom}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            like
                        </div>
                    </div>
                    <p className="w-3/4 mx-auto text-lg mt-15 pb-10">{article.description}</p>

                    {article.comments.map((comment, index) => (
                        <div key={index}>
                            <p className="">{comment.user.name}</p>
                            <p className="pl-5">{comment.contenu}</p>
                        </div>
                    ))}
                    <form onSubmit={submit} className="space-y-4">
                        <textarea
                            name="contenu"
                            value={values.contenu}
                            onChange={change}
                            placeholder="Écrire un commentaire..."
                            className="w-full p-2 border rounded"
                        ></textarea>

                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                            Envoyer
                        </button>
                    </form>

                </div>


            </section>
        </div>
    );
}

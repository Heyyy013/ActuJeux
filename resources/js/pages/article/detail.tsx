import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Detail({ article }) {
    const { auth } = usePage().props;
    console.log(article);

    const [values, setValues] = useState({
        contenu: '',
    })


    const ajouter = (e) => {
        e.preventDefault()
        router.post('/article/post', values, {
            onSuccess: () => router.get('/'),
            onError: (errors) => console.log(errors)
        });
    }


    return (
        <div>
            <section>
                <div>

                    <h1>{article.titre}</h1>
                    <img src={article.img} alt="" />
                    <p>{article.description}</p>
                    {article.tags.map((tag, index) => (
                        <p key={index}>{tag.nom}</p>
                    ))}
                    {/* {auth.user && auth.user.role_id <= 3 && (

                        <div>
                            <Link href={`/article/${article.id}/edit`}>
                                <button>modifier</button>
                            </Link>
                            <button onClick={(e) => supprimer(e, article.id)}>supprimer</button>
                        </div>
                    )} */}
                </div>
                {/* <div>

                    <form onSubmit={ajouter}>
                        <label>contenu</label>
                        <textarea name="" id="" onChange={(e) => setValues({ ...values, contenu: e.target.value })} ></textarea>
                        <button type="submit">Ajouter</button>
                    </form>
                </div> */}
            </section>
        </div>
    );
}

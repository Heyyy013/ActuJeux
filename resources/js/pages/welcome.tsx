import { router, usePage } from "@inertiajs/react";

export default function Welcome({ articles }) {
    const { auth } = usePage().props;

    console.log(articles);

    const supprimer = (e, id) => {
        e.preventDefault()
        router.delete(`article/${id}`, {
            onSuccess: () => router.get('/')
        })
    }

    return (
        <div>
            <section>
                {articles.map((article, index) => (
                    <div key={index}>
                        <h1>{article.titre}</h1>
                        <p>{article.description}</p>
                        {auth.user && auth.user.role_id <= 3 && (

                            <button onClick={(e) => supprimer(e, article.id)}>supprimer</button>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}

import { usePage } from "@inertiajs/react";

export default function Welcome({articles}) {
    const { auth } = usePage().props;

    console.log(articles);
    

    return (
        <div>
            <section>
                {articles.map((article, index) => (
                    <div key={index}>
                        <h1>{article.titre}</h1>
                        <p>{article.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

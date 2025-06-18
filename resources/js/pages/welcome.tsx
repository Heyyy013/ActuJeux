import { Link, router, usePage } from "@inertiajs/react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

dayjs.extend(relativeTime);
dayjs.locale('fr');


export default function Welcome({ articles }) {
    const { auth } = usePage().props;

    console.log(articles);

    return (
        <div>
            <section>
                <div className="flex flex-col-reverse h-screen">

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
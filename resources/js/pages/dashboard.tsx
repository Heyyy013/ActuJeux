import { Link, router } from "@inertiajs/react";

export default function Dashboard({ tags, categories, roles, articles, users }) {

    console.log(users);

    const supprimer = (e, item, id) => {
        e.preventDefault()
        router.delete(`${item}/${id}`, {
            onSuccess: () => router.get('/dashboard')
        })
    }

    return (
        <div>
            {/* <div className="flex justify- gap-10">

                <h1 className="text-xl">Dashboard</h1>
                <Link href="/">Accueil</Link>
            </div>
            <h1 className="text-lg">Articles</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {articles.map((article) => (
                    <li key={article.id}><p className="flex justify-between">{article.titre} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e, 'article', article.id)}>supprimer</button> <Link href={`/article/${article.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/article/create">Ajouter</Link> </button></li>
            </ol>
            <h1 className="text-lg">Tags</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {tags.map((tag) => (
                    <li key={tag.id}><p className="flex justify-between">{tag.nom} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e, 'tag', tag.id)}>supprimer</button>  <Link href={`/tag/${tag.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/tag/create">Ajouter</Link> </button></li>
            </ol>
            <h1 className="text-lg">Catégories</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {categories.map((categorie) => (
                    <li key={categorie.id}><p className="flex justify-between">{categorie.nom} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e, 'cat', categorie.id)}>supprimer</button> <Link href={`/categorie/${categorie.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/tag/create">Ajouter</Link> </button></li>
            </ol>
            <h1 className="text-lg">Roles</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {roles.map((role) => (
                    <li key={role.id}><p className="flex justify-between">{role.nom} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e, 'role', role.id)}>supprimer</button> <Link href={`/role/${role.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/tag/create">Ajouter</Link> </button></li>
            </ol> */}





            <div className="container flex justify-evenly w-9/10 mx-auto flex-wrap pt-10">
                <div className="w-1/2 pb-10">

                    <h1 className="pb-8 text-center">Users</h1>

                    <table className="text-center w-9/10">
                        <thead className="bg-black flex text-white w-full">
                            <tr className="flex w-full mb-4">
                                <th className="p-4 w-1/4">Nom</th>
                                <th className="p-4 w-2/4">Mail</th>
                                <th className="p-4 w-1/4">Role</th>
                                <th className="p-4 w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full">
                            {users.map((user) => (

                                <tr className="flex w-full mb-4 items-center">

                                    <td className="p-4 w-1/4">{user.name}</td>
                                    <td className="p-4 w-2/4">{user.email}</td>
                                    <td className="p-4 w-1/4">{user.roles.nom}</td>
                                    <td className="p-4 w-1/4 flex justify-between flex-col">
                                    <button className="cursor-pointer" onClick={(e) => supprimer(e, 'user', user.id)}>supprimer</button> <button><Link href={`/user/${user.id}/edit`}>modifier</Link></button> <button> <Link href="/user/create">Ajouter</Link> </button>
                                    </td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
                <div className="w-1/2 pb-10">

                    <h1 className="mb-8 text-center">Articles</h1>

                    <table className="text-center w-9/10">
                        <thead className="bg-black flex text-white w-full">
                            <tr className="flex w-full mb-4">
                                <th className="p-4 w-3/4">Titre</th>
                                <th className="p-4 w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
                            {articles.map((article) => (

                                <tr className="flex w-full mb-4 items-center">

                                    <td className="p-4 w-3/4">{article.titre}</td>
                                    <td className="p-4 w-1/4 flex justify-between flex-col">
                                    <button className="cursor-pointer" onClick={(e) => supprimer(e, 'article', article.id)}>supprimer</button> <button><Link href={`/article/${article.id}/edit`}>modifier</Link></button> <button> <Link href="/article/create">Ajouter</Link> </button>
                                    </td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
                <div className="w-1/2 pb-10">

                    <h1 className="mb-8 text-center">Tags</h1>

                    <table className="text-center w-9/10">
                        <thead className="bg-black flex text-white w-full">
                            <tr className="flex w-full mb-4">
                                <th className="p-4 w-3/4">Nom</th>
                                <th className="p-4 w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
                            {tags.map((tag) => (

                                <tr className="flex w-full mb-4 items-center">

                                    <td className="p-4 w-3/4">{tag.nom}</td>
                                    <td className="p-4 w-1/4 flex justify-between flex-col">
                                    <button className="cursor-pointer" onClick={(e) => supprimer(e, 'tag', tag.id)}>supprimer</button> <button><Link href={`/tag/${tag.id}/edit`}>modifier</Link></button> <button> <Link href="/tag/create">Ajouter</Link> </button>
                                    </td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
                <div className="w-1/2 pb-10">

                    <h1 className="mb-8 text-center">Categories</h1>

                    <table className="text-center w-9/10">
                        <thead className="bg-black flex text-white w-full">
                            <tr className="flex w-full mb-4">
                                <th className="p-4 w-3/4">Nom</th>
                                <th className="p-4 w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
                            {categories.map((categorie) => (

                                <tr className="flex w-full mb-4 items-center">

                                    <td className="p-4 w-3/4">{categorie.nom}</td>
                                    <td className="p-4 w-1/4 flex justify-between flex-col">
                                    <button className="cursor-pointer" onClick={(e) => supprimer(e, 'categorie', categorie.id)}>supprimer</button> <button><Link href={`/categorie/${categorie.id}/edit`}>modifier</Link></button> <button> <Link href="/categorie/create">Ajouter</Link> </button>
                                    </td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

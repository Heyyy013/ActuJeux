import { Link, router, usePage } from "@inertiajs/react";

export default function Dashboard({ tags, categories, roles, articles, users }) {
    const { auth } = usePage().props
    console.log(users);

    const supprimer = (e, item, id) => {
        e.preventDefault()
        router.delete(`${item}/${id}`, {
            onSuccess: () => router.get('/dashboard')
        })
    }

    console.log(auth);


    return (
        <div>

            <div className="container flex justify-evenly w-9/10 mx-auto flex-wrap pt-10">
                {auth.user.role_id == 1 && (

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
                )}
                {auth.user.role_id <= 3 && (
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
                )}
                {auth.user.role_id <= 2 && (

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
                )}
                {auth.user.role_id <= 2 && (


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
                                            <button className="cursor-pointer" onClick={(e) => supprimer(e, 'categorie', categorie.id)}>salutsupprimer</button> <button><Link href={`/categorie/${categorie.id}/edit`}>modifier</Link></button> <button> <Link href="/categorie/create">Ajouter</Link> </button>
                                        </td>
                                    </tr>

                                ))}


                            </tbody>
                        </table>
                    </div>
                )}


            </div>
        </div >
    );
}

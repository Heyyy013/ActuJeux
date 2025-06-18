import { Link, router } from "@inertiajs/react";

export default function Dashboard({ tags, categories, roles, articles }) {

    console.log(tags);

    const supprimer = (e, item, id) => {
        e.preventDefault()
        router.delete(`${item}/${id}`, {
            onSuccess: () => router.get('/dashboard')
        })
    }

    return (
        <div>
            <h1 className="text-xl">Dashboard</h1>
            <h1 className="text-lg">Articles</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {articles.map((article) => (
                    <li key={article.id}><p className="flex justify-between">{article.titre} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e,'article', article.id)}>supprimer</button> <Link href={`/article/${article.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/article/create">Ajouter</Link> </button></li>
            </ol>
            <h1 className="text-lg">Tags</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {tags.map((tag) => (
                    <li key={tag.id}><p className="flex justify-between">{tag.nom} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e,'tag', tag.id)}>supprimer</button>  <Link href={`/tag/${tag.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/tag/create">Ajouter</Link> </button></li>
            </ol>
            <h1 className="text-lg">Catégories</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {categories.map((categorie) => (
                    <li key={categorie.id}><p className="flex justify-between">{categorie.nom} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e,'cat', categorie.id)}>supprimer</button> <Link href={`/categorie/${categorie.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/tag/create">Ajouter</Link> </button></li>
            </ol>
            <h1 className="text-lg">Roles</h1>
            <ol className="list-decimal w-1/4 ml-6">
                {roles.map((role) => (
                    <li key={role.id}><p className="flex justify-between">{role.nom} <p className="w-1/2 flex justify-between"><button onClick={(e) => supprimer(e,'role', role.id)}>supprimer</button> <Link href={`/role/${role.id}/edit`}><button>modifier</button></Link></p></p></li>
                ))}
                <li><button> <Link href="/tag/create">Ajouter</Link> </button></li>
            </ol>
            
        </div>
    );
}

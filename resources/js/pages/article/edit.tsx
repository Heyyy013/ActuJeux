import { router } from "@inertiajs/react";
import { log } from "console";
import { useState } from "react";

export default function Edit({ article, categories, tags }) {
    const [values, setValues] = useState({
        titre: article.titre,
        description: article.description,
        categorie_id: article.categorie_id,
        
        user_id: article.user_id,
    })

    console.log(article);


    const modifier = (e) => {
        e.preventDefault()
        router.put(`/article/update/${article.id}`, values, {
            onSuccess: () => router.get('/')
        })
    }

    return (
        <div>
            <form onSubmit={modifier}>
                <label>Titre</label>
                <input type="text" value={values.titre} onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label>description</label>
                <input type="text" value={values.description} onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label>categorie_id</label>
                <select defaultValue={values.categorie_id} onChange={(e) => setValues({ ...values, categorie_id: Number(e.target.value) })}>
                    <option value={values.categorie_id} >{article.categories.nom}</option>
                    {categories.map((categorie) =>
                        categorie.id === article.categorie_id ? null : (
                            <option key={categorie.id} value={categorie.id}>{categorie.nom}</option>
                        )
                    )}
                </select>
                <select defaultValue={values.categorie_id} onChange={(e) => setValues({ ...values, categorie_id: Number(e.target.value) })}>
                    <option value={values.categorie_id} >{article.categories.nom}</option>
                    {categories.map((categorie) =>
                        categorie.id === article.categorie_id ? null : (
                            <option key={categorie.id} value={categorie.id}>{categorie.nom}</option>
                        )
                    )}
                </select>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
}
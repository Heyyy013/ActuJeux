import { router } from "@inertiajs/react";
import { log } from "console";
import { useState } from "react";

export default function Edit({ article, categories, tags }) {
    const [values, setValues] = useState({
        titre: article.titre,
        description: article.description,
        categorie_id: article.categorie_id,
        user_id: article.user_id,
        tags_id: article.tags.map(tag => tag.id),      
    })

    console.log(values.tags_id);


    const modifier = (e) => {
        e.preventDefault()
        router.put(`/article/update/${article.id}`, values, {
            onSuccess: () => router.get('/')
        })
    }

    return (
        <div>
            <form onSubmit={modifier} className="flex items-center">
                <label>Titre</label>
                <input type="text" value={values.titre} onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label>description</label>
                <textarea value={values.description} className="w-1/2 h-auto" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label>categorie</label>
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
                {tags.map((tag) => (
                    <div key={tag.id}>
                        <label>{tag.nom}</label>
                        <input
                            type="checkbox"
                            value={tag.id}
                            checked={values.tags_id.includes(tag.id)}

                            onChange={(e) => {
                                const id = Number(e.target.value);
                                const checked = e.target.checked;

                                if (checked) {
                                    setValues({ ...values, tags_id: [...values.tags_id, id] });
                                } else {
                                    setValues({ ...values, tags_id: values.tags_id.filter(tag => tag !== id) });
                                }
                            }}
                        />
                    </div>
                ))}
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
}
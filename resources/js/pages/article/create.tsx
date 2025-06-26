import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ categories, tags }) {
    const { auth } = usePage().props
    const [values, setValues] = useState({
        titre: '',
        description: '',
        categorie_id: 0,
        tags_id: [],
        user_id: auth.user.id,
    })


    const ajouter = (e) => {
        e.preventDefault()
        router.post('/article/post', values, {
            onSuccess: () => router.get('/'),
        });
    }


    return (
        <div>
            <form onSubmit={ajouter} className="flex items-center">
                <label>titre</label>
                <input type="text" onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label>description</label>
                <textarea className="w-1/2" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label>categorie</label>
                <select defaultValue={''} onChange={(e) => setValues({ ...values, categorie_id: Number(e.target.value) })}>
                    <option value="" disabled>Choisir une catégorie</option>
                    {categories.map((categorie) => (
                        <option id="" value={categorie.id}>{categorie.nom}</option>

                    ))}
                </select>
                <label>Tag(s)</label>

                {tags.map((tag) => (
                    <div key={tag.id}>
                        <label>{tag.nom}</label>
                        <input
                            type="checkbox"
                            value={tag.id}
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


                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
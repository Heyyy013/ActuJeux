import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ categories, tags }) {
    const [values, setValues] = useState({
        titre: '',
        description: '',
        categorie_id: 0,
        tags_id: [0],
        user_id: 0,
    })


    const ajouter = (e) => {
        e.preventDefault()
        router.post('/article/post', values, {
            onSuccess: () => router.get('/'),
        });
    }

    // const checkTag = (e) => {
    //     const tagId = Number(e.target.value)
    //     if (!values.tags_id.includes(tagId)) {
    //         setValues({...values, tags_id: [...values.tags_id, tagId]})
    //     }
    // }


    return (
        <div>
            <form onSubmit={ajouter}>
                <label>titre</label>
                <input type="text" onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label>description</label>
                <input type="text" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label>categorie</label>
                <select defaultValue={''} onChange={(e) => setValues({ ...values, categorie_id: Number(e.target.value) })}>
                    <option value="" disabled>Choisir une catégorie</option>
                    {categories.map((categorie) => (
                        <option id="" value={categorie.id}>{categorie.nom}</option>

                    ))}
                </select>
                <label>Tag(s)</label>
                {/* <select defaultValue={[]} onChange={(e) => setValues({ ...values, tags_id:[...values.tags_id,  Number(e.target.value)] })}>
                    <option value={[]} disabled>Choisir un ou plusieurs tag(s)</option>
                    {tags.map((tag) => (
                        <option id="" value={tag.id}>{tag.nom}</option>

                    ))}
                </select> */}
                {/* {tags.map((tag) => (
                    <div key={tag.id}>

                        <label>{tag.nom}</label>
                        <input type="checkbox" value={tag.id} onChange={(e) => {checkTag(e)}} />
                    </div>
                ))} */}
                <label>user_id</label>
                <input type="number" onChange={(e) => setValues({ ...values, user_id: Number(e.target.value) })} />

                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
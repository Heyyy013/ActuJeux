import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({article}) {
const [values, setValues] = useState({
    titre: article.titre,
    description: article.description,
    categorie_id: article.categorie_id,
    user_id: article.user_id,
})
    

const modifier = (e) => {
    e.preventDefault()
    router.put(`/article/update/${article.id}`, values)
    router.get('/')
}

    return (
        <div>
            <form onSubmit={modifier}>
                <label>Titre</label>
                <input type="text" value={values.titre} onChange={(e) => setValues({...values, titre: e.target.value})} />
                <label>description</label>
                <input type="text" value={values.description} onChange={(e) => setValues({...values, description: e.target.value})}/>
                <label>date de Début</label>
                <input type="text" value={values.categorie_id} onChange={(e) => setValues({...values, categorie_id: e.target.value})}/>

                <button type="submit">Modifier</button>
            </form>
        </div>
    );
}
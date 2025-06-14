import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({categorie}) {
const [values, setValues] = useState({
    nom: categorie.nom,

})
    

const modifier = (e) => {
    e.preventDefault()
    router.put(`/categorie/update/${categorie.id}`, values)
    router.get('/')
}

    return (
        <div>
            <form onSubmit={modifier}>
                <label>nom</label>
                <input type="text" value={values.nom} onChange={(e) => setValues({...values, nom: e.target.value})} />

                <button type="submit">Modifier</button>
            </form>
        </div>
    );
}
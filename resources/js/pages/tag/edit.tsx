import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({tag}) {
const [values, setValues] = useState({
    nom: tag.nom,

})
    

const modifier = (e) => {
    e.preventDefault()
    router.put(`/tag/update/${tag.id}`, values)
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
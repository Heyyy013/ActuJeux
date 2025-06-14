import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Create() {
    const [values, setValues] = useState({
        nom: '',
    })


    const ajouter = (e) => {
        e.preventDefault()
        router.post('/categorie/post', values, {
            onSuccess: () => router.get('/'),
            onError: (errors) => console.log(errors)
        });
    }

    return (
        <div>
            <form onSubmit={ajouter}>
                <label>nom</label>
                <input type="text" onChange={(e) => setValues({ ...values, nom: e.target.value })} />
                
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
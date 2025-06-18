import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Create() {
    const [values, setValues] = useState({
        titre: '',
        description: '',
        categorie_id: 0,
        user_id: 0,
    })


    const ajouter = (e) => {
        e.preventDefault()
        router.post('/article/post', values, {
            onSuccess: () => router.get('/'),
            onError: (errors) => console.log(errors)
        });
    }

    return (
        <div>
            <form onSubmit={ajouter}>
                <label>titre</label>
                <input type="text" onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label>description</label>
                <input type="text" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label>categorie_id</label>
                <input type="number" onChange={(e) => setValues({ ...values, categorie_id: Number(e.target.value) })} />
                <label>user_id</label>
                <input type="number" onChange={(e) => setValues({ ...values, user_id: Number(e.target.value) })} />

                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
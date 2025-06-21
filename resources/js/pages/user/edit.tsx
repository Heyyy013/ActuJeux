import { router } from "@inertiajs/react";
import { log } from "console";
import { useState } from "react";

export default function Edit({ user, roles }) {
    const [values, setValues] = useState({
        name: user.name,
        role_id: user.role_id,        
    })

    console.log(user);


    const modifier = (e) => {
        e.preventDefault()
        router.put(`/user/update/${user.id}`, values, {
            onSuccess: () => router.get('/')
        })
    }

    return (
        <div>
            <form onSubmit={modifier}>
                <label>name</label>
                <input type="text" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                <label>Role</label>
                <select defaultValue={values.role_id} onChange={(e) => setValues({ ...values, role_id: Number(e.target.value) })}>
                    <option value={values.role_id} >{user.roles.nom}</option>
                    {roles.map((role) =>
                        role.id === user.role_id ? null : (
                            <option key={role.id} value={role.id}>{role.nom}</option>
                        )
                    )}
                </select>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
}
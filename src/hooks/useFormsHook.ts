import { useState } from "react";

//Recibe cualquier objeto de tipo form como parametro
export const useFormsHook = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = event.target;        
        setFormState({
            ...formState,
            [name]: value
        });
    }


    return {
        ...formState,
        formState,
        onInputChange
    }

}

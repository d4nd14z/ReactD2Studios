import { useState } from "react";

interface RegisterUser {
    username: string,
    password: string,
    confirm: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    address: string,
    country: number,
    city: number,
    state: number
}

export const useRegisterHook = (reg:RegisterUser) => {

    const [form, setFormRegister] = useState(reg);

    const confirmPassword = (password:string) => {
        reg.username = 'd4nd14z';
        setFormRegister(reg);
    }


    return {
        form,
        confirmPassword
    }

  
}

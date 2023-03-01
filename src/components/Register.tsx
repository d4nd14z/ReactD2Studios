import React, { useEffect } from 'react'
import { MessageTest } from './MessageTest';
import { useFormsHook } from '../hooks/useFormsHook';
import userImage from '../assets/img/users_ico.png';

export const Register = () => {

    const { formState, onInputChange, username, password, confirm, firstname, lastname, email, phone, address, country, city, state } = useFormsHook({
        username: '',
        password: '',
        confirm: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        country: 0,
        city: 0,
        state: 0
    });

    //const { username, password, confirm, firstname, lastname, email, phone, address, country, city, state } = formState;
    

    return (
        <>
            <h1 className="text-3xl text-gray-800 font-bold mt-3">Formulario de Registro</h1>
            <hr/>                      
            <form className="mt-10 mb-10">
                <div className="row">
                    <div className="col-md-3">
                        <img src={userImage} className="content-center mt-4 px-4"/>
                        <h1 className="mt-4 text-center text-3xl font-bold text-gray-800">@{username}</h1>
                        <small className="flex justify-center uppercase">{ firstname } { lastname }</small>
                        <small className="flex justify-center lowercase">{ email }</small>
                        <small className="flex justify-center lowercase">{ phone }</small>
                    </div>
                    <div className="col-md-9">                       
                            <div className="row my-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="username">Usuario</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Username" value={username} onChange={onInputChange}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="password">Contrase&ntilde;a</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={password} onChange={onInputChange}/>
                                    {
                                        (password !== confirm) && <MessageTest message="Contrase&ntilde;a no coincide." />
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="confirm">Confirmar contrase&ntilde;a</label>
                                    <input type="password" className="form-control" id="confirm" name="confirm" placeholder="Confirmar" value={confirm} onChange={onInputChange}/>
                                    {
                                        (password !== confirm) && <MessageTest message="Contrase&ntilde;a no coincide." />
                                    }
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstname">Nombres</label>
                                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="" value={firstname} onChange={onInputChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastname">Apellidos</label>
                                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="" value={lastname} onChange={onInputChange}/>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={onInputChange}/>                                    
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="telefono">Tel&eacute;fono</label>
                                    <input type="text" className="form-control" id="telefono" name="phone" placeholder="Tel&eacute;fono" value={phone} onChange={onInputChange}/>
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="direccion">Direcci&oacute;n</label>
                                <input type="text" className="form-control" id="direccion" name="address" placeholder="1234 Main St" value={address} onChange={onInputChange}/>
                            </div>
                            <div className="row my-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="country">Country</label>
                                    <select id="country" name="country" className="form-control" onChange={onInputChange}>
                                        <option defaultValue="0">Choose...</option>
                                        <option value="1">Colombia</option>
                                        <option value="2">Estados Unidos</option>
                                        <option value="3">Canad&aacute;</option>
                                        <option value="4">Ecuador</option>
                                        <option value="5">Venezuela</option>
                                    </select>
                                </div>                                
                                <div className="form-group col-md-4">
                                    <label htmlFor="state">State</label>
                                    <select id="state" name="state" className="form-control" onChange={onInputChange}>
                                        <option defaultValue="0">Choose...</option>
                                        <option value="1">Antioquia</option>
                                        <option value="2">Bolivar</option>
                                        <option value="3">Caldas</option>
                                        <option value="4">Distrito Capital</option>
                                        <option value="5">Guain&iacute;a</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="city">City</label>
                                    <select id="city" name="city" className="form-control" onChange={onInputChange}>
                                        <option defaultValue="0">Choose...</option>
                                        <option value="1">Medellin</option>
                                        <option value="2">Abriaqu&iacute;</option>
                                        <option value="2">Anz&aacute;</option>
                                        <option value="3">Armenia</option>                                        
                                    </select>
                                </div>
                            </div>                     
                            <button type="button"
                                    className="float-right mt-4 bg-gray-800 text-white hover:bg-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"                                    
                            >
                                Cancelar
                            </button>
                            <button type="button"
                                    className="float-right mt-4 mr-2 bg-gray-800 text-white hover:bg-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                Registrar Usuario
                            </button>                       
                    </div>
                </div>
            </form>            
        </>
    );
}

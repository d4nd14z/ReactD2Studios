import React, { useEffect } from 'react';

interface IProps {
    message: string
}

export const MessageTest = ({message}:IProps) => {

    // useEffect(() => {
        
    //     const mouseMove = (event: MouseEvent) => {
    //         const { clientX, clientY } = event;
    //         console.log(`Posicion: (${clientX},${clientY})`);            
    //     }

        
    //     window.addEventListener("mousemove", mouseMove);  //Agregar el listener del evento...  
        
    //     return () => {
    //         window.removeEventListener("mousemove", mouseMove);  //Remover el listener del evento...
    //     }

    // }, []);
    
    return (
        <>
            <small id="passwordHelpBlock" className="form-text text-xs text-red-500">
                { message }
            </small>
        </>    
    );

}

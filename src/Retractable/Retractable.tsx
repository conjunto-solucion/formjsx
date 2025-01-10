import React, { ReactNode, useState } from "react";
import './Retractable.css'


type props = {
    style?: React.CSSProperties
    className?: string
    id?: string
    children?: ReactNode

    label: string;
    initiallyUnfolded?: boolean;
    unfolded?: boolean;
    onClick?: Function;
}


/**
 * Un contenedor con título que puede ser contraído y expandido haciendo click sobre el encabezado. Mantiene un estado interno tal que si es verdadero está expandido, y si es falso está contraído.
 * @param props.label El título del contenedor.
 * @param props.initiallyUnfolded Cuando es falso, el contenedor está inicialmente contraído. Por defecto es verdadero.
 * @param props.unfolded Permite controlar externamente el estado (contraído/expandido), sobreescribiendo el estado interno.
 * @param props.onClick La función a ejecutar en el evento de clic. Se pasa como argumento el valor booleano opuesto al estado en el momento del clic.
 */
export default function Retractable({ style, className, id, children, label, initiallyUnfolded=true, unfolded, onClick }: props): React.JSX.Element {

    const [localState, setLocalState] = useState(initiallyUnfolded);
    const isUnfolded = unfolded ?? localState;

    function change(): void {
        setLocalState(!isUnfolded);
        if(onClick) onClick(!isUnfolded);
    }

    return (
        <div id={id} style={style} className={isUnfolded ? className+" formjsx-default-retractable" : className+" formjsx-default-retractable-folded" }>

            <div onClick={change}>

                {isUnfolded?


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
              
                :

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
                }

                {label}

            </div>

            <div>
                {children}
            </div>
        </div>
    )
}
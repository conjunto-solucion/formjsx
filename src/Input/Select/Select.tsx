import React from "react";
import './Select.css';

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string

    options: {name:string, value:any}[],
    value: any,
    onChange: Function
}

/**
 * Un dropdown de selección de opciones.
 * @param props.options  - Array de opciones, con un valor y un nombre.
 * @param props.value    - Valor del input.
 * @param props.onChange - Función de evento de cambio de valor.
 */
export default function Select({style, className, id, options, value, onChange}: props): React.JSX.Element {

    return (

        <select style={style} id={id} className={className+" formjsx-default-select"}
        onChange={e=>onChange(e.target.value)}
        value={value}
        >
            {
                options.map((option, index) => 
                    <option 
                    key={index} 
                    title={option.name}
                    value={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
    );
};


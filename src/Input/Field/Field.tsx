import React from "react"
import './Field.css'

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string

    label?: string
    note?: string
    placeholder?:string
    type?: "text" | "number" | "password" | "email" | "tel" | "url" | string
    value: any
    onChange: Function
}

/**
 * Un campo de escritura.
 * @param props.label - El título del input.
 * @param props.note - Nota extra acerca del input.
 * @param props.type - Un tipo específico de input textual.
 * @param props.value El valor del campo.
 * @param props.onChange La función que se invoca en un evento de cambio en el valor, pasando el nuevo valor.
 */
export default function Field({ style, className, id, label="", note, placeholder, type="text", value, onChange }: props): React.JSX.Element {
    
    return <label style={style} className={className+" formtsx-default-field"} id={id}> {label}
    {note?<span> {note}</span>: null}
        <input
            placeholder={placeholder}
            type={type}
            value={value??""}
            onChange={(e) => onChange(e.target.value)}
        ></input>
    </label>
    
};


import React from "react"
import './Textarea.css'

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string

    label?:string
    maxLength?:number
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
}

/**
 * Un elemento <textarea>
 * @param props.label - El título del input.
 * @param props.maxLength - Numero máximo de caracteres. Por defecto es 50.
 * @param props.value El valor del campo de texto.
 * @param props.onChange Función manejadora del evento de cambio de valor. Se pasa como argumento el nuevo valor.
 */
export default function Textarea({style, className="", id="", label, maxLength=50, value, onChange}:props):React.JSX.Element {
    return <label style={style} className={className+" formjsx-default-textarea"} id={id}>
        {label}
        <textarea maxLength={maxLength} value={value} spellCheck={false}
        onChange={e=>onChange(e.target.value)} />

    </label>
}
import React from "react"
import './Button.css'

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string

    textContent?: string
    type?: ("button"|"submit"|"reset")
    onClick: () => void
}

/**
 * Un botón rectangular.
 * @param props.text - El contenido de texto del botón.
 * @param props.type - El tipo de botón.
 * @param props.onClick - La función de evento de clic.
 */
export default function Button({style, className, id, textContent="", type="button", onClick}:props): React.JSX.Element {
    return (
        
        <button style={style} className={className+" formjsx-default-button"}  id={id}
        type={type} onClick={onClick}>

            {textContent}

        </button>
    )
}
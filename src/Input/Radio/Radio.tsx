import React from "react"
import './Radio.css'

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string

    legend?: string
    note?: string
    options: any[]
    value: any
    onChange: Function
}

/**
 * Un input de tipo radio.
 * @param props.legend  El título del input.
 * @param props.note    Nota extra acerca del input.
 * @param props.options Array de nombres de las opciones, uno para cada radio.
 * @param props.value    Valor del input.
 * @param props.onChange Función manejadora de evento de cambio de valor. Se pasa como argumento el nuevo valor.
 */
export default function Radio({style, id, className="", legend, note, options, value, onChange}: props): React.JSX.Element {
    return <legend className={className+" formjsx-default-radio"} style={style} id={id}>

        {legend}
        <span> {note}</span>


        {options.map((option, index) =>
            <label className="radio" key={index}>
                <input
                    type="radio"
                    name={legend}
                    checked={option === value}
                    className={option === value?"formjsx-default-radio-checked":""}
                    value={option}
                    onChange={e => onChange(e.target.value)}
                />
                {option}
            </label>
        )}   

    </legend>
};


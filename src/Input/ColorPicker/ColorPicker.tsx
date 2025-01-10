import React from "react";  
import './ColorPicker.css';

type props = {
  style?: React.CSSProperties
  className?: string
  id?: string

  label?: string;
  note?: string;
  value: string;
  onChange: Function;
}

/**
 * Un input de selección de colores hexadecimales.
 * @param props.label     - El título del input.
 * @param props.note      - Nota extra acerca del input.
 * @param props.value     - El valor hexadecimal de 7 caracteres.
 * @param props.onChange  - La función a ejecutar en el evento de cambio del valor.
 */
export default function ColorPicker({style={}, className="", id="", label="", note="", value, onChange}:props): React.JSX.Element {
  return (
    <label className={className+" formjsx-default-colorpicker"} style={style} id={id}>
        {label}<span> {note}</span>
        <input
          value={value}
          type="color"
          onChange={e => onChange(e.target.value)}
        />
    </label>
  )
}
import React, { ReactNode } from "react";

type props = {
  style?: React.CSSProperties
  className?: string
  id?: string
  children: ReactNode,

  wrap?: boolean,
  justify?: "start"|"end"|"flex-start"|"flex-end"|"center"|"left"|"right"|"normal"|"space-between"|"space-around"|"space-evenly"|"safe"|"unsafe",
  align?: "start"|"end"|"self-start"|"self-end"|"flex-end"|"flex-start"|"center"|"normal"|"baseline"|"stretch"|"anchor-center"|"safe"|"unsafe"
}

/**
 * Envoltorio flexible.
 * @param props.wrap - Si se debe distribuir los componentes hijos a multiples líneas. Por defecto es verdadero.
 * @param props.justify - El modo de ajustar en el eje X. Por defecto es center.
 * @param props.align - El modo de ajustar en el eje Y. Por defecto es center.
 */
export default function FlexDiv({style, className, id, children, wrap=true, justify="center", align="center"}: props): React.JSX.Element  {
    return (
      <div className={className} id={id}
      
      style={
        { display: "flex", alignItems: align, justifyContent: justify, 
          flexFlow:wrap?'wrap':'nowrap', width:'100%', ...style
        }}>

        {children}
      </div>
    )
}
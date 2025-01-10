import React, { ReactNode } from "react";

type props = {
    show: boolean
    children: ReactNode
}

/**Un envoltorio que sólo muestra los contenidos cuando la condición `show` es cumplida.
 * @param props.show - La condición para mostrar el contenido.
*/
export default function Conditional({ show, children }: props): React.JSX.Element {
    return <>{show? children: null}</>
}
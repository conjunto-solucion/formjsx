import Button from "../Button/Button"
import React, { ReactNode, useState } from "react"
import './ConfirmationBox.css'
import FlexDiv from "../FlexDiv/FlexDiv"

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string
    children: ReactNode

    message: string
    onConfirm: Function
}

/**
 * Un envoltorio que abre una ventana emergente para la confirmación de una función.
 * @param props.message El texto de la ventana de confirmación.
 * @param props.onConfirm La función que se ejecuta al confirmar.
 */
export default function ConfirmationBox({ style, className, id, children, message, onConfirm }: props): React.JSX.Element {
    
    const [boxIsOpen, setBoxIsOpen] = useState(false);

    return <>
            { !boxIsOpen? null :

            <div style={style} id={id} className={className+" formtsx-default-confirmationbox"}>
                <div>

                    <p>{message}</p>

                    <FlexDiv align="flex-end" justify="space-around">
                        <Button onClick={()=>setBoxIsOpen(false)} textContent="cancelar" />
                        <Button onClick={()=>{setBoxIsOpen(false);onConfirm()}} textContent="ok" />
                    </FlexDiv>

                </div>
            </div>
            }
            
            <div style={{display:"inline-block"}} onClick={()=>{ if (!boxIsOpen) setBoxIsOpen(true);}}>
                {children}
            </div>
    </>
    
}
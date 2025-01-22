import React, { ReactNode } from "react";
import './Section.css';

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string
    children?: ReactNode

    legend?: string;
}

/**
 * Un envoltorio visible con título opcional.
 */
export default function Section({style, className, id, children, legend}:props): React.JSX.Element {
    return (
        <section style={style} id={id} className={className+" formtsx-default-section"}>
            <legend>{legend}</legend>
            {children}
        </section>
    );
}
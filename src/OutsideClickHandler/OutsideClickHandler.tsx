import React from "react";


function useOutsideClick(ref: React.RefObject<any>, onOutsideClick: Function): void {
    
    React.useEffect(() => {
    
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target))
                onOutsideClick();
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };

    }, [ref]);
}


type props = {
    children: React.ReactNode,
    onOutsideClick: Function
}

/**
 * Un div que ejecuta una función dada en un evento de clic fuera del mismo.
 */
export default function OutsideClickHandler({ children, onOutsideClick }:props): React.JSX.Element {
    const wrapperRef = React.useRef(null);
    useOutsideClick(wrapperRef, onOutsideClick);

    return <div ref={wrapperRef}>{children}</div>;
}
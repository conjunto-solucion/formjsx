import React from "react";
import DateTime from "../DateTimePicker/DateTimePicker";
import Field from "../Field/Field";
import './FieldsTable.css';

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string

    label?: string,
    thead: {name:string, type? : string}[],
    tbody: (string|number)[][],
    onChange: Function,
    maxRows?: number
}

/**
 * Una tabla cuyas celdas son campos de texto o numéricos. Permite agregar y eliminar filas.
 * @param props.label    - El título de la tabla.
 * @param props.thead    - Lista de encabezados de columnas. Expresa el nombre y el tipo de input. Por dedefecto es de tipo texto.
 * @param props.tbody    - array bidimensional, con cada array interno siendo una columna, habiendo la misma cantidad de elementos que la expresada en thead.
 * @param props.onChange - Función a la cual se argumenta los nuevos valores de la tabla al momento de un cambio. 
 * @param props.maxRows  - Número máximo de filas permitidas. Por defecto es 1.
 * @example 
 * thead = [{name:"foo"}, {name:"bar", type:"date"}];
 * tbody = [[""][0]]; //Dos columnas y una fila.
 */
export default function Table({ style={}, className="", id="", label="", thead, tbody, onChange, maxRows=1 }: props): React.JSX.Element {

    function setCellValue(rowIndex:number, colIndex:number, value:string) {
        const newTable = [...tbody];
        newTable[colIndex][rowIndex] = value;
        onChange(newTable);
    }
    function addRow() {
        const newTable = [...tbody];
        newTable.forEach(column=>column.push(""));
        onChange(newTable);
    }
    function removeRow() {
        const newTable = [...tbody];
        newTable.forEach(column=>column.pop());
        onChange(newTable);
    }

    return (<>
    
        <legend>{label}</legend>
        <table className={className+" formtsx-default-fieldstable"} cellSpacing={0} cellPadding={0} style={style} id={id}>

            <thead><tr>
                { thead.map((header, index) => <th key={index}>{header.name}</th> )}
            </tr></thead>

            <tbody>
                { tbody[0].map((cell, rowIndex) =>

                    <tr key={rowIndex}>

                        {tbody.slice(0,thead.length).map((col, colIndex) =>
                        <td key={colIndex}>
                            {
                            thead[colIndex].type === "date" ?
                    
                            <DateTime value={col[rowIndex]+''} onChange={(value:string)=>setCellValue(rowIndex, colIndex, value)} />
                            
                            :
                            
                            <Field type={thead[colIndex].type}
                            value={col[rowIndex]} onChange={(value:string)=>setCellValue(rowIndex, colIndex, value)} />
                            }
                        </td>
                        )}

                        {rowIndex!==0 && rowIndex+1 === tbody[0].length ? 
                        <td onClick={removeRow}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1"/>
                            </svg>
                        
                        </td> : null}
                    </tr>
                )}
                
            </tbody>


            {tbody[0].length === maxRows ? null :
            <tfoot>
                <tr>
                {
                    thead.map((th, index)=>
                        <td key={index}>{
                            index+1 !== thead.length ? null :
                            
                            <svg onClick={addRow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
                            </svg>

                        }
                        </td>
                    )
                }
                </tr>
            </tfoot>}

        </table>
    </>);
};
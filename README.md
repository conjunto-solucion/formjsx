# formtsx

Biblioteca de componentes reutilizables de React-Typescript para formularios.

## Compilación

Una vez que se descargan las dependencias con:

```
$ npm install
```

Ejecute en el directorio principal:

```
$ npm run build
```

Los archivos generados estarán en `./formtsx/`

## Uso

Esta es una biblioteca de uso personal que no está publicada en npm y necesita incluirse manualmente en su proyecto. 
Hay dos formas de hacer esto.

**La primera opción**: incluya el código fuente de la biblioteca en su proyecto.

* Copie el contenido de `./src` en algún directorio dentro de `src` de su proyecto.

**La segunda opción**: enlace la biblioteca a su proyecto con npm link.

* Ejecute `npm run build` en este directorio para compilar formtsx. El código generado está en `./formtsx/`.

* Ejecute `sudo npm link` en este directorio.

* Copie la ruta absoluta de este directorio (`./`).

* Diríjase a su proyecto, y en la raíz ejecute `sudo npm link la/ruta/que/ha/copiado`. Esto agrega un enlance simbólico a formtsx dentro de node_modules para que pueda usarlo en su proyecto como cualquier otra biblioteca.


Una vez implementada alguna de estas dos opciones, incluya los componentes que desea con:

```ts
import {Button, Form, Retractable, Section, FlexDiv, ConfirmationBox, DateTimePicker, Select, Field,ImagePicker,FilePicker, Radio, Textarea, Switch,ColorPicker, FieldsTable, OutsideClickHandler} from 'path/to/formtsx';
```

## Ejemplo:

```ts
import React from 'react';
import {Button, Form, ConfirmationBox, DateTimePicker,Switch} from 'path/to/formtsx';

export default function App(): React.JSX.Element {

  const [date, setDate] = React.useState()
  const [switchIsOn, setSwitchIsOn] = React.useState(false)


    return (
        <div id="app">
            <Form id="my-form" formTitle='Title'>

                <DateTimePicker nonPast value={date} onChange={setDate} />

                <Switch isOn={switchIsOn} onToggle={setSwitchIsOn}/>

                <ConfirmationBox message='¿Estás seguro?' onConfirm={someFunction}>
                    <Button type='button' textContent='un botón' />
                </ConfirmationBox>

            </Form>
        </div>
    );
}
```
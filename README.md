# formjsx

Biblioteca de componentes reutilizables de React para formularios.

## Compilación

Una vez que se descargan las dependencias con:

```
$ npm install
```

Ejecute en el directorio principal:

```
$ npm run build
```

Los archivos generados estarán en `dist/`

## Uso

Esta es una biblioteca de uso personal que no está publicada en npm y necesita incluirse manualmente. Incluya el archivo `dist/formjsx.js` en su proyecto.

Incluya los componentes que desea con:

```ts
import {Button, Form, Retractable, Section, FlexDiv, ConfirmationBox, DateTimePicker, Select, Field,ImagePicker,FilePicker, Radio, Textarea, Switch,ColorPicker, FieldsTable} from 'path/to/formjsx';
```

## Ejemplo:

```ts
import React from 'react';
import {Button, Form, ConfirmationBox, DateTimePicker,Switch} from 'path/to/formjsx';

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
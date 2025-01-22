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

Los archivos generados estarán en `formtsx/`

## Uso

Esta es una biblioteca de uso personal que no está publicada en npm y necesita incluirse manualmente en su proyecto. Incluya el directorio `formtsx`, que se genera al ejecutar `npm run build`.

Incluya los componentes que desea con:

```ts
import {Button, Form, Retractable, Section, FlexDiv, ConfirmationBox, DateTimePicker, Select, Field,ImagePicker,FilePicker, Radio, Textarea, Switch,ColorPicker, FieldsTable} from 'path/to/formtsx';
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
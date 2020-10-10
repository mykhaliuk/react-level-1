This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Simple **React** application that handles multiple selection in lists.

Component `CheckboxList` renders list of multiple selection taking an array of objects
matched the type `Array<{} extends {label: string}>`.

- The first checkbox selects/unselects all the checkboxes
- The others items select themselves
- Checking all items selects the "Select all" checkbox automatically

#Components

###`Checkbox`
_Stateless checkbox element._

| Prop name    | Type                                       | Is required | Default value |
| :----------- | :----------------------------------------- | :---------: | :------------ |
| `isSelected` | `bolean`                                   |     yes     |               |
| `label`      | `string`                                   |     yes     |               |
| `onChange`   | `(state: Record<string, boolean>) => void` |     yes     |               |

<br>

###`CheckboxList`
_Multiple selection list._

| Prop name  | Type                             | Is required | Default value |
| :--------- | :------------------------------- | :---------: | :------------ |
| `list`     | `{label: string}[]`              |     yes     |               |
| `onChange` | `(e: React.ChangeEvent) => void` |     no      | `() => void`  |

<br>

## To run project

In the project directory, you should run:

### `yarn && yarn build && NODE_ENV=production npx serve -s build`

Installs all dependencies and runs the app in the production mode _(to avoid double rendering)_ .<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## or

### `yarn && yarn start`

Install all dependencies and runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

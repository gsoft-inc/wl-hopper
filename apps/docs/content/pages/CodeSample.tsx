import {
    SandpackLayout,
    SandpackProvider,
    SandpackCodeViewer
} from "@codesandbox/sandpack-react";

import decorators from "./data.js";

export function App() {
    return (
        <SandpackProvider
            theme="dark"
            template="react"
            files={{
                "App.js": `const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    }, {
    id: 1,
    name: 'José Molina-asquel Henríquez',
    profession: 'chemistaa',
    }];

    export default function List() {
      const [text, setText] = useState("")
      const listItems = people.map(person =>
        <li>{person}</li>
      );
      return <ul>{listItems}</ul>;
    }`
            }}
        >
            <SandpackLayout>
                <SandpackCodeViewer decorators={decorators} showLineNumbers={false} />
            </SandpackLayout>
        </SandpackProvider>
    );
}

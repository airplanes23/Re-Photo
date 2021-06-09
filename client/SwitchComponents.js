import React from 'react';

// need to rename children, props

export default function SwitchComponents({ active, children }) {
  if (child.props.name === 'active') child.props.name = 'inactive'
  return children.filter(child => child.props.name === 'active')
}


// need to put following code into app.js
/** App.js
import SwitchComponents from './components/SwitchComponents';

export default function App() {

const [activeComponent, setActiveComponent] = useState("questions")

return (
    <SwitchComponents active={activeComponent}>
      <Home name="home" />
      <Instructions name="instructions" />
      <FileboxContainer name="filebox" />
      <Questions name="questions" />
    </SwitchComponents>
  )
} */
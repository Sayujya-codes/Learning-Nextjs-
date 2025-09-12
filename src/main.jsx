import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Demo from './Demo.jsx'
import Jsxifelse from './component/Section 3/Jsxternory.jsx'
import ImediatlyInvoke from './component/Section 3/ImediatlyInvoke.jsx'
import Jsxloop from './component/Section 3/Jsxloop.jsx'
import ConditionalRend from './component/Section 3/ConditionalRend.jsx'
import SwitchPractise from './component/Section 3/SwitchPractise.jsx'
import ParentPractise from './component/Section 4/ParentPractise.jsx'
import ObjParent from './component/ObjParent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

{/* Section 3 */}
    {/* <App /> */}
    {/* <Demo/> */}
    {/* <Jsxifelse/>  */}
    {/* <ImediatlyInvoke/> */}
    {/* <Jsxloop/> */}
    {/* <ConditionalRend/> */}
    {/* <SwitchPractise/> */}

{/* {--------------------------------} */}

{/* {Section 4 starts here} */}
  {/* <ParentPractise/> */}
  <ObjParent/>

  </StrictMode>,
)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import './index.css'
import App from "./App.jsx";
import Demo from "./Demo.jsx";
import Jsxifelse from "./component/Section 3/Jsxternory.jsx";
import ImediatlyInvoke from "./component/Section 3/ImediatlyInvoke.jsx";
import Jsxloop from "./component/Section 3/Jsxloop.jsx";
import ConditionalRend from "./component/Section 3/ConditionalRend.jsx";
import SwitchPractise from "./component/Section 3/SwitchPractise.jsx";
import ParentPractise from "./component/Section 4/ParentPractise.jsx";
import ObjParent from "./component/Section 4/ObjParent.jsx";
import MouseClick from "./component/Section 4/MouseClick.jsx";
import FormSubmit from "./component/Section 4/FormSubmit.jsx";
import MenuFile from "./component/MenuFile.jsx";
import { BrowserRouter } from "react-router-dom";
import UseRef_InputElement from "./component/useRef_InputElement";
import UseRef_css from "./component/useRef_css";
import UseRefCachingExpensiveComputation from "./component/useRefCachingExpensiveComputation";

createRoot(document.getElementById("root")).render(
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
    {/* <ObjParent/> */}
    {/* <MouseClick /> */}

    {/* <FormSubmit /> */}
    {/* <App /> */}
    {/* <BrowserRouter>
      <MenuFile />
    </BrowserRouter> */}
    {/* <UseRef_InputElement /> */}

    {/* <UseRef_css /> */}
    <UseRefCachingExpensiveComputation />
  </StrictMode>
);

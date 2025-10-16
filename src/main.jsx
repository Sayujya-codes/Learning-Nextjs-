import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "milligram/dist/milligram.css";
// import './index.css'
import App from "./App.jsx";
import UseStateImmutableObjects from "./component/Section 6/UseStateImmutableObjects.jsx";
import SpreadOperator from "./component/Section 6/SpreadOperator.jsx";
import LearnSpreadandRest from "./component/Section 6/LearnSpreadandRest.jsx";
import UseState_ImmutableArray from "./component/Section 6/UseState_ImmutableArray.jsx";
import Todo from "./component/Section 6/Todo.jsx";
import Pass_Call_function from "./component/Section 6/Pass_Call_function.jsx";
import ManagingForm from "./component/Section 6/ManagingForm.jsx";
import SelfP1Q1 from "./component/SelfP1Q1.jsx";
import SelfP1Q2 from "./component/SelfP1Q2.jsx";
// import StateasLecture from "./component/StateasLecture.jsx";
// import Demo from "./Demo.jsx";
// import Jsxifelse from "./component/Section 3/Jsxternory.jsx";
// import ImediatlyInvoke from "./component/Section 3/ImediatlyInvoke.jsx";
// import Jsxloop from "./component/Section 3/Jsxloop.jsx";
// import ConditionalRend from "./component/Section 3/ConditionalRend.jsx";
// import SwitchPractise from "./component/Section 3/SwitchPractise.jsx";
// import ParentPractise from "./component/Section 4/ParentPractise.jsx";
// import ObjParent from "./component/Section 4/ObjParent.jsx";
// import MouseClick from "./component/Section 4/MouseClick.jsx";
// import FormSubmit from "./component/Section 4/FormSubmit.jsx";
// import MenuFile from "./component/MenuFile.jsx";
// import { BrowserRouter } from "react-router-dom";
// import UseRef_InputElement from "./component/useRef_InputElement";
// import UseRef_css from "./component/useRef_css";
// import UseRefCachingExpensiveComputation from "./component/useRefCachingExpensiveComputation";
// import UnderstandingState from "./component/UnderstandingState.jsx";

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
    {/* <UseRefCachingExpensiveComputation /> */}
    {/* <UnderstandingState /> */}

    {/* <StateasLecture /> */}

    {/* <UseStateImmutableObjects /> */}
    {/* <SpreadOperator /> */}
    {/* <LearnSpreadandRest /> */}
    {/* <UseState_ImmutableArray /> */}
    {/* <Todo /> */}
    {/* <Pass_Call_function /> */}
    {/* <ManagingForm /> */}

    {/* ----------------------------------------------------- */}
    {/* <SelfP1Q1 /> */}
    <SelfP1Q2 />
  </StrictMode>
);

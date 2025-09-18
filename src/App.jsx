// import Contact from "./component/Section 2/Contact";
// import Footer from "./component/Section 2/Footer";
// import Header from "./component/Section 2/Header";
// import Hero from "./component/Section 2/Hero";
// // import Demo2 from "./Demo2";

// const App = () => {
//     return (
//         <div>
//             {/* <h2>Test</h2>
//             <input type="text" placeholder="Sayujya Dhungana"
//              />
//              <br />
//              <br />
//              <button>Submit</button> */}

//              {/* <Demo2/> */}

//              {/* <Header/>
//              <Hero/>
//              <Contact/>
//              <Footer/> */}

//              <h4 style={
//                 {color: 'red'}
//              }>{2+2}</h4>
//              <h4>{new Date().toLocaleTimeString()}</h4>

//         </div>
//     );
// };

// export default App;

// ------------------------------------------------ for routing

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         {/* <MenuFile /> */}
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//           <Route path="/about/:id/:name" element={<AboutPage />}></Route>
//           <Route path="/contact" element={<ContactPage />}></Route>
//           <Route path="/*" element={<NotFound />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// ------------------------------------------ for Hooks

import React, { useRef } from "react";

const App = () => {
  let userefTest = useRef();
  let userefTest2 = useRef();
  let userefTest3 = useRef();
  let myimg = useRef();

  const btnClick = () => {
    userefTest.innerText = "Hello from the other side!";
    userefTest2.innerText = "hello from test 2";
    userefTest3.innerText = "hello from test 3";

    myimg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myimg.current.setAttribute("height", "200px");
    myimg.current.setAttribute("width", "200px");
  };
  return (
    <div>
      {/* <h1 ref={userefTest}></h1> */}
      <h1 ref={(h1) => (userefTest = h1)}></h1>
      <h1 ref={(h2) => (userefTest2 = h2)}></h1>
      <h1 ref={(h3) => (userefTest3 = h3)}></h1>

      <img ref={myimg} src="https://placehold.co/600x400" />

      <button onClick={btnClick}>Click Me!</button>
    </div>
  );
};

export default App;

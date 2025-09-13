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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <MenuFile /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

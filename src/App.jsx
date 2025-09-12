import Contact from "./component/Section 2/Contact";
import Footer from "./component/Section 2/Footer";
import Header from "./component/Section 2/Header";
import Hero from "./component/Section 2/Hero";
// import Demo2 from "./Demo2";

const App = () => {
    return (
        <div>
            {/* <h2>Test</h2>
            <input type="text" placeholder="Sayujya Dhungana"
             />
             <br />
             <br />
             <button>Submit</button> */}

             {/* <Demo2/> */}

             {/* <Header/>
             <Hero/>
             <Contact/>
             <Footer/> */}

             <h4 style={
                {color: 'red'}
             }>{2+2}</h4>
             <h4>{new Date().toLocaleTimeString()}</h4>
            

        </div>
    );
};

export default App;
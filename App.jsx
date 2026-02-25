import React from "react";
import Garmen from "./Finpro/Garmen";
import Greating from "./Greating";
import Destructuringprops from "./Destructuringprops";
import Listrendering from "./Listrendering";
import RegistrationForm from "./Registrationform";
import Useeffecthook from "./Useeffecthook";
import Useeffectapi from "./Useeffectapi";
import Userefimg from "./Userefimg.jsx";
import Darkmode from "./Darkmode"
import { ThemeProvider } from "./component/Themecontext";
import Parent from "./component/Parent";
import Usereducer from "./component/Usereducer"
import Usecallbackhook from "./component/Usecallbackhook";
import Xogame from "./Game/Xogame.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Router/Home.jsx";
import Uploaddoc from "./Router/Uploaddoc.jsx";
import About from "./Router/About.jsx";
import Service from "./Router/Services.jsx";
import Contact from "./Router/Contact.jsx";
import Blogdetail from "./Router/BlogDetil.jsx";
import Registration from "./Router/Registration.jsx";
import Cart from "./Finpro/Cart.jsx";
import { CartProvider } from "./Finpro/CartContext.jsx";
import Aboutgar from "./Finpro/Aboutgar.jsx";
import Navigar from "./Finpro/Navigar.jsx";
import Shop from "./Finpro/Shop.jsx";

export default function App() 
{
const name="Dhanush"
const age="32"
const local="chennai"

const address="Arani"
const state="Tamil Nadu"
const country="india"

const address1="Chennai"
const state1="Tamil Nadu"
const country1="india"

const address2="Vellore"
const state2="Tamil Nadu"
const country2="india"

const address3="America"
const state3="Tamil Nadu"
const country3="india"

const address4="Ecr"
const State4="Tamil Nadu"
const country4="india"

const address5="madurai"
const state5="Tamil Nadu"
const country5="india"

const address6="Erode"
const state6="Tamil Nadu"
const country6="india"
const display=false;

return(
 <div>
{display && ( <div>
    <Useeffectapi/>
    <Useeffecthook/>
    <Listrendering/>
    <h1>hello </h1>
  <h2>my name is {name} and age {age}</h2>
  <Greating firstname={name}/>
  <Destructuringprops address={address} state={state} country={country}/>
  <Destructuringprops address={address1} state={state1} country={country1}/>
  <Destructuringprops address={address2} state={state2} country={country2}/>
  <Destructuringprops address={address3} state={state3} country={country3}/>
  <Destructuringprops address={address4} state={State4} country={country4}/>
  <Destructuringprops address={address5} state={state5} country={country5}/>
  <h3>Condition  Rendering</h3>
{local === "coimbatore" ? (<Destructuringprops address={address1} state={state1} country={country1}/>) : (<Destructuringprops address={address} state={state} country={country}/>)}
<RegistrationForm/>
<Darkmode/>
<Userefimg/>
< ThemeProvider>
<Parent/></ ThemeProvider>
 <Usereducer/>
 <Usecallbackhook/>
<BrowserRouter>
<div className="Router">
<Link to="/Home">Home</Link>
<Link to="/About">About</Link>
<Link to="/Service">Service</Link>
<Link to="/Contact">Contact</Link>
</div>
<Garmen/>
<Routes>
<Route path="/Home" element={<Home />} >
<Route path="Registration" element={<Registration/>}/>
<Route path="Uploaddoc" element={<Uploaddoc/>} /></Route>
<Route path="/About" element={<Aboutgar />}/>
<Route path="/blog/:id" element={<Blogdetail/>} />
<Route path="/Service" element={<Service />} />
<Route path="/Contact" element={<Contact />} />
</Routes>
</BrowserRouter>
<Xogame/></div>)}

 <CartProvider>
        <BrowserRouter>
      <Navigar/>
              <Routes>
          <Route path="/" element={<Garmen />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Aboutgar" element={<Aboutgar />} />
          <Route path="/Cart" element={<Cart />} />
         
          </Routes>
         <footer className="footer">
        <p>© 2026 GarmentStore. All rights reserved.</p>
      </footer>
      </BrowserRouter>
    </CartProvider>
</div>
)
}


import "./App.css";
import { createContext, useState } from "react";
import { Product } from "./Components/Product";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Title } from "./Components/Title";

//Create Context
export const Counter = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Counter.Provider
        value={{ cartItems: cartItems, setCartItems: setCartItems }}
      >
        <NavBar />
        <Title />
        <Product />
        <Footer />
      </Counter.Provider>
    </div>
  );
}

export default App;

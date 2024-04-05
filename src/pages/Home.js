import React from "react";
import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/Products/ProductList";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
}

export default Home;

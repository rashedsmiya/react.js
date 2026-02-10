import Header from "../common/Header"
import Footer from "../common/Footer"
import "./Home.css"
import React from "react"

function Home() {
    return (
        <>
        <section>
        <Header />
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        <section className="productSection">
            oure products
            <div className="productMid">
                <div className="productItems">
                    <img src="/images/react.jpg" alt="" />
                    <h3>Product Name</h3>
                </div>
            </div>
        </section>
        </>
        
    )
}
export default Home
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, rerum nostrum? Cupiditate quam officiis quo, ducimus consequatur sed neque nulla facere! Iusto earum magni, doloribus eius excepturi eos reprehenderit suscipit!.</p>
        </section>
        <section className="productSection">
            oure products
            <div className="productMid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
        </>
        
    )
}
export default Home

function ProductCard(){
    return (
        <>
        <div className="productItems">
                    <img src="/images/react.jpg" alt="" />
                    <h3>Product Name</h3>
                </div>
        </>
    );
}
import Header from "../common/Header"
import Footer from "../common/Footer"
import Btn from "../common/Btn"
import "./Home.css"

import productImage from "../../assets/images/closeup.jpg"
import { product } from "../../data/product"

function Home() {

    let n =10
    let m = 20

    let status = true

    let l=[10,20,30,40,"ravi"]

    let user =[
        {id:1,name:"Ravi",age:30},
        {id:2,name:"Demo kumar",age:31},
        {id:3,name:"Punit Reddy",age:32},
        {id:4,name:"Sandeep Rao",age:33},
        {id:5,name:"Ravi Rao",age:33},
    ]
    
    return (
        <>
       
            {
                user.map((obj,index)=>{
                    return (
                        <h2> {index+1} {obj.name} {obj.age} </h2>
                    )
                })
            }

            {
                status ? <p>Condition Welcome</p> : null
            }

        <section>
        <Header />
        <h1>Welcome to Home Page {n+m} {"welcome"} {'welcome'} {'welcome'}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, rerum nostrum? Cupiditate quam officiis quo, ducimus consequatur sed neque nulla facere! Iusto earum magni, doloribus eius excepturi eos reprehenderit suscipit!.</p>
        <Btn value={"Read More"} color="red"/>
        </section>
        <section className="productSection">
            <img src={productImage} alt="" />
            oure products
            <div className="productMid"> 
                {
                  product.map((obj,index)=> <ProductCard data={obj} />)
                } 
            </div> 
        </section>
        </>
        
    )
}
export default Home
 
function ProductCard({data}){

    return (
        <>
        <div className="productItems">
                <img src={data.thumbnail} alt="" />
                <h3>
                    {data.price}
                    {data.title}
                </h3>
                <p>{data.description}</p>
                <Btn value={"View Details"} color="blue" />
        </div>
        </>
    );
}

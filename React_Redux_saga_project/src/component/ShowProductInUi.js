import { useSelector } from "react-redux";
import './product.css'
const ShowProductInUi=()=>{
    const Ui_data=useSelector((state)=>state.cartData)
    console.log(Ui_data)
    return(
       <div style={{display:'flex'}}>
            <div style={{width:'20%', height:'120px',border:'2px solid red'}}>
                <h2>Filter Product</h2>
            </div>
            <div style={{display:'flex', flexWrap:'wrap',width:'80%'}}>
            {
                Ui_data.data.map((e) => {
                    return (
                        <div style={{ height:'400px',width:'250px' }} className='product_listing'>
                            <img src={e.image} style={{height:'60%',width:'75%'}}/>
                            <h5>{e.title}</h5>
                            <div>{e.price}</div>
                        </div>)
                    }
                )
            }
        </div>
       </div>
    )
}
export default ShowProductInUi;
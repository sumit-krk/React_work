import { useState } from "react";

const Increment=()=>{
    const [count,showCount]=useState(0);
    return<>
        <div>{count}</div>
        <button onClick={()=>showCount(count+1)}>Updata</button>
    </>
}
export default Increment;
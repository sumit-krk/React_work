import React from "react";
import Child from "./Child";
class Parent extends React.Component {
    render(){
        return <>
            <h1>Counter</h1>
            <Child num={1} />
        </>
    }
}
export default Parent;
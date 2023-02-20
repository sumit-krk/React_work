import React from "react";
class Child extends React.Component {
    constructor(props){
        super(props)
            this.state={
                count:this.props.num
            }
    }
    render(){
        return <>
            <div>
                <button>+</button>
                {/* <div>{this.props.num}</div> excess props directly */}
                <div>{this.state.count}</div>   {/*firstly props store in store in state then excess here*/}
                <button>-</button>
            </div>
        </>
    }
}
export default Child;
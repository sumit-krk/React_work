import React from "react";
class Child extends React.Component {
    constructor(props){
        super(props)
            this.state={    /* created state */
                count:this.props.num, /* created count variable in state */
                string:'', /* created string variable in state */
                mul:1,
            }
    }
    render(){
        return <>
            <div style={{border:'1px solid red'}}>
                <button onClick={()=>{this.setState({
                    count:this.state.count+1,  /* updated the ount variable on onClicl */
                    mul:this.state.mul*this.state.count, /* updated more then one state under in one function */
                })}}>+</button>
                {/* <div>{this.props.num}</div> excess props directly */}
                <div>{this.state.count}</div>   {/*firstly props store in store in state then excess here*/}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>-</button>
            </div>
            <div style={{border:'1px solid green'}}>
                <input value={this.state.string} onChange={(e)=>{
                    this.setState({
                        string:e.target.value /* updated string in state variable */
                    })
                }} />
                <div>{this.state.string}</div>
            </div>
            <div>
                see multiplection result:{this.state.mul}
            </div>
        </>
    }
}
export default Child;
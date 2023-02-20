import React from "react";
class Child extends React.Component {
    constructor(props){
        console.log("whenever component will run I will run first (constructor function)")
        super(props)
            this.state={    /* created state in class component */
                count:this.props.num, /* created count variable in state */
                string:'', /* created string variable in state */
                mul:1,
            }
    }

    componentDidMount() {
        console.log("After constructor function and render method, component did mount will be call");
        /* best place to call api here */
        /* it will be run only one time when ever component will be render first time (commit phase)*/
    }

    componentDidUpdate(){
        console.log("updating phase");
        /*it will not run first time when component will be render, but it will run when ever state gets update in our component during the commit phase*/
    }

    render(){
        console.log("after constructor function render method will be run")
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
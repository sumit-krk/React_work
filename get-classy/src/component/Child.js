import React from "react";
class Child extends React.Component {
    constructor(props){
        super(props)
            this.state={    /* created state */
                count:this.props.num, /* created count variable in state */
                string:'' /* created string variable in state */
            }
    }
    render(){
        return <>
            <div style={{border:'1px solid red'}}>
                <button>+</button>
                {/* <div>{this.props.num}</div> excess props directly */}
                <div>{this.state.count}</div>   {/*firstly props store in store in state then excess here*/}
                <button>-</button>
            </div>
            <div style={{border:'1px solid green'}}>
                <input value={this.state.string} />
                <div>{this.state.string}</div>
            </div>
        </>
    }
}
export default Child;
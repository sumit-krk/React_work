const Login=()=>{
    return <div>
        <from>
            <h1>Login</h1>
            <div>
                <input placeholder="User Name" style={{height:'20px',margin:'0px 5px'}} />
                <input placeholder="Password" style={{height:'20px',margin:'0px 5px'}}/>
            </div>
            <div>
                <button style={{padding:'5px',margin:'5px 5px'}}>Login</button>
            </div>
            <h2>If you Don't have account</h2>
            <div>
                <span>Click On</span>
                <span> <a href="">Register</a> </span>
            </div>
        </from>
    </div>
}
export default Login;
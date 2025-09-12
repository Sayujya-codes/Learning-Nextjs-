const LoginStatus = (status)=>{
    if(status){
        return (
            <button>Logout</button>
        )
    }
    else {
        return <button>Login</button>
    }
}

const ConditionalRend = () => {

    return (
        <div>
            <h1>Login Status</h1>
            {LoginStatus(true)}
        </div>
    )
};

export default ConditionalRend;
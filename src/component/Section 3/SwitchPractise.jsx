const TernoryOperator = (statusCheck)=>{
        return statusCheck? 
        <button>LogIn + true</button>: 
        <button>LogOut + false</button>
}

const LogicalAnd = (logicalStatus)=>{
    return (
        <div>
            <h1>LogIn Status</h1>
            {logicalStatus && <h1>Condtion is True</h1>}
        </div>
    )
    
}

const CRIFFY = (condstatusIffy)=>{
    return(
        (()=>{
            if(condstatusIffy == true){
                return <button>LogIn</button>
            }
            else{
                return <button>LogOut</button>
            }
        })()
    )
}


const SwitchPractise = () => {
   
    // const status = true;

    
    return(
        <>
       {TernoryOperator(true)}   

       {LogicalAnd(true)}

       {CRIFFY(true)} 
    

    {/* switch(status){
        case true: 
        return(
            <button>LogOut</button>
        )

        case false:
            return(
                <button>LogIn</button>
            )

        default:
            return null;
    } */}
    
 </>
   ) 
};

export default SwitchPractise;
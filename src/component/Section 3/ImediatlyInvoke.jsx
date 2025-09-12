import React from 'react';

const ImediatlyInvoke = () => {

    let marks = 90;
    return (
        <div>
            {(
                ()=>{
                    if(marks>=90 && marks <100){
                        return <h1>A+</h1>
                    }
                    else if(marks >= 80 && marks <90){
                        return <h1>A</h1>
                    }
                    else if(marks >= 70 && marks <80){
                        return <h1>B+</h1>
                    }
                    else{
                        return <h1>F</h1>
                    }
                }
                
            )()}
        </div>
    );
};

export default ImediatlyInvoke;
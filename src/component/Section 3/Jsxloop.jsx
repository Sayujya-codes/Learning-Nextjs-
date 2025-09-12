const Jsxloop = () => {

    const city = ['Dhaka', 'Kathmandu', 'Pokhara', 'Chitwan']

    return (
        <div>
            <ul>
                {
                    city.map((item, i)=>{
                      return <li>{"Index = " +i}, {item} </li> 
                      
                    })
                }
            </ul>
        </div>
    );
};

export default Jsxloop;
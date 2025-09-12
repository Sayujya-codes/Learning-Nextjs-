const Jsxternory = () => {
    let marks = 90;

    return (
        <div>
          {
            marks > 80 ? <h1>Marks is above 80 ⬆️</h1>
            :
            <h1>Marks is below 80 ⬇️</h1>
          }
        </div>
    );
};

export default Jsxternory;
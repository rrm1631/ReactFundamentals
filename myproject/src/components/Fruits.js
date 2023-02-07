function Fruits() {

    const fruits = ['Apple', 'Banana', 'Mango'];

    //map() - lets you manipulate the items in an array by iterating and accessing individual ite
    const listFruits = fruits.map((fruit, index)=>(
        <h3 key={index}> {fruit} </h3>
    ));

    return (
        <div>
            {listFruits} 
        </div>
    );
}

export default Fruits;
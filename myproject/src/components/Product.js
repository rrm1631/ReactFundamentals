function Product() {

    // const products = ['Laptop', 'Phone', "Modem"];
    const products = [
        { id: 1, name: "Laptop", price: 500 },   
        { id: 2, name: "Phone", price: 200 },   
        { id: 3, name: "Modem", price: 50 },
        { id: 4, name: "Laptop", price: 900 },      
    ];

    //map() - lets you manipulate the items in an array by iterating and accessing individual item
    const listProducts = products.map((product)=>( 
        <h3 key={product.id}> {product.name}: ${product.price} </h3> 
    ));

    return (
        <div>
            {listProducts}
        </div>
    );
}

export default Product;
const initState = {
    products: [
        {id: 1, name: 'Assorted Coffee', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg', price: 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 2, name: 'Cashew Butter', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg', price: 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 3, name: 'Fresh Orange Juice', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg', price: 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 4, name: 'Fresh Organic Honey', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey.jpg', price: 50, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 5, name: 'Natural Extracted Edible Oil', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg', price: 25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 6, name: 'Organic Face Scrub', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash.jpg', price: 20, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 7, name: 'Hand Sanitizer', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer.jpg', price: 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 8, name: 'Diabetic Cookies', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies.jpg', price: 25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {id: 9, name: 'Pulses From Organic Farm', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses.jpg', price: 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        
        {id: 10, name: 'Wheat From Organic Farms', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat.jpg', price: 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;
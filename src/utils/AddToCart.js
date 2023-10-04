import NotifySuccess from '../utils//notifications/NotifySuccess';
import NotifyWarning from '../utils/notifications/NotifyWarning';

const AddToCard = (product, quantity) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let search = cartItems.find(item => item.id === product.id);

    if(search === undefined) {
        cartItems.push(
            {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: quantity,
                stock: product.stock,
                image: product.images[0]

            }
        );
        localStorage.setItem("cart", JSON.stringify(cartItems));
        NotifySuccess("Product added to cart");
    } else {
        NotifyWarning("Product already exists");
    }
    
}

export default AddToCard;
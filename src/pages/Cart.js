import PageTitle from "../components/PageTitle";
import CartItems from "../components/CartItems";
import CartNav from "../components/CartNav";

const Cart = () => {

    return (
        <>
            <PageTitle title={"Cart"}/>
            <main className="main cart">
                <CartNav />
                <div className="page-content">
                    <div className="container">
                    <div className="row gutter-lg mb-10">
                        <CartItems />
                        
                    </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Cart;
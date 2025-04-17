import { useSelector } from "react-redux";
import Cartitems from "../components/Cartitems";
import { useEffect, useState } from "react";
function Cart() {
    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0)
    // cart me dynamicallly total amout add krna 
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])
    // yhaa dependency me cart kyo ki ye value jb bhi add hoga ya remove hoga tb update hoga total amount 
    return (
        <>
            <div>
                {
                    cart.length > 0 ?
                        (
                            <div>
                                {
                                    cart.map((item) => (
                                        <Cartitems key={item.id} item={item} />
                                    ))
                                }

                                <div>
                                    <p>Your cart</p>
                                    <p>Your Summary</p>
                                    <p>
                                        total Items : {cart.length}
                                    </p>
                                    <p>Total amout :{totalAmount}</p>
                                </div>
                            </div>

                        ) :
                        (
                            <div>
                                <p> Your Cart is empty</p>
                            </div>
                        )

                }
            </div>


        </>
    )
}

export default Cart;
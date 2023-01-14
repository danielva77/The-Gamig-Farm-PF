import { useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { getAllProd } from "../../redux/actions";

export function CartItem({ id, quantity }) {
    const dispatch = useDispatch()

    const storeItems = useSelector(state => state.items)

    useEffect(() => {
        if (!storeItems) {
            dispatch(getAllProd())
        }
    }, [])

    const { removeFromCart } = useShoppingCart();

    const item = storeItems.find((item) => item.id === id);

    if (item == null) return null;
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.img}
                style={{ width: "125px", height: "75px", objectFit: "contain" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muter" style={{ fontSize: ".75rem" }}>
                    ${item.price}
                </div>
            </div>
            <div>${item.price * quantity}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>x</Button>
        </Stack>
    );
}


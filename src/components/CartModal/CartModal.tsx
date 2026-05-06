import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import styles from "./CartModal.module.css";

type CartModalProps = {
  onClose: () => void;
};

const CartModal = ({ onClose }: CartModalProps) => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>CART ({cartItems.length})</h2>

          <button onClick={clearCart} className={styles.removeButton}>
            Remove all
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className={styles.list}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} />

                  <div className={styles.info}>
                    <h3>{item.name}</h3>
                    <p>$ {item.price.toLocaleString()}</p>
                  </div>

                  <div className={styles.quantity}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.total}>
              <span>TOTAL</span>
              <strong>$ {total.toLocaleString()}</strong>
            </div>

            <button className={styles.checkoutButton}>
              <Link to="checkout">CHECKOUT</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;

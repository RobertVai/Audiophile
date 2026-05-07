import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import styles from "./OrderConfirmationModal.module.css";

type Props = {
  onClose: () => void;
};

const OrderConfirmationModal = ({ onClose }: Props) => {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 50;
  const grandTotal = total + shipping;

  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;

  const handleBackHome = () => {
    clearCart();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.icon}>✓</div>

        <h2>
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>

        <p className={styles.text}>
          You will receive an email confirmation shortly.
        </p>

        <div className={styles.summaryBox}>
          <div className={styles.itemsBox}>
            {firstItem && (
              <div className={styles.item}>
                <img src={firstItem.image} alt={firstItem.name} />

                <div className={styles.itemInfo}>
                  <h3>{firstItem.name}</h3>
                  <p>$ {firstItem.price.toLocaleString()}</p>
                </div>

                <span>x{firstItem.quantity}</span>
              </div>
            )}

            {otherItemsCount > 0 && (
              <p className={styles.otherItems}>
                and {otherItemsCount} other item(s)
              </p>
            )}
          </div>

          <div className={styles.totalBox}>
            <span>GRAND TOTAL</span>
            <strong>$ {grandTotal.toLocaleString()}</strong>
          </div>
        </div>

        <Link to="/" className={styles.button} onClick={handleBackHome}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;

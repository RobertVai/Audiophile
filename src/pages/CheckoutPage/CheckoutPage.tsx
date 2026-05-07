import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import styles from "./CheckoutPage.module.css";
import OrderConfirmationModal from "../../components/OrderConfirmationModal/OrderConfirmationModal";

const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Wrong email format"),
  phone: z.string().min(1, "Phone number is required"),

  address: z.string().min(1, "Address is required"),
  zipCode: z.string().min(1, "ZIP Code is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),

  paymentMethod: z.enum(["e-money", "cash"]),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    setIsModalOpen(true);
  };

  return (
    <main className={styles.page}>
      <button className={styles.goBack}>Go Back</button>

      <div className={styles.wrapper}>
        <form className={styles.checkout} onSubmit={handleSubmit(onSubmit)}>
          <h1>CHECKOUT</h1>

          <section className={styles.section}>
            <h2>BILLING DETAILS</h2>

            <div className={styles.grid}>
              <label>
                <span>Name</span>
                {errors.name && <small>{errors.name.message}</small>}
                <input {...register("name")} placeholder="Alexei Ward" />
              </label>

              <label>
                <span>Email Address</span>
                {errors.email && <small>{errors.email.message}</small>}
                <input {...register("email")} placeholder="alexei@mail.com" />
              </label>

              <label>
                <span>Phone Number</span>
                {errors.phone && <small>{errors.phone.message}</small>}
                <input {...register("phone")} placeholder="+1 202-555-0136" />
              </label>
            </div>
          </section>

          <section className={styles.section}>
            <h2>SHIPPING INFO</h2>

            <div className={styles.grid}>
              <label className={styles.full}>
                <span>Your Address</span>
                {errors.address && <small>{errors.address.message}</small>}
                <input
                  {...register("address")}
                  placeholder="1137 Williams Avenue"
                />
              </label>

              <label>
                <span>ZIP Code</span>
                {errors.zipCode && <small>{errors.zipCode.message}</small>}
                <input {...register("zipCode")} placeholder="10001" />
              </label>

              <label>
                <span>City</span>
                {errors.city && <small>{errors.city.message}</small>}
                <input {...register("city")} placeholder="New York" />
              </label>

              <label>
                <span>Country</span>
                {errors.country && <small>{errors.country.message}</small>}
                <input {...register("country")} placeholder="United States" />
              </label>
            </div>
          </section>

          <section className={styles.section}>
            <h2>PAYMENT DETAILS</h2>

            <div className={styles.paymentGrid}>
              <p className={styles.paymentLabel}>Payment Method</p>

              <div className={styles.radioGroup}>
                <label className={styles.radioBox}>
                  <input
                    type="radio"
                    value="e-money"
                    {...register("paymentMethod")}
                  />
                  e-Money
                </label>

                <label className={styles.radioBox}>
                  <input
                    type="radio"
                    value="cash"
                    {...register("paymentMethod")}
                  />
                  Cash on Delivery
                </label>
              </div>

              {paymentMethod === "e-money" && (
                <>
                  <label>
                    <span>e-Money Number</span>
                    <input
                      {...register("eMoneyNumber")}
                      placeholder="238521993"
                    />
                  </label>

                  <label>
                    <span>e-Money PIN</span>
                    <input {...register("eMoneyPin")} placeholder="6891" />
                  </label>
                </>
              )}
            </div>
          </section>

          <button className={styles.payButton}>CONTINUE & PAY</button>
        </form>

        <aside className={styles.summary}>
          <h2>SUMMARY</h2>

          {cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.name} />

              <div className={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>$ {item.price.toLocaleString()}</p>
              </div>

              <span>x{item.quantity}</span>
            </div>
          ))}

          <div className={styles.totals}>
            <div>
              <span>TOTAL</span>
              <strong>$ {total.toLocaleString()}</strong>
            </div>

            <div>
              <span>SHIPPING</span>
              <strong>$ {shipping}</strong>
            </div>

            <div>
              <span>VAT (INCLUDED)</span>
              <strong>$ {vat.toLocaleString()}</strong>
            </div>

            <div className={styles.grandTotal}>
              <span>GRAND TOTAL</span>
              <strong>$ {grandTotal.toLocaleString()}</strong>
            </div>
          </div>
        </aside>
      </div>
      {isModalOpen && (
        <OrderConfirmationModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
};

export default CheckoutPage;

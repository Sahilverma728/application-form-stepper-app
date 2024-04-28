import "./App.css";
import CheckoutStepper from "./components/stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () =>
    <div class="info">
      <h3>Provide your details and information</h3>
      <label htmlFor="">Enter full name</label>
      <input class="input-name" type="text" placeholder="Full Name"/>
      <br />
      <label htmlFor="">Enter username</label>
      <input class="input-name" type="text" placeholder="Username"/>
      <br />
      <label htmlFor="">Enter registered email</label>
      <input class="input-name" type="text" placeholder="Email"/>
    </div>,
  },
  {
    name: "Shipping Info",
    Component: () =>
    <div class="info">
      <h3>Provide your address details</h3>
      <label htmlFor="">Block No./ House No.</label>
      <input class="input-name" type="text" placeholder="House Number"/>
      <br />
      <label htmlFor="">Street/ Locality/ Colony</label>
      <input class="input-name" type="text" placeholder="Street No."/>
      <br />
      <label htmlFor="">Landmark/ Nearby locality</label>
      <input class="input-name" type="text" placeholder="Landmark"/>
      <br />
      <label htmlFor="">P.O. No.</label>
      <input class="input-name" type="text" placeholder="P.O. No."/>
      <br />
      <label htmlFor="">City Pincode</label>
      <input class="input-name" type="text" placeholder="Pincode: for e.g 201307 for Gautam Budh nagar"/>
      <br />
      <label htmlFor="">City</label>
      <input class="input-name" type="text" placeholder="Pincode: for e.g 201307 for Gautam Budh nagar"/>
      <br />
      <label htmlFor="">State</label>
      <input class="input-name" type="text" placeholder="Pincode: for e.g 201307 for Gautam Budh nagar"/>
    </div>,
  },
  {
    name: "Payment Gateway",
    Component: () => <div class="info">Complete payment for your order.</div>,
  },
  {
    name: "Delivery",
    Component: () => <div class="info"> Successfully placed the order, your order will be delivered.</div>,
  },
];

function App() {
  return (
    <div>
      <h2>Enrollment application form</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
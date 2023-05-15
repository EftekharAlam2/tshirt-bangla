import { useContext } from "react";
import Cusin from "./Cusion";
import { MoneyContext } from "./Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>grandpa money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cusin>Nabil</Cusin>
        <Cusin>Nabila</Cusin>
      </section>
    </div>
  );
};

export default Uncle;

import Account from "./Account";
import data from "../assets/data.json";

const Accounts = () => {
  return (
    <main>
      <div className="container">
        {data.map((item, index) => {
          return (
            <Account
              name={item.name}
              balance={item.balance}
              color={item.color}
              operations={item.operations}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Accounts;

import Operations from "./Operations";
import Button from "./Button";
import Title from "./Title";

const Account = ({ name, balance, color, operations, key }) => {
  console.log(operations);
  return (
    <section key={key}>
      <Title name={name} color={color} balance={balance} />
      <Operations operations={operations} />
      <Button nameButton="See more" />
    </section>
  );
};

export default Account;

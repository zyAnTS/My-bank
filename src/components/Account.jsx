import Operations from "./Operations";

const Account = ({ name, balance, color, operations, key }) => {
  console.log(operations);
  return (
    <section key={key}>
      <article style={{ backgroundColor: `${color}` }}>
        <p>{name}</p>
        <p>{balance} €</p>
      </article>
      <Operations operations={operations} />
      <div className="button">
        <button>SEE MORE</button>
      </div>
    </section>
  );
};

export default Account;

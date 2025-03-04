const Operation = ({ date, description, amount, key }) => {
  return (
    <div className="operation" key={key}>
      <p>{date}</p>
      <div className="description-amount">
        <p>{description}</p>
        <p>{amount} €</p>
      </div>
    </div>
  );
};

export default Operation;

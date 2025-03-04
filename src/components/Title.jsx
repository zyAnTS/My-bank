const Title = ({ name, color, balance }) => {
  return (
    <article style={{ backgroundColor: `${color}` }}>
      <p>{name}</p>
      <p>{balance} €</p>
    </article>
  );
};

export default Title;

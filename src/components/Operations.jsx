import Operation from "./Operation";

const Operations = ({ operations }) => {
  return (
    <>
      {operations.map((item, index) => {
        return (
          <Operation
            date={item.date}
            description={item.description}
            amount={item.amount}
            key={index}
          />
        );
      })}
      ;
    </>
  );
};

export default Operations;

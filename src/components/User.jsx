const User = ({ name }) => {
  return (
    <div className="user">
      <p>{name}</p>
      <div className="userIcon">
        <i class="fa-regular fa-user"></i>
      </div>
    </div>
  );
};

export default User;

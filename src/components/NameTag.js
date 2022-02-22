const NameTag = ({ firstName, lastName }) => {
  return (
    <div className="nametag">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default NameTag;

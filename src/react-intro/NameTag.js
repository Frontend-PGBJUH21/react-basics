const NameTag = ({ firstName, lastName, style }) => {
  return (
    <div style={style} className="nametag">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default NameTag;

const UserProfile = (props) => {
  const { userDetails, key } = props;
  const { imageUrl, name, role } = userDetails;
  console.log(key);
  return (
    <div className="user-card-container">
      <h1 className="user-name"> {name} </h1>
      <p className="user-designation"> {role} </p>
    </div>
  );
};
export default UserProfile;
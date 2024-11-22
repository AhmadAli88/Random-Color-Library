
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

const UserAvatar = ({ name }) => {
  const color = randomColor({ luminosity: 'bright', seed: name });

  return (
    <div
      style={{
        backgroundColor: color,
        color: '#fff',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        margin: '5px',
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};

const UserList = ({ users }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {users.map((user, index) => (
        <UserAvatar key={index} name={user} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserList;

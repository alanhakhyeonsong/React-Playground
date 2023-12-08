import { useParams } from 'react-router-dom';

const data = {
  Ramos: {
    name: '라모스',
    description: '아 잘하고 싶다...'
  },
  Geomma: {
    name: '검마',
    description: '존경하는 분...'
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default Profile;
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './redux/users/usersSlice';

function App() {
  const users = useSelector((store) => store.users.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  return (
    <div className="App">
      {users.map((user) => (
          <div key={user.login.uuid} className="users">
            <h2>{user.name.first} {user.name.last}</h2>
          </div>
        ))}
    </div>
  );
}

export default App;

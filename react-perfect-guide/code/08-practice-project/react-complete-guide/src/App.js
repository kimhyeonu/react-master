import React, { useState } from 'react';
import { v4 as generateId } from 'uuid';

import ErrorModal from './components/widgets/ErrorModal';
import UserAdder from './components/User/UserAdder';
import UserList from './components/User/UserList';

export default function App() {
  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: generateId(),
          name,
          age,
        },
      ];
    });
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error?.title}
          message={error?.message}
          onConfirmError={() => setError(null)}
        />
      )}

      <UserAdder setError={setError} onAddUser={addUserHandler} />

      <UserList users={users} />
    </div>
  );
}

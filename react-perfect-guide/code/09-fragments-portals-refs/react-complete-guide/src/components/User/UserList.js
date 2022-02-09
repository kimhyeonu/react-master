import React from 'react';

import Card from '../widgets/Card';

import classes from './UserList.module.css';

export default function UserList({ users = [] }) {
  return (
    <Card className={classes.userList}>
      <ul>
        {users.map((user) => (
          <li key={user?.id}>
            {user?.name} ({user?.age}세)
          </li>
        ))}
      </ul>
    </Card>
  );
}

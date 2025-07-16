import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
    { id: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
  ];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

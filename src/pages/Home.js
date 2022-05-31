import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { getAllUser } from '../store/slices/userSlice';
export default function Home() {
  const users = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [users, dispatch]);
  return (
    <div>
      <ul>
        {users?.length > 0 &&
          users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </div>
  );
}

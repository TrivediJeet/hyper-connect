import { useState, useEffect } from 'react';
import { User } from '..';

function useCachedUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem('users');

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setUsers(parsedData);
      setIsLoading(false);
    } else {
      fetch('https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users')
        .then(res => res.json())
        .then(data => {
          const users = data.data.users;
          setUsers(users);
          localStorage.setItem('users', JSON.stringify(users));
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }); // TODO: Retry policy? and elegant error notification (maybe a toast?)
    }
  }, []);

  return { users, isLoading };
}

export default useCachedUsers;
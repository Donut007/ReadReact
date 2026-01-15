import { useEffect, useState } from "react";
import { getUsers } from "../../Services/User";
import type { TB_M_User } from "../../Models/TB_M_User";

function HomePage() {
  const [users, setUsers] = useState<TB_M_User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      Home
      <div>
        <h1>Supabase Users</h1>
        {users.map((user) => (
          <div key={user.ID}>{user.Name}</div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

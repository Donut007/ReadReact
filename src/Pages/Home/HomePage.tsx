
import { supabase } from '../../supabaseClient'
import { useState, useEffect } from 'react'

type User = {
  ID: number
  Name: string
}

function HomePage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('TB_M_User')
        .select('*')

      if (error) {
        console.error(error)
      } else {
        setUsers(data)
      }
    }

    fetchUsers()
  }, [])
  
  return (
    <div>Home
      <div>
        <h1>Supabase Users</h1>
        {users.map(u => (
          <div key={u.ID}>{u.Name}</div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
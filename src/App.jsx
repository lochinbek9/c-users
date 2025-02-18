
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import UserList from './components/users/UserList'
import NewUser from './components/users/newUser'
import { useState } from'react'



function App() {
  const [users, setUsers] = useState([]); 

// delete  users

const deleteUsers = (id) =>{
  console.log(id);
  
  const newUsers = users.filter((user) => user.id!== id);
  setUsers(newUsers);
}

  return (
    <>
     <Navbar usersLength={users.length}/>
     <main>
     <div className="no-users">
      {users.length === 0 ? <h2 className=''>No users</h2> : null}
     </div>
    <UserList users={users} deleteUsers={deleteUsers} />
     </main>
     <NewUser/>  {/* add new user component */}
     <button className='create-user'>Create User</button>
     <Footer/>
    </>
  )
}

export default App

// {
//   id: 1,
//   imgUrl: "https://picsum.photos/200/300?random=1",
//   firstName: "John",
//   lastName: "Doe",
//   age: '20',
//   address: 'Uzbekistan',
//   job: 'Dev',
//   gender: 'Male',
// },
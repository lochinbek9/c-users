
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { useState } from 'react'



function App() {
  const [users, setUsers] = useState([{
    id: 1,
    imgUrl: "https://picsum.photos/200/300?random=1",
    firstName: "John",
    lastName: "Doe",
    age: '20',
    address: 'Uzbekistan',
    job: 'Dev',
    gender: 'Male',
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/300?random=1",
    firstName: "John",
    lastName: "Doe",
    age: '20',
    address: 'Uzbekistan',
    job: 'Dev',
    gender: 'Male',
  }
]); 

  return (
    <>
     <Navbar usersLength={users.length}/>
     <main>
     <div className="no-users">
      {users.length === 0 ? <h2 className=''>No users</h2> : null}
     </div>

     </main>
     <Footer/>
    </>
  )
}

export default App

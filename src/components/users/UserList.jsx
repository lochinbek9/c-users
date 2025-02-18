import "./UserList.css";
function UserList({users, deleteUsers}) {
  return (
    <div className="userList">
        <div className="userlist-container container">
          {users.map(user =>{
            return(
              <div className="cars" key={user.id}>
                <div className="card-inner">
                  <img src={user.imgUrl} alt={user.name} width={150} height={100} />
                  <h2>{user.firstName} {user.lastName}, {user.age} age</h2>
                  <p>{user.address} from</p>
                  <p>{user.job} job</p>
                  <p>{user.gender} gender</p>

                  <button onClick={() => deleteUsers(user.id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )

}

export default UserList

import "./newuser.css";
function newuser() {
  return (
    <div className="modal-wrapper">
        <div className="overlay">
            <div className="modal">
                <h2>Create new User</h2>
                <form>
                    <label>
                        <span>Image URL: </span>
                        <input type="url" required/>
                    </label>
                    <label>
                        <span>First name: </span>
                        <input type="text" required/>
                    </label>
                    <label>
                        <span>Age: </span>
                        <input type="number" required/>
                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}

export default newuser
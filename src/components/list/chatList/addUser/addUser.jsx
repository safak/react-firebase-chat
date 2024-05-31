import "./addUser.css"

const AddUser = () => {
    return (
        <div className="addUser" >
<form>
    <input type="text" placeholder="Username" name="username" />
    <button>Rechercher</button>
</form>
<div className="user" >
<div className="detail" >
<img src="./avatar.png" alt="" />
<span>Jane Tarzan</span>
</div>
<button>Ajouter</button>
</div>
</div>
    );
}

export default AddUser;
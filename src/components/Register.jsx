import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleRegister(e) {
        e.preventDefault();

        if (!name || !username || !password) {
            alert("Please fill all the fields");
            return;
        }

        const res = await fetch('https://dummyjson.com/users')
        const data = res.json();
        console.log(data);

        if (data.users.find((user) => user.username === username))
        {
            alert("User already exists");
            return;
        };

        const registerRes = await fetch('https://dummyjson.com/users/add',{
            method : 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify({
                name,
                username,
                password,
            })
        })

        const registerData = await registerRes.json();
        console.log(registerData);

        if(registerData.id){
            alert("User registered successfully");
            navigate("/login");
        }
    }
    return (
        <div className="page-wrapper">
            <div className="glass-card">
                <h1 className="title">Join Us</h1>
                <p className="subtitle">Create a new account</p>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="input-field" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="input-field" placeholder="Your Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="input-field" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn-primary">Register</button>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <button type="button" className="btn-link">Already have an account? Login</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
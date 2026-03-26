import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin(e) {
        e.preventDefault();

        if (!username || !password) {
            alert("Please fill all the fields");
            return;
        }

        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();

        const user = data.users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            console.log("User Found", user);
            navigate("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    }
    return (
        <div className="page-wrapper">
            <div className="glass-card">
                <h1 className="title">Welcome Back</h1>
                <p className="subtitle">Please login to your account</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="input-field" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="input-field" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn-primary">Login</button>
                        <button type="button" onClick={() => navigate("/register")} className="btn-secondary">
                            Create an Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

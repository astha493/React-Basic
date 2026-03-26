import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

        try {
            const res = await axios.get("https://dummyjson.com/users");
            const data = res.data;

            const user = data.users.find(
                (user) =>
                    user.username === username &&
                    user.password === password
            );

            if (user) {
                console.log("User Found", user);
                navigate("/dashboard");
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="page-wrapper">
            <div className="glass-card">
                <h1 className="title">Secure Login</h1>
                <p className="subtitle">Powered by Axios</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn-primary">
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="btn-secondary"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
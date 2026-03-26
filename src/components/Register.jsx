import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleRegister(e) {
        e.preventDefault();
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
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" className="input-field" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
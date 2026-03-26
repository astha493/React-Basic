import { useNavigate } from "react-router-dom"

export function TestPage() {
    const navigate = useNavigate();
    return (
        <div className="page-wrapper">
            <h1 className="hero-title">
                Welcome to React
            </h1>
            <p className="hero-subtitle">Experience next-level design with our premium application infrastructure.</p>

            <div className="action-cards">
                <div className="action-card" onClick={() => navigate("/loginAxios")}>
                    <div className="action-icon">🔐</div>
                    <h3 className="title" style={{fontSize: '1.5rem'}}>Login</h3>
                    <p className="subtitle" style={{marginBottom: 0, marginTop: '1rem'}}>
                        Access your personalized dashboard and features.
                    </p>
                </div>
                
                <div className="action-card" onClick={() => navigate("/register")}>
                    <div className="action-icon">✨</div>
                    <h3 className="title" style={{fontSize: '1.5rem'}}>Register</h3>
                    <p className="subtitle" style={{marginBottom: 0, marginTop: '1rem'}}>
                        Join our platform and discover new horizons.
                    </p>
                </div>
            </div>
        </div>
    );
}
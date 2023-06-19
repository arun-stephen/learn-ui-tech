import React, { useState } from "react";
import EditProfile from "./edit-profile";
import { useNavigate } from "react-router-dom";
import DisplayProfile from "./display-profile";

export default function Home() {
    const navigate = useNavigate();
    const [isEdit, setIsEdit] = useState(false);
    const userName = JSON.parse(localStorage.getItem("userDetails")).name;
    
    const handleUpdateProfile = (event) => {
        setIsEdit(true);
    }

    const showMainContent = () => {
        return isEdit ? <EditProfile /> : <DisplayProfile />;
    }

    const handleLogout = (event) => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="homeHeader">
                    <img src="./company-logo.png" alt="company logo"/>
                    <h2>Foodie</h2>
                </div>
                <div className="homeHeader">
                    <h5 className="text-warning h4">Welcome {userName}</h5>
                    <a href="#" className="text-info h6" onClick={handleUpdateProfile}>
                        Update Profile
                    </a>
                    <a href="#" className="text-info h6" onClick={handleLogout}>
                        Logout
                    </a>
                </div>
            </nav>
            <main>
                {showMainContent()}
            </main>
        </>
    );
}
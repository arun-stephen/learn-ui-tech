import { useState } from "react";

export default function MainCard1() {
    const [profile, setProfile] = useState({
        name: "Arun Stephen",
        phone: 1234567891,
        mail: "arun@gmail.com",
        isFilled: false
    });

    const toggleFilled = (event) => {
        setProfile(prevProfile => ({
            ...prevProfile,
            isFilled: !prevProfile.isFilled
        }));
    }

    const starImage = (profile.isFilled) ? "./full_star.png" : "./empty_star.png";

    return (
        <div className="card--container">
            <h3 className='title'>Using State with Object</h3>
            <div>
                <img className="card--photo" src="./male-icon.png" alt="person"/>
                <br/>
                <img className="card--star" src={starImage} onClick={toggleFilled} alt="star"/>
                <h4 className="card--text">{profile.name}</h4>
                <h4 className="card--text">{profile.phone}</h4>
                <h4 className="card--text">{profile.mail}</h4>
            </div>
        </div>
    );
}
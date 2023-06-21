import { useState } from "react";
import Star from "./star";

export default function MainCard2() {
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

    return (
        <div className="card--container">
            <h3 className='title'>Call Parent Event from Child</h3>
            <div>
                <img className="card--photo" src="./male-icon.png" alt="person"/>
                <br/>
                <Star isFilled={profile.isFilled} handleClick={toggleFilled} />
                <h4 className="card--text">{profile.name}</h4>
                <h4 className="card--text">{profile.phone}</h4>
                <h4 className="card--text">{profile.mail}</h4>
            </div>
        </div>
    );
}
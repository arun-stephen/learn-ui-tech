import React, { useState } from 'react';

export default function FormControls() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comments: "",
        intrested: false,
        employment: "",
        state: ""
    });

    const handleChange = (event) => {
        const {name, value, id, type, checked} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : type === "radio" ? id : value
        }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted data --> ', formData);
    }

    return (
        <div className='form--container'>
            <h2 className='form--title'>Working with Different Form Controls</h2>
            <form className="form">
                <input 
                    type="text" 
                    placeholder='Name' 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}/>
                <input 
                    type="email" 
                    placeholder='Email' 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}/>
                <textarea 
                    placeholder='Comments' 
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}/>
                <div className='remember--container'>
                    <input
                        id="intrested" 
                        type="checkbox"
                        className='checkbox'
                        name="intrested" 
                        checked={formData.intrested}
                        onChange={handleChange}
                        />
                    <label htmlFor='remember' className='remember--text'>
                        Intrested in Travelling?
                    </label>
                </div>
                <fieldset className='radio--container'>
                    <legend className='employment--text'>Employment:</legend>
                    <div className='radio--option'>
                        <input 
                            type="radio"
                            id="Unemployment"
                            className='radio'
                            name="employment"
                            checked={formData.employment === "Unemployment"}
                            onChange={handleChange}/>
                        <label htmlFor='Unemployment' className='remember--text'>
                            Unemployment
                        </label>
                    </div>
                    <div className='radio--option'>
                        <input 
                            type="radio"
                            className='radio' 
                            id="Semi-Annual"
                            name="employment"
                            checked={formData.employment === "Semi-Annual"}
                            onChange={handleChange}/>
                        <label htmlFor='Semi-Annual' className='remember--text'>
                            Semi-Annual
                        </label>
                    </div>
                    <div className='radio--option'>
                        <input 
                            type="radio"
                            className='radio' 
                            id="Annual"
                            name="employment"
                            checked={formData.employment === "Annual"}
                            onChange={handleChange}/>
                        <label htmlFor='Annual' className='remember--text'>
                            Annual
                        </label>
                    </div>
                </fieldset>
                <select id='state' name='state' value={formData.state} onChange={handleChange} >
                    <option value="">--Choose State --</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Calcutta">Calcutta</option>
                    <option value="Tamilnadu">Tamilnadu</option>
                    <option value="Karnadaka">Karnadaka</option>
                    <option value="Telungana">Telungana</option>
                    <option value="Andra Pradhesh">Andra Pradhesh</option>
                    <option value="Kerala">Kerala</option>
                </select>
                <br/>
                <br/>
                <button onClick={handleFormSubmit}>Submit</button>    
            </form>
        </div>
    );
}
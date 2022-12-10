import React from "react";
import { useState } from "react";
import './style/AppForm.css';

export const AppForm = () => {
    const [form, setForm] = useState({name: '', email: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form', form);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    return (
        <div className="AppFormContainer">
            <form onSubmit={handleSubmit} style={{marginTop: '100px'}}>
                <label>name: </label>
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={form.name}
                    onChange={handleChange}
                   />
                <label>email: </label>
                <input 
                    type='text' 
                    id='email' 
                    name='email' 
                    value={form.email}
                    onChange={handleChange}
                />
                <button style={{marginLeft: '10px'}}>submit</button>
            </form>
        </div>
        
    );
}
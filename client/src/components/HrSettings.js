// src/components/HrSettingsForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const HrSettingsForm = () => {
    const [formData, setFormData] = useState({
        employeeType: '',
        relatedUser: '',
        pinCode: '',
        badgeId: '',
        jobId: '',
        registrationNoEmployee: '',
        hourlyCost: '',
        fleetMobilityCard: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8585/api/hrsettings', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
      <div>
        <Navbar/>
        <div className='pt-[100px]'>
        <div className='font-bold text-xl text-center'>HR Settings</div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
            {Object.keys(formData).map(key => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            ))}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
        </div>
      </div>
    );
};

export default HrSettingsForm;

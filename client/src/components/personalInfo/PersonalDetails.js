import React, { useState } from 'react';
import axios from 'axios';

const PersonalDetailsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        language: '',
        distance: '',
        privateCarPlate: '',
        certificate: '',
        studyField: '',
        school: '',
        visaNo: '',
        visaExpireDate: '',
        workPermitExpirationDate: '',
        maritalStatus: '',
        dependentChildrenNo: '',
        contactName: '',
        contactPhone: '',
        nationality: '',
        identificationNo: '',
        passportNo: '',
        gender: '',
        dateOfBirth: '',
        placeOfBirth: '',
        countryOfBirth: '',
        resident: ''
    });

    const [workPermit, setWorkPermit] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setWorkPermit(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        if (workPermit) {
            data.append('workPermit', workPermit);
        }

        try {
            const response = await axios.post('http://localhost:8585/api/personaldetails', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {Object.keys(formData).map(key => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                        type={key.includes('Date') ? 'date' : key === 'email' ? 'email' : 'text'}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            ))}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workPermit">
                    Work Permit
                </label>
                <input 
                    type="file" 
                    name="workPermit" 
                    onChange={handleFileChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
    );
};

export default PersonalDetailsForm;

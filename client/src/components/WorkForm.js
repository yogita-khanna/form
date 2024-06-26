import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const WorkForm = () => {
  const [formData, setFormData] = useState({
    workAddress: '',
    workLocation: '',
    expense: '',
    offTime: '',
    workingHours: 0,
    timezone: '',
    workMobile: 0,
    workPhone: 0,
    workEmail: ''
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
      const response = await axios.post('http://localhost:8585/api/work', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='pt-[100px]'>
      <div className='font-bold text-xl text-center'>Work Information</div>
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
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
      </div>
    </div>
  );
};

export default WorkForm;

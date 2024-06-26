import React from 'react'
import PersonalDetails from '../components/personalInfo/PersonalDetails'
import WorkForm from './WorkForm'
import HrSettingsForm from './HrSettings'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='pt-[100px]'>
          <div className='font-bold text-xl text-center'>Private Information</div>
          <PersonalDetails />
        </div>
        {/* <WorkForm/> */}
        {/* <HrSettingsForm/> */}
    </div>
  )
}

export default Home
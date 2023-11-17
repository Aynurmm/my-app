import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Contacts from './Contacts'
import React from 'react'
import './UserCV.css'

function UserCV() {
  return (
    <div className='classDiv'>
<h2>Personal CV</h2>
<PersonalInfo/>
<Experience/>
<Contacts/>
    </div>
  )
}

export default UserCV
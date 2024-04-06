import Service_Provide from '@/components/ServicesProvide/servicesprovide'
import React from 'react'
import global from '../../utils/commonStyles.module.css'

const Services = () => {
  return (
    <div className={global.parent_cont}>
      <Service_Provide/>
    </div>
  )
}

export default Services

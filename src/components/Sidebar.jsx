import React from 'react'

const Sidebar = ({ sidebarVisible }) => {

  return (
    <div className={sidebarVisible ? 'md:block hidden fixed top-24 left-0' : 'hidden'}>
      <ul className='font-san text-tyrianpurple text-xl px-4 space-y-2'>
        <li><a href='#Deployments%20In%20Modern%20Systems' className='hover:text-2xl hover:font-bold'>Deployments</a></li>
        <li><a href='#Components%20of%20a%20Canary%20Deployment' className='hover:text-2xl hover:font-bold'>Canary Deployments</a></li>
        <li><a href='#Current%20Solutions' className='hover:text-2xl hover:font-bold'>Current Solutions</a></li>        
        <li><a href='#Central%20Features%20of%20Chimera' className='hover:text-2xl hover:font-bold'>Central Features</a></li>
        <li><a href="#Using%20Chimera:%20The%20Dev's%20Perspective" className='hover:text-2xl hover:font-bold'>Using Chimera</a></li>
        <li><a href="#Technical%20Challenges%20&%20Design%20Decisions" className='hover:text-2xl hover:font-bold'>Design Decisions</a></li>
        <li><a href='#Future%20Work' className='hover:text-2xl hover:font-bold'>Future Work</a></li>      
      </ul>
    </div>
  )
}

export default Sidebar

/*

*/
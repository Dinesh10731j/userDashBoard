import React from 'react'

const Sidebar = () => {
  return (
   <>
    <aside className='h-[100vh] fixed top-0 left-0 w-[230px] bg-[#1e272e]'>
        <nav>
        <section>

        </section>
            <ul className='font-poppins font-medium text-white text-center'>

                <li>Dashboard</li>
                <li>Employees</li>
                <li>Engagement Rate </li>
                <li>Tasks</li>
            </ul>
        </nav>
    </aside>
   </>
  )
}

export default Sidebar
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'

const TeamMember = ({ name, role }) => (
  <div className="team-member">
    <h3>{name}</h3>
    {/* <p>{role}</p> */}
  </div>
);

const About = () => {
  const teamMembers = [
    { name: 'Mukesh Badgujar' },
    { name: '' },
    { name: '' },
    { name: '' },
  ];

  return (
    <div className='h-screen'>
  
      <div className='Navbar flex justify-between h-12 items-center font-bold'>
        <div className='mr-2 ml-5 h-8 flex items-center  hover:bg-yellow-400 px-2 rounded cursor-pointer'>
          <a >
            <Link to="/">Back</Link>
          </a>
        </div>
      </div>
      <div className="about-us">
        <h2 className='font-extrabold text-3xl my-2'>About Us</h2>

        <p >Welcome to our website. We are a team of four passionate individuals who came together to create this platform with a common goal.</p>

        <h3 className='team-member'>Mukesh Badgujar</h3>
        {/* <h3 className='font-extrabold text-3xl my-2'>Team members</h3> */}
        {/* {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} />
        ))} */}
        <h3 className='team-member font-bold text-2xl justify-evenly my-2'>We are dedicated to our mission and look forward to making a positive impact. If you have any questions or want to reach out, please don't hesitate to contact usWe are dedicated to our mission and look forward to making a positive impact. If you have any questions or want to reach out, please don't hesitate to contact us</h3>
      </div>
    </div>
  );
};

export default About;

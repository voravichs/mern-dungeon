import React from 'react';

export default function SignUp() {
  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100'>Resume</h1>
      <p className='text-2xl text-yellow-100 mb-8 text-center'> Download my <a className='text-yellow-200' href='https://drive.google.com/file/d/1N3fD5wsOlrfw3qrbtqU9FLR4Job2Uupy/view?usp=sharing'>Resume!</a></p>
      <div className='grid grid rows-2 grid-cols-2 gap-8 xl:mx-96'>
        <ul className='text-2xl text-yellow-100 text-center'>
          <p className='font-bold underline'>Front-end Proficiencies</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>

        <ul className='text-2xl text-yellow-100 text-center'>
          <p className='font-bold underline'>Other Hobbies/Skills</p>
          <li>Blender 3D Modeling</li>
          <li>Creative Writing</li>
          <li>Tabletop Role-playing Games</li>
          <li>Photoshop</li>
        </ul>

        <ul className='text-2xl text-yellow-100 text-center'>
          <p className='font-bold underline'>Back-end Proficiencies</p>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>mySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQl</li>
        </ul>
      </div>
    </div>
  );
}

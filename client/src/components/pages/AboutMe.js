import React from 'react';
import PortfolioPic from '../../images/portfoliopic.jpg';

export default function AboutMe() {
  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>About Me</h1>
      <img
        className='rounded-full h-auto w-96 ring ring-yellow-100 mb-12 mx-auto'
        src={PortfolioPic}
        alt="Voravich Silapachairueng" />
      <p className='text-2xl text-yellow-100 ml-4 leading-loose'>My name is Voravich Silapachairueng. I was born in Thailand, but lived
        in the United States for most of my life. I had studied Cognitive Science
        at Brown University in hopes to pursue research, but decided to change
        my course and pursue software development and computer science instead.
        Thus, I am currently enrolled at the University of Pennsylvania for an
        MCIT to become a proficient programmer! <br></br>
          I love tabletop role-playing games, as I joined in with the recent rise of Dungeons and Dragons. This hobby, I believe,
        encompasses my love for telling and creating stories. Programming, in a sense,
        is very similar to telling a story, as I can set the scene with objects to
        interact with and set the results of users' actions. I hope this mission statement
        will evolve into a career working in fresh, new interactive media, such as VR, AR,
        and associated technologies.
      </p>
    </div>
  );
}

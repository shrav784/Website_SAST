/* eslint-disable no-unused-vars */
import React from 'react';
import wood_png from "../Landing_media/woodbg.jpg";
import team_png from "../Landing_media/teamphoto.webp";
import person1_png from "../Landing_media/person1.webp";
import useLenis from '../utils/lenis';

// You can use profile photos for Ankit and Neelanshu directly from LinkedIn or placeholders
const ankit_png = "https://media.licdn.com/dms/image/v2/D5603AQEVqh5V3TCD3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724601446512?e=1762387200&v=beta&t=G_9xhuuj0Ai845-mHFjgsVuPz98K3vv_LDbuzO4wKXQ";
const neelanshu_png = "https://via.placeholder.com/150"; // Replace with Neelanshu's actual photo URL if available

const teamMembers = [
  {
    name: 'Thomas Rösler',
    title: 'Captain & Treasure Hunter',
    description: 'Creates tile jewels, devises a solution to every problem and gets to the bottom of any question until he strikes gold.',
    image: person1_png
  },
  {
    name: 'Ankit Kumar Pandey',
    title: 'B.Tech Student & AI Enthusiast',
    description: 'Specializing in Computer Science and Artificial Intelligence at Newton School of Technology. Experienced in C++ and Java. Passionate about solving real-world problems with technology.',
    image: ankit_png,
    links: {
      github: 'https://github.com/Ankitgkp',
      linkedin: 'https://www.linkedin.com/in/ankit-pandey01/',
      location: 'Delhi'
    }
  },
  {
    name: 'Neelanshu Karn',
    title: 'B.Tech Student & Developer',
    description: 'Pursuing Computer Science, skilled in JavaScript and React. Interested in open-source contributions and web development projects.',
    image: neelanshu_png,
    links: {
      github: 'https://github.com/NeelanshuKarn', // Replace with actual
      linkedin: 'https://www.linkedin.com/in/neelanshukarn/', // Replace with actual
      location: 'Delhi' // Replace with actual if different
    }
  }
];

const App = () => {
  useLenis();

  return (
    <>
      <div className="w-full fixed top-0 h-screen">
        <img className="h-full w-full object-cover opacity-20 fixed -z-10" src={wood_png} alt="Wood background" />
      </div>

      <div className="w-full h-40"></div>

      <section className="w-full min-h-screen flex flex-col justify-center items-center gap-10 py-20 md:py-24 lg:py-32 relative z-10 text-white pt-24 md:pt-32 lg:pt-40">
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold shadow-xl rounded-md bg-opacity-30 p-4 px-8 md:px-12">TEAM</div>

        <div className="w-full max-w-6xl px-4 md:px-0 mb-8">
          <img src={team_png} className="w-full h-auto object-cover rounded-lg shadow-lg" alt="Team photo" />
        </div>

        <div className="w-full max-w-6xl flex flex-wrap justify-center items-stretch gap-8 px-4 sm:px-6 lg:px-8 mt-10 md:mt-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-5/12 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 bg-[rgb(0,0,0,0.3)] flex flex-col items-center rounded-lg shadow-xl p-4 hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[150px] h-auto mb-4 overflow-hidden rounded-md">
                <img className="object-cover w-full h-full rounded-md" src={member.image} alt={member.name} />
              </div>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-bold text-xl mb-1">{member.name}</h2>
                <h3 className="font-semibold text-base mb-2">{member.title}</h3>
                <p className="text-sm px-2 leading-relaxed">{member.description}</p>
                {member.links && (
                  <div className="flex gap-2 mt-2">
                    {member.links.github && (
                      <a href={member.links.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                        GitHub
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

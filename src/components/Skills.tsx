import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div  data-aos="zoom-in-up">
                    <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                    <p className='text-gray-500 pt-2'>
                    Proficient in Next.js for creating fast, scalable web apps with server-side rendering and static generation. Experienced in React, JavaScript (ES6+), and TypeScript for developing interactive UIs. Skilled in CSS, Tailwind CSS, and responsive design, with back-end experience in Node.js and Express for efficient server-side development.
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-yellow-600 text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h2  data-aos="zoom-in-up">Typescript</h2>
                            <h2  data-aos="zoom-in-up">Next.Js</h2>
                            <h2  data-aos="zoom-in-up">JavaScript</h2>
                        </div>
                        <div className='space-y-2'>
                            <h2  data-aos="zoom-in-up">Tailwind</h2>
                            <h2  data-aos="zoom-in-up">HTML</h2>
                            <h2  data-aos="zoom-in-up">CSS</h2>
                        </div>
                    </div>
        
 
                    <div className="soft-skills p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-6">
  <h2 className="text-2xl font-bold text-center">Soft Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div className="skill-card p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-blue-400">Teamwork</h3>
      <p className="mt-1 text-sm">
        I thrive in collaborative environments, valuing diverse perspectives and working together to achieve common goals.
      </p>
    </div>

    <div className="skill-card p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-blue-400">Problem-solving</h3>
      <p className="mt-1 text-sm">
        I approach challenges with a positive attitude, utilizing critical thinking and creativity to find effective solutions.
      </p>
    </div>

    <div className="skill-card p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-blue-400">Communication</h3>
      <p className="mt-1 text-sm">
        I believe in clear and open communication, ensuring ideas and feedback are shared constructively for better collaboration.
      </p>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Skills

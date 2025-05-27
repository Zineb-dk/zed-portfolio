import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Software Development
  {
    name: 'Python',
    icon: 
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-python.svg" alt="Python" className="h-full object-contain" />
    </div>,
    description: 'Used in building AI models, data pipelines, and automation tools during AI and data science projects.',
    level: 95,
    category: 'Software Development',
  },
  {
    name: 'JavaScript / TypeScript',
    icon: (
      <div className="flex justify-center items-center h-20 gap-0">
        <img src="icons/icons8-javascript.svg" alt="JavaScript" className="w-14 h-14" />
        <img src="icons/icons8-manuscrit.svg" alt="TypeScript" className="w-14 h-14" />
      </div>
    ),
    description: 'Used to create interactive UIs and scalable frontend logic in React-based projects.',
    level: 85,
    category: 'Software Development',
  },
  {
    name: 'Java',
    icon:
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-logo-java-coffee-cup-94.png" alt="Java" className="h-full object-contain" />
    </div>,
    description: 'Applied in backend development using Spring Boot for building structured and maintainable APIs.',
    level: 75,
    category: 'Software Development',
  },
  {
    name: 'Spring Boot',
    icon: 
    <div className="flex justify-center items-center h-25">
      <img src="icons/icons8-logo-de-printemps.svg" alt="Spring Boot" className="w-14 h-14" />
    </div>,
    description: 'Developed backend APIs for applications.',
    level: 70,
    category: 'Software Development',
  },
  {
    name: 'HTML & CSS',
    icon: (
      <div className="flex justify-center items-center h-20 gap-0">
        <img src="icons/icons8-html.svg" alt="HTML" className="w-14 h-14" />
        <img src="icons/icons8-css.svg" alt="CSS" className="w-14 h-14" />
      </div>
    ),
    description: 'Crafted accessible and responsive layouts for personal and academic web projects.',
    level: 90,
    category: 'Software Development',
  },
  {
    name: 'React',
    icon:
    <div className="flex justify-center items-center h-16">
      <img src="icons/icons8-réagir.svg" alt="React" className="h-full object-contain" />
    </div>,
    description: 'Used to develop component-based, responsive interfaces for modern single-page applications.',
    level: 85,
    category: 'Software Development',
  },
  {
    name: 'Node.js',
    icon:
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-nodejs.svg" alt="NodeJs" className="h-full object-contain" />
    </div>,
    description: 'Used to build REST APIs and backend services integrated with databases and frontend clients.',
    level: 75,
    category: 'Software Development',
  },
  {
    name: 'MongoDB / SQL',
    icon: (
      <div className="flex justify-center items-center h-20 gap-0">
        <img src="icons/icons8-mongodb.svg" alt="MongoDB" className="w-17 h-17" />
        <img src="icons/icons8-sql-48.png" alt="SQL" className="w-17 h-17" />
      </div>
    ),
    description: 'Handled data modeling and querying using both NoSQL and relational databases.',
    level: 80,
    category: 'Software Development',
  },
  {
    name: 'PostgreSQL',
    icon:     
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-postgresql.svg" alt="PostgreSQL" className="h-full object-contain" />
    </div>,
    description: 'Used to design and manage relational data in an inventory management project.',
    level: 80,
    category: 'Software Development',
  },

  // AI & Machine Learning
  {
    name: 'LLMs',
    icon: 
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-cerveau-94.png" alt="LLM" className="h-full object-contain" />
    </div>,
    description: 'Integrated and fine-tuned large language models for text-based AI applications.',
    level: 85,
    category: 'AI & Machine Learning',
  },
  {
    name: 'CNNs (U-Net, ResNet, ...)',
    icon: 
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-intelligence-artificielle-96.png" alt="CNN" className="h-full object-contain" />
    </div>,
    description: 'Applied for image segmentation and recognition tasks in computer vision.',
    level: 80,
    category: 'AI & Machine Learning',
  },
  {
    name: 'TensorFlow',
    icon: 
    <div className="flex justify-center items-center h-14">
      <img src="icons/icons8-flux-tensoriel.svg" alt="TensorFlow" className="h-full object-contain" />
    </div>,
    description: 'Used to build, train, and evaluate deep learning models.',
    level: 75,
    category: 'AI & Machine Learning',
  },

  // Data Science & Visualization
  {
    name: 'Data Preprocessing',
    icon: '🧹',
    description: 'Handled cleaning and formatting of raw datasets for use in ML pipelines.',
    level: 90,
    category: 'Data Science & Visualization',
  },
  {
    name: 'Data Mining',
    icon: '⛏️',
    description: 'Extracted patterns and correlations from complex datasets to drive insights.',
    level: 85,
    category: 'Data Science & Visualization',
  },
  {
    name: 'Data Visualization',
    icon: '📈',
    description: 'Presented data insights using Seaborn, Matplotlib, Folium and BI dashboards.',
    level: 80,
    category: 'Data Science & Visualization',
  },

  // Engineering & Industry
  {
    name: 'Industry 4.0',
    icon: '🏭',
    description: 'Studied smart factory systems and digital transformation in manufacturing.',
    level: 70,
    category: 'Engineering & Industry',
  },
  {
    name: 'Sockets & Networking',
    icon: '🔌',
    description: 'Implemented low-level communication using TCP/UDP.',
    level: 75,
    category: 'Engineering & Industry',
  },
  {
    name: 'Mechanical Design',
    icon: '⚙️',
    description: 'Trained in mechanical modeling and CAD, supporting interdisciplinary engineering skills.',
    level: 70,
    category: 'Engineering & Industry',
  },
];


const groupedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-10 min-h-screen relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've cultivated these skills through engineering, experimentation, and creative problem-solving, each tool I use serves a purpose.
          </p>
        </AnimatedSection>

        {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-primary-700 mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsInCategory.map((skill, index) => (
                <AnimatedSection key={skill.name} delay={0.1 * index}>
                  <div className="bg-white rounded-xl shadow-md p-6 h-full border border-nature-grass/20 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h4 className="text-xl font-display font-semibold text-gray-800 mb-2">{skill.name}</h4>
                    <p className="text-gray-600 mb-4">{skill.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

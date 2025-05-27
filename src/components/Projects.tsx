import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import NatureDecoration from './NatureDecoration';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  docsUrl?: string;
}

const projects: Project[] = [
{
  id: 1,
  title: "TheraBot",
  description: "A therapeutic chatbot using LLaMA 3.1, RAG, and Ollama to deliver personalized mental health sessions with voice input.",
  image: "images/therabot.png",
  tags: ["LLaMA 3.1", "Ollama", "RAG", "Voice-to-Text", "Speech Recognition"],
  githubUrl: "https://github.com/Zineb-dk/TheraBot",
  docsUrl: "https://therabot-a-multimodal-therapeutic-chatbot.readthedocs.io/en/latest/",
},
{
  id: 2,
  title: "Brain Tumor Segmentation",
  description: "U-Net model for automatic brain tumor segmentation using BraTS 2020 multi-modal MRI dataset.",
  image: "images/BTS.jpg",
  tags: ["U-Net", "Python", "Medical Imaging"],
  githubUrl: " https://github.com/Zineb-dk/Brain_Tumor_Segmentation",
  docsUrl: "https://brain-tumor-segmentation.readthedocs.io/en/latest/",
},
{
  id: 3,
  title: "AI-Powered CV Enhancer",
  description: "An LLM-driven tool using Gemini 1.5 and PDFMiner to adapt CVs to job offers.",
  image: "images/cv-enhancer.png",
  tags: ["Gemini", "LLMs", "PDFMiner"],
  githubUrl: "https://github.com/Zineb-dk/AI-Powered-CV-Enhancer",
  docsUrl: "", 
},
{
  id: 4,
  title: "Spring Boot User Management API",
  description: "Built a robust RESTful API with Spring Boot to manage user data, including CRUD operations, validation, and secure routing. Designed for scalable integration with frontend apps or external services.",
  image: "/images/springboot.png",
  tags: ["Java", "Spring Boot", "REST API","Mongodb","CRUD"],
  githubUrl: "",
  docsUrl: "",
},

];

const Projects: React.FC = () => {
  const [_, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Nature decorations */}
      <NatureDecoration type="cloud" size="md" position="top-10 left-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project represents a unique challenge
            and showcases different aspects of my skills.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.1 * index}>
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-md h-full hover:shadow-lg transition-shadow duration-300"
                onHoverStart={() => setActiveProject(project.id)}
                onHoverEnd={() => setActiveProject(null)}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    {project.docsUrl && (
                      <a 
                        href={project.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Documentation
                      </a>
                    )}

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <GitHub size={16} className="mr-1" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
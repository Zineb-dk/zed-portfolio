import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('https://formspree.io/f/xblondeo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Thanks for your message! I’ll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Failed to send message. Check your connection.");
  }
};

  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (footer) {
      const resizeObserver = new ResizeObserver(() => {
        setFooterHeight(footer.offsetHeight);
      });
      resizeObserver.observe(footer);
      setFooterHeight(footer.offsetHeight); // initial

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <section id="contact" style={{ paddingBottom: `${footerHeight}px` }} className="py-20 relative overflow-hidden pb-[160px]">
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill out the form below or reach out through my social media.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label 
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Y/N"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="y/n@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Hi Zineb..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-300 flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
          
          <div>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-primary-600 mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium text-left text-gray-800">Email</h4>
                      <a 
                        href="mailto:zineb.dkier@gmail.com"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        zineb.dkier@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium text-left text-gray-800">Location</h4>
                      <p className="text-gray-600">
                        Meknès, Morocco
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                  Follow Me
                </h3>
                
                <div className="flex flex justify-center flex-wrap gap-4">
                  <a 
                    href="https://github.com/Zineb-dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  
                  <a 
                    href="www.linkedin.com/in/zineb-dkier-20654528a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

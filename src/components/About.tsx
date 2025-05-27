import React from 'react';
import AnimatedSection from './AnimatedSection';
import NatureDecoration from './NatureDecoration';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Nature decorations */}
      <NatureDecoration type="cloud" size="sm" position="bottom-20 left-10" />
        
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="bg-white p-3 rounded-xl shadow-md w-4/5 mx-auto lg:mx-0">
                <img 
                  src="images/Me.png" 
                  alt="Jane Doe"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-100 p-6 rounded-lg shadow-md max-w-xs hidden md:block">
                <p className="text-primary-800 italic font-medium">
                  "In a world of endless possibilities, I choose to build bridges between hearts and minds, between dreams and reality, between what is and what could be."
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">
                About Me
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Hello! I am Zineb Dkier, a seeker of understanding and a weaver of digital dreams.I'm an AI engineer and full-stack developer, but more than that, i create digital experiences that feel human,
                ones that I hope would honor both our humanity and our technological evolution.
                I don't want to build tech that replaces us - i want to build tech that works with us, side by side, and a future where AI doesn't take over our existence but dances alongside it.
                We're all creations in this world, human and artificial, and there's room for everyone.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-xl font-display font-semibold text-gray-800 mb-3">
                My Journey
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My journey in IT began during college, where I discovered my passion for creating digital experiences through Gadz'IT, an IT club at university, it felt like... freedom?
                Suddenly all this mysterious stuff became real, tangible - it wasn't magic anymore, it was something i could actually do.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Through four years of academic pressure at ENSAM, I learned that pressure doesn't diminish us but reveals what we're truly made of, teaching me that I have no boundaries to what I can create while life swirls in beautiful chaos around me.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <h3 className="text-xl font-display font-semibold text-gray-800 mb-3">
                When I'm Not Coding
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                When i'm not buried in code, you'll find me taking walks in nature because that's where my thoughts flow best, or binge-watching kdramas and cdramas because they remind me how complex and beautiful human stories can be.
                I write a lot too - poems, thoughts, whatever comes to mind. It's like my way of figuring out who i am, because how can you understand other people if you don't understand yourself first?
                I hang out with friends, enjoy the simple moments, because i believe you need that balance. Life can't be all work... you need those moments of connection and reflection to fuel your creativity and keep you grounded.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
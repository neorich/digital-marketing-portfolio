import React from 'react';
import Section from './Section';
import { skillsData } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills & Core Competencies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="bg-dark-gray p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(100,255,218,0.3)]">
            <div className="flex items-center mb-4">
              <span className="text-teal">{skillCategory.icon}</span>
              <h3 className="text-xl font-bold text-lightest-slate ml-3">{skillCategory.category}</h3>
            </div>
            <ul className="space-y-3">
              {skillCategory.items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-teal mr-3 mt-1.5 flex-shrink-0">▹</span>
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

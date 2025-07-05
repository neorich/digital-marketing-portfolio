
import React from 'react';
import Section from './Section';
import { educationData } from '../constants';
import { CertificateIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((item, index) => (
          <div key={index} className="bg-dark-gray p-6 rounded-lg flex items-center shadow-lg hover:shadow-[0_0_25px_-5px_rgba(100,255,218,0.3)] transition-all duration-300 hover:-translate-y-1">
            <div className="text-teal mr-5 text-3xl flex-shrink-0">
                <CertificateIcon />
            </div>
            <div>
              <h3 className="text-lg font-bold text-lightest-slate">{item.degree}</h3>
              <p className="text-slate">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;

import React, { useState } from 'react';
import Section from './Section';
import { Campaign } from '../types';
import Modal from './Modal';

interface CampaignsProps {
  campaigns: Campaign[];
}

const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const handleOpenModal = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleCloseModal = () => {
    setSelectedCampaign(null);
  };

  return (
    <>
      <Section id="campaigns" title="Campaign Highlights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="group bg-dark-gray rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-all duration-300 overflow-hidden p-6 cursor-pointer hover:shadow-[0_0_25px_-5px_rgba(100,255,218,0.3)]"
              onClick={() => handleOpenModal(campaign)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenModal(campaign)}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
            >
              <h3 className="text-xl font-bold text-lightest-slate mb-2">{campaign.title}</h3>
              <p className="text-slate text-sm mb-4 flex-grow">{campaign.description}</p>
              
              <div className="border-t border-gray/20 pt-4 mt-auto">
                <h4 className="text-md font-semibold text-light-slate mb-3">Key Metrics</h4>
                <ul className="space-y-2">
                  {campaign.metrics.slice(0, 3).map((metric, index) => (
                    <li key={index} className="flex justify-between items-center text-sm bg-black p-2 rounded">
                      <span className="text-slate">{metric.label}</span>
                      <span className="font-bold text-teal">{metric.value}</span>
                    </li>
                  ))}
                   {campaign.metrics.length > 3 && (
                    <li className="text-center text-teal text-xs font-semibold pt-2 group-hover:text-lightest-slate transition-colors">
                      Click to see more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {selectedCampaign && (
        <Modal campaign={selectedCampaign} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Campaigns;
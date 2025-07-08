import React, { useState } from 'react';

interface CaseStudy {
  title: string;
  summary: string;
  industry: string;
  goal: string;
  clientChallenge: string;
  solution: string[];
  techStack: string;
  impact: string;
  bestPractices: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Real Estate Project Management Web Portal",
    summary: "Centralize tracking of multiple projects, units, and buyers in one dashboard.",
    industry: "Real Estate",
    goal: "Track multiple projects, units, and buyers in one dashboard",
    clientChallenge: "Projects were tracked via Excel; buyers and payments were manually handled",
    solution: [
      "Developed a secure portal with login for agents, project managers, and clients",
      "Synced Zoho CRM to track buyers and their payment milestones",
      "Admin dashboard to manage Building → Units → Clients → Payments"
    ],
    techStack: "React.js, Node.js, Zoho CRM, Zoho Books",
    impact: "70% improved visibility into project statuses and payment follow-ups",
    bestPractices: [
      "Modular project hierarchy: Project → Building → Unit → Buyer",
      "Role-based dashboards for Sales, Admin, and Finance",
      "CRM blueprint for booking → payment → handover"
    ]
  },
  {
    title: "Real Estate Buyer App with Document Tracking",
    summary: "Empower buyers to view booking status, EMI schedule, and upload documents in-app.",
    industry: "Real Estate / Property Sales",
    goal: "Allow buyers to view booking status, EMI schedule, and upload documents",
    clientChallenge: "Buyers kept calling to check status; paperwork was disorganized",
    solution: [
      "Built a buyer-facing mobile app with secure login",
      "App displays real-time status updates fetched from Zoho CRM",
      "Document upload flow connected with Zoho WorkDrive"
    ],
    techStack: "Flutter, Firebase, Zoho CRM, Zoho WorkDrive",
    impact: "90% fewer customer support calls, increased buyer satisfaction",
    bestPractices: [
      "Push notifications for status updates and payment reminders",
      "API integration with CRM stages and document folders",
      "PDF auto-generation for receipts and agreements"
    ]
  }
  // Add more case studies here as needed
];

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-blue-900 rounded-lg p-6 mb-5 shadow-md bg-blue-50 max-w-3xl w-full">
      <h3 className="text-blue-900 text-xl font-bold mb-2">{caseStudy.title}</h3>
      <p className="font-semibold mb-3">{caseStudy.summary}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`px-5 py-2 rounded-full font-bold text-white transition-colors duration-300 ${expanded ? 'bg-gradient-to-r from-cyan-400 to-blue-900' : 'bg-gradient-to-r from-blue-900 to-cyan-400'}`}
      >
        {expanded ? 'See Less' : 'See More'}
      </button>
      {expanded && (
        <div className="mt-4 text-gray-800 text-sm">
          <p><strong>Industry:</strong> {caseStudy.industry}</p>
          <p><strong>Goal:</strong> {caseStudy.goal}</p>
          <p><strong>Client Challenge:</strong> {caseStudy.clientChallenge}</p>
          <p><strong>Solution:</strong></p>
          <ul className="list-disc list-inside mb-2">
            {caseStudy.solution.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p><strong>Tech Stack:</strong> {caseStudy.techStack}</p>
          <p><strong>Impact:</strong> {caseStudy.impact}</p>
          <p><strong>Best Practices:</strong></p>
          <ul className="list-disc list-inside">
            {caseStudy.bestPractices.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <div className="p-5 flex flex-col items-center">
      {caseStudies.map((cs, index) => (
        <CaseStudyCard key={index} caseStudy={cs} />
      ))}
    </div>
  );
};

export default CaseStudies;

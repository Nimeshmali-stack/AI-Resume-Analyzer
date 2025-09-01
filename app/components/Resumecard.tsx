import React from "react";
import { Link } from "react-router"; // use 'react-router' only as requested
import type { Resume } from "types";
import ScoreCircle from "./Scorecircle";

const Resumecard = ({ resume }: { resume: Resume }) => {
  const { id, companyName, jobTitle, feedback, imagePath } = resume;

  return (
    <Link
      to={`/resume/${id}`}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto"
    >
      {/* Header: Company, Job Title, Score */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="font-bold text-xl text-gray-900">{companyName}</h2>
          <h3 className="text-base text-gray-700">{jobTitle}</h3>
        </div>
        <ScoreCircle score={feedback.overallScore} />
      </div>

      {/* Image Container */}
      <div className="w-full h-56 flex items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm">
        <img
          src={imagePath}
          alt={`${jobTitle} at ${companyName} resume preview`}
          className="w-auto h-48 object-contain rounded-lg"
        />
      </div>
    </Link>
  );
};

export default Resumecard;

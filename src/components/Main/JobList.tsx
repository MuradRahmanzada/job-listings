import React from "react";
import JobCard from "./JobCard";
import { Job } from "../../types";

type IProps = {
  handleTagClick: (tag: string) => void;
  filteredJobs: Job[];
}

const JobList: React.FC<IProps> = ({ handleTagClick, filteredJobs }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col">
        {filteredJobs.map((job: Job) => (
          <JobCard job={job} key={job.id} handleTagClick={handleTagClick} />
        ))}
      </div>
    </div>
  );
};

export default JobList;

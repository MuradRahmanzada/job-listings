import React from "react";
import { Job } from "../../types";
import CompanyLogo from "./CompanyLogo";
import CompanyName from "./CompanyName";
import JobInfo from "./JobInfo";
import JobPosition from "./JobPosition";
import JobTags from "./JobTags";

type IProps = {
  job: Job;
  handleTagClick: (tag: string) => void;
};

const JobCard: React.FC<IProps> = ({ job, handleTagClick }) => {
  const {
    company,
    logo,
    featured,
    isNew,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }

  if (languages) {
    tags.push(...languages);
  }

  return (
    <div
      className={`flex flex-col justify-between bg-white shadow-md my-5 mx-10 p-6  rounded-md ${
        featured && "border-l-4 border-teal-500 border-solid"
      } sm:flex-row`}
    >
      <CompanyLogo logo={logo} />
      <div className="flex flex-col justify-between ml-4">
        <CompanyName company={company} featured={featured} isNew={isNew} />
        <JobPosition position={position} />
        <JobInfo postedAt={postedAt} contract={contract} location={location} />
      </div>
      <JobTags tags={tags} handleTagClick={handleTagClick} />
    </div>
  );
};

export default JobCard;

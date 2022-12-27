import React from "react";

type IProps = {
  postedAt: string;
  contract: string;
  location: string;
};

const JobInfo: React.FC<IProps> = ({ postedAt, contract, location }) => {
  return (
    <p className="flex items-center gap-2 text-dark_gray_cyan text-base">
      {postedAt} • {contract} • {location}
    </p>
  );
};

export default JobInfo;

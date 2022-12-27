import React from "react";
import Button from "../UI/Button";

const JobTags = ({
  tags,
  handleTagClick,
}: {
  tags: string[];
  handleTagClick: (tag: string) => void;
}) => {
  return (
    <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0">
      {tags.map((tag) => (
        <Button tag={tag} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default JobTags;

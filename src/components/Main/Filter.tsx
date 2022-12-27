import React from "react";
import TagButton from "../UI/TagButton";

type IProps = {
  handleRemoveTag: (tag: string) => void;
  filter: string;
};

const Filter: React.FC<IProps> = ({ handleRemoveTag, filter }) => {
  return (
    <div className="flex items-center border border-desaturated_dark_cyan rounded">
      <span className="bg-light_grayish_cyan_filter_pill text-desaturated_dark_cyan font-bold p-1">
        {filter}
      </span>
      <TagButton handleRemoveTag={handleRemoveTag} filter={filter} />
    </div>
  );
};

export default Filter;

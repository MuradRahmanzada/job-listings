import React from "react";

type IProps = {
  handleRemoveTag: (tag: string) => void;
  filter: string;
};

const TagButton: React.FC<IProps> = ({ handleRemoveTag, filter }) => {
  return (
    <button
      className="bg-primary_dark_cyan h-full px-2 hover:bg-gray-700 transition-all"
      onClick={() => handleRemoveTag(filter)}
    >
      <img src="/assets/images/icon-remove.svg" alt="" width={10} />
    </button>
  );
};

export default TagButton;

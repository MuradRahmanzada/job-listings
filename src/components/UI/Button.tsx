import React from "react";

const Button = ({
  tag,
  handleTagClick,
}: {
  tag: string;
  handleTagClick: (tag: string) => void;
}) => {
  return (
    <button
      className="text-primary_dark_cyan bg-light_grayish_cyan_filter_pill font-bold p-2 rounded mr-4 mb-4 sm:mb-0"
      onClick={() => handleTagClick(tag)}
    >
      {tag}
    </button>
  );
};

export default Button;

import React from "react";

const ClearButton = ({ clearFilters }: { clearFilters: () => void }) => {
  return (
    <button
      className="ml-auto text-desaturated_dark_cyan underline"
      onClick={clearFilters}
    >
      Clear
    </button>
  );
};

export default ClearButton;

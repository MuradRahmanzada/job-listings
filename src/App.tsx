import { useState, useEffect } from "react";
import { Job } from "./types";
import Header from "./components/Header/Header";
import JobList from "./components/Main/JobList";

import Jobs from "./data/data.json";
import TagButton from "./components/UI/TagButton";
import Filter from "./components/Main/Filter";
import ClearButton from "./components/UI/ClearButton";
import Footer from "./components/Footer/Footer";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => setJobs(Jobs), []);

  const filterFunc = ({ role, level, tools, languages }: Job) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag: string) => filters.includes(tag));
  };

  const handleTagClick = (tag: string) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleRemoveTag = (passedFilter: string) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs: Job[] = jobs.filter(filterFunc);

  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto">
        {filters.length > 0 && (
          <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded gap-3">
            {filters.map((filter) => (
              <Filter handleRemoveTag={handleRemoveTag} filter={filter} />
            ))}
            <ClearButton clearFilters={clearFilters} />
          </div>
        )}
      </div>
      <JobList filteredJobs={filteredJobs} handleTagClick={handleTagClick} />
      <Footer/>
    </div>
  );
}

export default App;

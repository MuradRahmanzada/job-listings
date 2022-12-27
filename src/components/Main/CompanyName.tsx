const CompanyName = ({
  company,
  isNew,
  featured,
}: {
  company: string;
  isNew: boolean;
  featured: boolean;
}) => {
  return (
    <h1 className="py-2 text-primary_dark_cyan text-lg flex items-center gap-2">
      {company}
      {isNew && (
        <span className="bg-primary_dark_cyan rounded-full px-3 text-base text-white">
          New!
        </span>
      )}
      {featured && (
        <span className="bg-gray-700 rounded-xl px-3 text-base text-white">
          Featured
        </span>
      )}
    </h1>
  );
};

export default CompanyName;

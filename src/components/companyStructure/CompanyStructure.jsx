import React from 'react';

const positions = {
  ceo: "CEO",
  director: "Director",
  level1: ["Operation", "Finance", "Marketing", "HR"],
  level2: ["Engineering", "Credit", "Sales"],
  level3: ["Technician", "Accountant", "Presales"]
};

const Box = ({ label }) => (
  <div className="bg-cyan-700 text-white px-6 py-3 rounded shadow text-center min-w-[130px]">
    {label}
  </div>
);

const CompanyStructure = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-xl font-bold mb-6">Company Structure:</h1>

      {/* CEO */}
      <div className="flex justify-center mb-4">
        <Box label={positions.ceo} />
      </div>

      {/* Director */}
      <div className="flex justify-center mb-8">
        <Box label={positions.director} />
      </div>

      {/* Level 1 */}
      <div className="flex justify-center flex-wrap gap-6 mb-6">
        {positions.level1.map((pos) => (
          <Box key={pos} label={pos} />
        ))}
      </div>

      {/* Level 2 */}
      <div className="flex justify-center flex-wrap gap-6 mb-6">
        {positions.level2.map((pos) => (
          <Box key={pos} label={pos} />
        ))}
      </div>

      {/* Level 3 */}
      <div className="flex justify-center flex-wrap gap-6">
        {positions.level3.map((pos) => (
          <Box key={pos} label={pos} />
        ))}
      </div>
    </div>
  );
};

export default CompanyStructure;


import React from "react";

interface FeatureRowProps {
  feature: string;
  free: string;
  premium: string;
  professional: string;
}

const FeatureRow = ({
  feature,
  free,
  premium,
  professional
}: FeatureRowProps) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-4 px-6 text-sm font-medium text-gray-900">{feature}</td>
      <td className="py-4 px-6 text-sm text-gray-500 text-center">{free}</td>
      <td className="py-4 px-6 text-sm text-purple-700 font-medium text-center bg-purple-50">{premium}</td>
      <td className="py-4 px-6 text-sm text-gray-500 text-center">{professional}</td>
    </tr>
  );
};

export default FeatureRow;

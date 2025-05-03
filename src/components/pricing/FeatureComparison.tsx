
import React from "react";
import FeatureRow from "./FeatureRow";

const FeatureComparison = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left font-medium text-gray-500">Features</th>
                <th className="py-4 px-6 text-center font-medium text-gray-500">Free</th>
                <th className="py-4 px-6 text-center font-medium text-purple-700 bg-purple-50">Premium</th>
                <th className="py-4 px-6 text-center font-medium text-gray-500">Professional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <FeatureRow 
                feature="Invitations per month" 
                free="3" 
                premium="Unlimited" 
                professional="Unlimited" 
              />
              <FeatureRow 
                feature="Templates" 
                free="Basic only" 
                premium="All templates" 
                professional="All templates" 
              />
              <FeatureRow 
                feature="Customization" 
                free="Limited" 
                premium="Full" 
                professional="Full + Brand colors" 
              />
              <FeatureRow 
                feature="Print-ready files" 
                free="No" 
                premium="Yes" 
                professional="Yes" 
              />
              <FeatureRow 
                feature="QR Code generation" 
                free="No" 
                premium="Yes" 
                professional="Yes" 
              />
              <FeatureRow 
                feature="Analytics" 
                free="No" 
                premium="Basic" 
                professional="Advanced" 
              />
              <FeatureRow 
                feature="Team access" 
                free="No" 
                premium="No" 
                professional="Up to 5 users" 
              />
              <FeatureRow 
                feature="Support" 
                free="Community" 
                premium="Email" 
                professional="Priority" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;

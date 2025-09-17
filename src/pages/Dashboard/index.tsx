// DashboardPage.tsx
import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow'>Card 1</div>
        <div className='bg-white p-6 rounded-lg shadow'>Card 2</div>
        <div className='bg-white p-6 rounded-lg shadow'>Card 3</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

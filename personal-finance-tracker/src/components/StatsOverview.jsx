import { ArrowDown, ArrowUp, PiggyBank } from 'lucide-react';
import DoughnutChart from './Chart';

const StatCard = ({ title, amount, icon, color }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
    <div className={`p-3 rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{amount}</p>
    </div>
  </div>
);


const StatsOverview = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700">Statistics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Cards */}
        <div className="md:col-span-2 xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard 
            title="Total Income" 
            amount="$5,230" 
            icon={<ArrowUp className="w-6 h-6 text-green-700" />}
            color="bg-green-100"
          />
          <StatCard 
            title="Total Expenses" 
            amount="$2,750" 
            icon={<ArrowDown className="w-6 h-6 text-red-700" />}
            color="bg-red-100"
          />
          <StatCard 
            title="Savings" 
            amount="$2,480" 
            icon={<PiggyBank className="w-6 h-6 text-blue-700" />}
            color="bg-blue-100"
          />
        </div>
        
        {/* Chart */}
        <div className="md:col-span-2 xl:col-span-2 bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
            <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
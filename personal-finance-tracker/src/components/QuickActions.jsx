import { PlusCircle } from 'lucide-react';

const QuickActions = ({ onAddTransaction }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
      {/* Action Buttons */}
      <div className="flex gap-4 w-full sm:w-auto">
        <button onClick={onAddTransaction} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
          <PlusCircle className="w-5 h-5" />
          Add Income
        </button>
        <button onClick={onAddTransaction} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
          <PlusCircle className="w-5 h-5" />
          Add Expense
        </button>
      </div>

      {/* Time Filters */}
      <div className="flex gap-2 text-sm text-gray-600">
        <button className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">Today</button>
        <button className="px-3 py-1 rounded-full hover:bg-gray-100">Week</button>
        <button className="px-3 py-1 rounded-full hover:bg-gray-100">Month</button>
        <button className="px-3 py-1 rounded-full hover:bg-gray-100">Year</button>
      </div>
    </div>
  );
};

export default QuickActions;
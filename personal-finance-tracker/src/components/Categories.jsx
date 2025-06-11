import { Utensils, Car, Home, Bill, HeartPulse } from 'lucide-react';

const categories = [
  { name: 'Food', spent: 450, budget: 800, icon: <Utensils className="w-6 h-6 text-orange-500" /> },
  { name: 'Transport', spent: 220, budget: 300, icon: <Car className="w-6 h-6 text-blue-500" /> },
  { name: 'Housing', spent: 1200, budget: 1200, icon: <Home className="w-6 h-6 text-purple-500" /> },
  { name: 'Bills', spent: 310, budget: 400, icon: <Bill className="w-6 h-6 text-green-500" /> },
  { name: 'Health', spent: 80, budget: 150, icon: <HeartPulse className="w-6 h-6 text-red-500" /> },
];

const CategoryItem = ({ name, spent, budget, icon }) => {
  const percentage = (spent / budget) * 100;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
        <p className="font-bold text-gray-800">${spent}</p>
      </div>
      <p className="text-md font-semibold text-gray-700">{name}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div 
          className="bg-indigo-600 h-2 rounded-full" 
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{percentage.toFixed(0)}% of ${budget} used</p>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4 h-full">
      <h2 className="text-xl font-semibold text-gray-700">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <CategoryItem key={cat.name} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
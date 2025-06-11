import { ShoppingCart, Utensils, Car, Filter, ArrowUpDown } from 'lucide-react';

const transactions = [
  { id: 1, type: 'expense', icon: <ShoppingCart className="w-5 h-5 text-yellow-600"/>, name: 'Amazon Shopping', category: 'Shopping', date: '2023-10-26', amount: -78.50 },
  { id: 2, type: 'income', icon: <Utensils className="w-5 h-5 text-green-600"/>, name: 'Freelance Project', category: 'Work', date: '2023-10-25', amount: 1200.00 },
  { id: 3, type: 'expense', icon: <Utensils className="w-5 h-5 text-orange-600"/>, name: 'Lunch with team', category: 'Food', date: '2023-10-24', amount: -45.20 },
  { id: 4, type: 'expense', icon: <Car className="w-5 h-5 text-blue-600"/>, name: 'Gasoline', category: 'Transport', date: '2023-10-23', amount: -55.00 },
];

const TransactionItem = ({ icon, name, category, date, amount, type }) => (
  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
    <div className="flex items-center gap-4">
      <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{category} • {date}</p>
      </div>
    </div>
    <p className={`font-bold ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
      {type === 'income' ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`}
    </p>
  </div>
);

const RecentTransactions = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Recent Transactions</h2>
        <div className="flex gap-2">
            <button className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md"><ArrowUpDown className="w-5 h-5" /></button>
            <button className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md"><Filter className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="space-y-2">
        {transactions.map(tx => (
          <TransactionItem key={tx.id} {...tx} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
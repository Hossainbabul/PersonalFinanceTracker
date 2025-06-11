import { UserCircle, Wallet } from 'lucide-react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Personal Finance Tracker
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Total Balance Card (Simplified for Header) */}
          <div className="hidden md:flex items-center gap-3 bg-indigo-50 p-3 rounded-lg">
            <div className="bg-indigo-100 p-2 rounded-full">
              <Wallet className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="font-bold text-lg text-gray-900">$12,450.75</p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-500 hidden sm:block">{currentDate}</p>
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <UserCircle className="w-8 h-8 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
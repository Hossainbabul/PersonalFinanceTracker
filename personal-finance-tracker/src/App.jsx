import { useState } from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import StatsOverview from './components/StatsOverview';
import RecentTransactions from './components/RecentTransactions';
import Categories from './components/Categories';
import AddTransactionModal from './components/AddTransactionModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left/Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <QuickActions onAddTransaction={() => setIsModalOpen(true)} />
            <StatsOverview />
            <RecentTransactions />
          </div>
          
          {/* Right/Sidebar Column */}
          <div className="lg:col-span-1">
            <Categories />
          </div>
        </div>
      </main>

      {/* The modal is rendered here but only visible when isModalOpen is true */}
      <AddTransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
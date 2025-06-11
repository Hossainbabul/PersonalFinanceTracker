import { X, Paperclip } from 'lucide-react';

const AddTransactionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md m-4 p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Transaction</h2>

        <form>
          <div className="space-y-4">
            {/* Transaction Type */}
            <div className="flex gap-4">
              <label className="flex-1">
                <input type="radio" name="type" value="income" className="sr-only" defaultChecked />
                <div className="p-3 text-center border-2 border-green-500 bg-green-50 text-green-700 rounded-lg cursor-pointer font-semibold">Income</div>
              </label>
              <label className="flex-1">
                <input type="radio" name="type" value="expense" className="sr-only" />
                <div className="p-3 text-center border-2 border-gray-200 text-gray-500 rounded-lg cursor-pointer font-semibold">Expense</div>
              </label>
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
              <input type="number" id="amount" name="amount" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="0.00" />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select id="category" name="category" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Work</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" id="date" name="date" defaultValue={new Date().toISOString().substring(0, 10)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows="2" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Coffee with friends"></textarea>
            </div>
            
            {/* Attachment */}
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Receipt</label>
                 <label htmlFor="attachment" className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-indigo-500">
                    <Paperclip className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">Attach a file</span>
                 </label>
                 <input type="file" id="attachment" name="attachment" className="sr-only" />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">Add Transaction</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;git add .
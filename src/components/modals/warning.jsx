import { Button } from "../../common";

const WarningModal = ({ isLoading, onSubmit, onClose }) => {
  return (
    <div className="p-6">
      <h2 className="mb-4 text-3xl font-bold text-center text-red-600">
        ⚠️ Warning
      </h2>
      <p className="mb-6 text-lg text-center text-gray-800">
        Are you sure you want to proceed? This action cannot be undone.
      </p>
      <div className="flex justify-center space-x-4">
        <Button
          className="px-4 py-2 font-semibold text-gray-800 transition duration-200 bg-gray-300 rounded-lg shadow-lg hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          className={`px-4 py-2 text-white rounded-lg font-semibold transition duration-200 shadow-lg ${
            isLoading ? "bg-gray-500" : "bg-red-600 hover:bg-red-700"
          }`}
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Proceed"}
        </Button>
      </div>
    </div>
  );
};

export default WarningModal;

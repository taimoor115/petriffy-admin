import "./index.css";

const Spinner = ({ loadingStates = [] }) => {
  // Filter to only show loading states that are active
  const activeLoadingStates = loadingStates.filter((state) => state.isLoading);

  // If nothing is loading, don't render the spinner
  if (activeLoadingStates.length === 0) return null;

  return (
    <div className="spinner-overlay">
      <div className="loader"></div>
      <div className="spinner-messages">
        {activeLoadingStates.map((state, index) => (
          <div key={index} className="spinner-message">
            {state.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;

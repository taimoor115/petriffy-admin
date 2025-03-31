import "./index.css";

const Spinner = ({ loadingStates = [] }) => {
  const activeLoadingStates = loadingStates.filter((state) => state.isLoading);

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

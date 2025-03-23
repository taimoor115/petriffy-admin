import { Field, ErrorMessage } from "formik";

const InputField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  className,
  showPasswordToggle = false,
  onTogglePasswordVisibility,
  isPasswordVisible,
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-custom_black"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Field
          id={name}
          name={name}
          type={showPasswordToggle && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          className={`w-full px-3 py-2 placeholder:text-[#929292] border rounded-[10.45px] focus:border-transparent border-custom_grey focus:outline-none focus:ring-1 focus:ring-custom-orange ${className}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePasswordVisibility}
            className="absolute right-2 top-2"
          >
            {isPasswordVisible ? (
              <svg /* SVG for eye open */>{/* SVG content for eye open */}</svg>
            ) : (
              <svg /* SVG for eye closed */>
                {/* SVG content for eye closed */}
              </svg>
            )}
          </button>
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-xs text-red-500"
      />
    </div>
  );
};

export default InputField;

import React from 'react';

const ErrorMessage: React.FC = () => {
  return (
    <section aria-labelledby="error-message" role="alert">
      <h1 id="error-message" className="text-center text-xl font-bold">
        {/* Use descriptive text for the error message */}
        An error occurred. Please try again.
        <span aria-label="pray">🙏🏻</span>
      </h1>
      <p className="text-center text-gray-600">We apologize for the inconvenience.</p>
    </section>
  );
};

export default ErrorMessage;

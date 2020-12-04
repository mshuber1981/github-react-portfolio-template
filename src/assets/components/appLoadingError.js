export const AppError = ({ theme, error }) => {
  const newTheme = `${theme} app-error d-flex flex-column min-vh-100 justify-content-center align-items-center`;

  return (
    <div className={newTheme}>
      <div className="container text-center">
        <h1 className="">Sorry, something went wrong.</h1>
        <p className="lead">
          <span id="error">Error: </span> {error}
        </p>
      </div>
    </div>
  );
};

export const AppLoading = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center align-items-center`;

  return (
    <div className={newTheme}>
      <h1 className="loading">Loading...</h1>
    </div>
  );
};

export const ProjectsError = ({ theme, error }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center align-items-center`;

  return (
    <section id="projects" className={newTheme}>
      <div className="container text-center">
        <h2>Projects</h2>
        <hr />
        <h3 className="mt-4">Sorry, something went wrong.</h3>
        <p className="lead">
          <span id="error">Error: </span> {error}
        </p>
      </div>
    </section>
  );
};

export const ProjectsLoading = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center align-items-center`;

  return (
    <section id="projects" className={newTheme}>
      <div className="container text-center">
        <h2>Projects</h2>
        <hr />
      </div>
      <h1 className="loading mt-4">Loading...</h1>
    </section>
  );
};

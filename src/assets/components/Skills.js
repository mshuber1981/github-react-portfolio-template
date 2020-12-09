import { skillData } from "../../data";

const Skills = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <section id="skills" className={newTheme}>
      <div className="container text-center">
        <h2>Skills</h2>
        <hr />
        <div className="row row-cols-3">
          {skillData.map((skills) => {
            return (
              <figure className="col" key={skills.id}>
                {skills.skill}
                <figcaption>{skills.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

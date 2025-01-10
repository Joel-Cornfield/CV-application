import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default function FormSide({
  info,
  background,
  experience,
  handleInfoChange,
  handleBackgroundChange,
  handleExperienceChange,
  addNewBackground,
  addNewExperience,
  handleCloseBtn,
}) {
  return (
    <nav>
      <div>
        <div className="nav_div_header">
          <img
            className="div_header_logo"
            src="https://rmathr.github.io/cv-project/ef5bc41af8e0851bed49.png"
            alt="Form Header"
            style={{ width: "2.4rem" }}
          />
          <p>Personal Details</p>
        </div>
        <GeneralInfo info={info} handleInfoChange={handleInfoChange} />
      </div>

      <div>
        <div className="nav_div_header">
          <img
            className="div_header_logo"
            src="https://rmathr.github.io/cv-project/462edf5f6d5ba03edebc.png"
            alt="Form Header"
            style={{ width: "2.4rem" }}
          />
          <p>Education</p>
        </div>
        <Education
          background={background}
          handleBackgroundChange={handleBackgroundChange}
          handleCloseBtn={handleCloseBtn}
        />

        <button className="add_button" type="button" onClick={addNewBackground}>
          + Education
        </button>
      </div>

      <div>
        <div className="nav_div_header">
          <img
            className="div_header_logo"
            src="https://rmathr.github.io/cv-project/b5791876cc5188ae758a.png"
            alt="Form Header"
            style={{ width: "2.4rem" }}
          />
          <p>Experience</p>
        </div>
        <Experience
          experience={experience}
          handleExperienceChange={handleExperienceChange}
          handleCloseBtn={handleCloseBtn}
        />
        <button className="add_button" type="button" onClick={addNewExperience}>
          + Experience
        </button>
      </div>
    </nav>
  );
}
function Experience({ experience, handleExperienceChange, handleCloseBtn }) {
  return (
    <form>
      {experience.map((exp) => (
        <div key={exp.id}>
          <label htmlFor="role">Job Title</label>
          <input
            type="text"
            name="role"
            value={experience.role}
            onChange={(e) => handleExperienceChange(e, exp.id)}
            placeholder="e.g., Software Engineer"
            title="Enter your job title, e.g., Software Engineer"
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) => handleExperienceChange(e, exp.id)}
            placeholder="e.g., Microsoft"
            title="Enter the company name, e.g., Microsoft"
          />

          <label htmlFor="date1">Start Year</label>
          <input
            type="number"
            name="date1"
            value={experience.date1}
            onChange={(e) => handleExperienceChange(e, exp.id)}
            placeholder="e.g., 2022"
            title="Enter the start year, e.g., 2022"
          />

          <label htmlFor="date2">End Year</label>
          <input
            type="number"
            name="date2"
            value={experience.date2}
            onChange={(e) => handleExperienceChange(e, exp.id)}
            placeholder="e.g., 2023"
            title="Enter the end year, e.g., 2023"
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={experience.city}
            onChange={(e) => handleExperienceChange(e, exp.id)}
            placeholder="e.g., Perth"
            title="Enter the city, e.g., Toronto"
          />

          <label htmlFor="accomplishments">Description</label>
          <textarea
            name="accomplishments"
            value={experience.accomplishments}
            onChange={(e) => handleExperienceChange(e, exp.id)}
            placeholder="Describe your responsibilities"
            title="Describe your responsibilities"
          />

          <button
            type="button"
            className="close-button"
            onClick={(e) => handleCloseBtn(e, exp.id, "experience")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M3 6h18v2H3V6zm2 3h14v13H5V9zm3 2v9h2v-9H8zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z" />
            </svg>
          </button>
        </div>
      ))}
    </form>
  );
}

export default Experience;
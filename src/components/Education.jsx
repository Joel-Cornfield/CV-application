const Education = ({
    background,
    handleBackgroundChange,
    handleCloseBtn,
  }) => {
    return (
        <form>
        {background.map((bg) => (
            <div key={bg.id}>
            <label htmlFor="title">Degree</label>
            <input
                name="title"
                value={bg.title}
                onChange={(e) => handleBackgroundChange(e, bg.id)}
                placeholder="e.g., Bachelor's, Master's"
                title="Enter the name of the institution, e.g., University of Regina"
            />
            <label htmlFor="title">Institution</label>
            <input
                name="institution"
                value={bg.institution}
                onChange={(e) => handleBackgroundChange(e, bg.id)}
                placeholder="e.g., University of Western Australia"
            />
            <label htmlFor="date1">Start Year</label>
            <input
                name="date1"
                value={bg.date1}
                onChange={(e) => handleBackgroundChange(e, bg.id)}
                placeholder="e.g., 2020"
                title="Enter the start year, e.g., 2020"
            />
            <label htmlFor="date2">End Year</label>
            <input
                name="date2"
                value={bg.date2}
                onChange={(e) => handleBackgroundChange(e, bg.id)}
                placeholder="e.g., 2024"
                title="Enter the end year, e.g., 2024"
            />
            <button
                type="button"
                className="close-button"
                onClick={(e) => handleCloseBtn(e, bg.id, "background")}
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
};
  
export default Education;
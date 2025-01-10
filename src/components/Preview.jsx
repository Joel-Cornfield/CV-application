import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Preview({
  info,
  background,
  experience,
}) {
  const hasEmail = info.userEmail;
  const hasPhone = info.userPhone;
  const hasEducation = background.some(
    (item) => item.title || item.institution || (item.date1 && item.date2)
  );

  const hasExperience = experience.some(
    (item) =>
      item.role ||
      item.company ||
      item.city ||
      (item.accomplishments && item.accomplishments.length > 0) ||
      (item.date1 && item.date2)
  );

  const downloadPDF = async () => {
    const previewContainer = document.querySelector(".preview-container");
    const downloadButton = document.querySelector(".download-btn");
  
    // Temporarily hide the button
    downloadButton.style.display = "none";
  
    try {
      const canvas = await html2canvas(previewContainer, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
  
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height], // Match canvas size
      });
  
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("CV_Preview.pdf");
    } finally {
      // Show the button again
      downloadButton.style.display = "block";
    }
  };  

  return (
    <div className="preview-container" style={{ padding: "20px", background: "#fff" }}>
      <section>
        <h1>{info.userName}</h1>
        <div>
          {hasEmail && <h3>Email: {info.userEmail}</h3>}
          {hasPhone && <h3>Phone: {info.userPhone}</h3>}
        </div>
      </section>
      <section>
        {hasEducation && (
          <>
            <h2>EDUCATION</h2>
            {background.map((element) => (
              <div key={element.id} className="education_divs">
                <p>{element.title}</p>
                {element.date1 && element.date2 && (
                  <p className="dates">
                    {element.date1} – {element.date2}
                  </p>
                )}
                <p className="institution">{element.institution}</p>
              </div>
            ))}
          </>
        )}
      </section>
      <section>
        {hasExperience && (
          <>
            <h2>WORK EXPERIENCE</h2>
            {experience.map((element) => (
              <div key={element.id} className="experience_divs">
                <p>{element.role}</p>
                <p className="company">
                  {element.company}
                  {element.city && `, ${element.city}`}
                </p>

                {element.date1 && element.date2 && (
                  <p className="dates">
                    {element.date1} – {element.date2}
                  </p>
                )}
                <ul className="accomplishments">
                  {element.accomplishments.map((accomplishment) => (
                    <li key={crypto.randomUUID()}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </section>

      {/* Button to download PDF */}
      <button className="download-btn" onClick={downloadPDF}>
      </button>
    </div>
  );
}

export default Preview;

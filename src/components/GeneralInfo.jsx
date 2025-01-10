const GeneralInfo = ({ info, handleInfoChange }) => {
    return (
      <form>
        <div>
          <label htmlFor="userName">Full Name</label>
          <input
            type="text"
            name="userName"
            value={info.userName}
            onChange={handleInfoChange}
            placeholder="e.g., Jane Smith"
            title="Enter your full name, e.g., Jane Smith"
          />
  
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            name="userEmail"
            value={info.userEmail}
            onChange={handleInfoChange}
            placeholder="e.g., name@example.com"
            title="Enter your email address, e.g., name@example.com"
          />
  
          <label htmlFor="userPhone">Phone Number</label>
          <input
            type="tel"
            name="userPhone"
            value={info.userPhone}
            onChange={handleInfoChange}
            placeholder="e.g., (+61) 040-123-129"
            title="Enter your phone number, e.g., (+61) 040-123-129"
          />
        </div>
      </form>
    );
  };
  
  export default GeneralInfo;
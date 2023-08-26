export default function EducationInfo() {
    const subjectList = ["B.E", "M.E", "M.Tech", "B.Tech", "BSc", "MSc", "MBA", "BCA", "MCA"];
    return (
        <>
            <label htmlFor="university">University Name:</label>
            <input className="col-2 ml-2" type="text" name="university" id="university"/><br/>
            <label htmlFor="subject">Select the course:</label>
            <select className="form-select ml-2" name="unicourse" id="subject">
                {subjectList.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
            </select><br/>
            <label htmlFor="startDate">Start Date:</label>
            <input className="col-2 ml-2" type="date" id="startDate" name="uniStartDate"/><br/>
            <label htmlFor="endDate">End Date:</label>
            <input className="col-2 ml-2" type="date" id="endDate" name="uniEndDate"/><br/>
        </>

    )
}
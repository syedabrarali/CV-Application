export default function ExperienceForm() {
    return (
        <>
            <label htmlFor="companyName">Current Company Name:</label>
            <input className="ml-2" id="companyName" name="companyName" type="text"/><br/>
            <label htmlFor="position">Title:</label>
            <input className="ml-2" id="position" name="position" type="text"/><br/>
            <label htmlFor="jobdesc">Tell us about your job responsibilities?</label><br/>
            <textarea id="jobdesc" cols={40} rows={4} name="jobdesc">
                Write your job role and responsibilities here...
            </textarea><br/>
            <label htmlFor="companystartDate">Start Date:</label>
            <input className="ml-1" type="date" id="companystartDate" name="companyStartDate"/><br/>
            <label htmlFor="companyendDate">End Date:</label>
            <input className="ml-2" type="date" id="companyendDate" name="companyEndDate"/><br/>
        </>
    )
}
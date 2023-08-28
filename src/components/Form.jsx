import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import Expereince from "./Experience"
import '../styles/Form.css'

export default function Form() {

    return (
        <>
          <form className="fullform">
            <div className="container">
                <div className="generalinfo-div form-control mt-5">
                        <fieldset className="generalinfo">
                            <legend><h3>General Info:</h3></legend>
                            <GeneralInfo />
                        </fieldset>
                </div>
                <div className="educationalinfo-div form-control">
                    <fieldset className="educationalinfo">
                        <legend><h3>Educational Info:</h3></legend>
                        <EducationInfo />
                    </fieldset>
                </div>
                <div className="exp-div form-control">
                    <fieldset className="exp">
                        <legend><h3>Tell us about your work experience:</h3></legend>
                        <Expereince />
                    </fieldset>
                </div>
                <button className="btn btn-primary btn-lg col-2"type="submit">Submit</button>
            </div>
          </form>
        </>
    )
}
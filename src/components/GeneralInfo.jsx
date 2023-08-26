export default function GeneralInfo() {

    return (
            <>
                <label htmlFor="name">Name:</label>
                <input className="ml-2 col-2"type="text" name="name" id="name"/><br/>
                <label htmlFor="email">Email:</label>
                <input className="ml-3 col-2" type="email" name="email" id="email"/><br/>
                <label htmlFor="phoneno">Ph No:</label>
                <input className="ml-2 col-2" type="number" name="phnumber" id="phoneno"/><br/>

            </>

    )
}
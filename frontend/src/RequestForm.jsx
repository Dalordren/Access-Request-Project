import "./RequestForm.css";
const RequestForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Request Submitted!");
    var form = document.getElementById("requestform");
    form.reset();
    return false;
  };

  return (
    <div id="requestformcontainer">
      <h1>Access Request Form</h1>
      <div>
        <form onSubmit={onSubmit} id="requestform">
          <div>
            <h3>Requestor Information</h3>
          </div>
          <div id="requestorinfo" className="section">
            <label htmlFor="date" className="requestor">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="datebox requestor"
            />
            <label htmlFor="requestno" className="requestor">
              Request Number:
            </label>
            <input
              type="text"
              id="requestno"
              name="requestno"
              required
              maxLength="80"
              className="textboxes requestor"
            />
            <label htmlFor="requestorfname" className="requestor">
              Requestor First Name:
            </label>
            <input
              type="text"
              id="requestorfname"
              name="requestorfname"
              required
              maxLength="80"
              className="textboxes requestor requestorname"
            />
            <label htmlFor="requestorlname" className="requestor">
              Requestor Last Name:
            </label>
            <input
              type="text"
              id="requestorlname"
              name="requestorlname"
              required
              maxLength="80"
              className="textboxes requestor requestorname"
            />
            <label htmlFor="email" className="requestor">
              Email Address:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              maxLength="80"
              className="textboxes requestor"
            />
            <label htmlFor="contactno" className="requestor">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactno"
              name="contactno"
              required
              maxLength="80"
              className="textboxes requestor"
            />
          </div>
          <div>
            <h3>Employee Information</h3>
          </div>
          <div id="employeeinfo" className="section">
            <label htmlFor="empNo">Employee Number: </label>
            <input
              type="text"
              id="empNo"
              name="empNo"
              required
              maxLength="80"
              className="textboxes"
            />
            <label htmlFor="jobrole">Job Role: </label>
            <input
              type="text"
              id="jobrole"
              name="jobrole"
              required
              maxLength="80"
              className="textboxes"
            />
            <label htmlFor="firstname">First Name: </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              maxLength="80"
              className="textboxes"
            />
            <label htmlFor="lastname">Last Name: </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              maxLength="80"
              className="textboxes"
            />
          </div>
          <div>
            <h3>System Access Type</h3>
          </div>
          <div id="systeminfo" className="section">
            <label htmlFor="lan">LAN: </label>
            <input type="checkbox" id="lan" name="lan" className="checkboxes" />
            <label htmlFor="dccs">DCCS Access: </label>
            <input
              type="checkbox"
              id="dccs"
              name="dccs"
              className="checkboxes"
            />
            <label htmlFor="yardsmart">Yardsmart:</label>
            <input
              type="checkbox"
              id="yardsmart"
              name="yardsmart"
              className="checkboxes"
            />
            <label htmlFor="ims">IMS: </label>
            <input type="checkbox" id="ims" name="ims" className="checkboxes" />
            <label htmlFor="imi">IMI: </label>
            <input type="checkbox" id="imi" name="imi" className="checkboxes" />
            <label htmlFor="aom">AOM: </label>
            <input type="checkbox" id="aom" name="aom" className="checkboxes" />
            <label htmlFor="gdrive">Group Drive:</label>
            <input
              type="checkbox"
              id="gdrive"
              name="gdrive"
              className="checkboxes"
            />
            <label htmlFor="dlist">Email Distribution List: </label>
            <input
              type="checkbox"
              id="dlist"
              name="dlist"
              className="checkboxes"
            />
            <label htmlFor="tds">TDS: </label>
            <input type="checkbox" id="tds" name="tds" className="checkboxes" />
            <label htmlFor="jda">JDA: </label>
            <input type="checkbox" id="jda" name="jda" className="checkboxes" />
            <label htmlFor="mytr">MyTR: </label>
            <input
              type="checkbox"
              id="mytr"
              name="mytr"
              className="checkboxes"
            />
            <label htmlFor="vms">VMS: </label>
            <input type="checkbox" id="vms" name="vms" className="checkboxes" />
          </div>
          <div>
            <h3>Other Information:</h3>
          </div>
          <div id="otherinfo" className="section">
            <label htmlFor="gdrivedetails">Group Drive Details: </label>
            <textarea
              id="gdrivedetails"
              name="gdrivedetails"
              required
              maxLength="240"
              className="textboxes otherinfo"
            />
            <label htmlFor="dlistdetailed">Distribution List Details: </label>
            <textarea
              id="dlistdetailed"
              name="dlistdetailed"
              required
              maxLength="240"
              className="textboxes otherinfo"
            />
            <label htmlFor="dccsdetails">DCCS Access Details: </label>
            <textarea
              id="dccsdetails"
              name="dccsdetails"
              required
              maxLength="240"
              className="textboxes otherinfo"
            />
            <label htmlFor="yardsmartdetails">Yardsmart Details: </label>
            <textarea
              id="yardsmartdetails"
              name="yardsmartdetails"
              required
              maxLength="80"
              className="textboxes otherinfo"
            />
            <label htmlFor="imsdetails">IMS Details: </label>
            <textarea
              id="imsdetails"
              name="imsdetails"
              required
              maxLength="80"
              className="textboxes otherinfo"
            />
            <label htmlFor="otherdetails">Others: </label>
            <textarea
              id="otherdetails"
              name="otherdetails"
              required
              maxLength="80"
              className="textboxes otherinfo"
            />
          </div>
          <div className="formbuttons">
            <button type="reset" value="Reset" id="btnreset">
              Reset
            </button>
            <button type="submit" value="Submit" id="btnsubmit">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RequestForm;

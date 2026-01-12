const RequestForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Request Submitted!");
    var form = document.getElementById("requestform");
    form.reset();
    return false;
  };

  return (
    <div>
      <h1>Access Request Form</h1>
      <div>
        <form onSubmit={onSubmit} id="requestform">
          <div>
            <h3>Requestor Information</h3>
          </div>
          <div>
            <label htmlFor="date">Date: </label>
            <input type="date" id="date" name="date" required class="datebox" />
            <br />
            <label htmlFor="requestno">Request Number: </label>
            <input
              type="text"
              id="requestno"
              name="requestno"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="requestorfname">Requestor First Name: </label>
            <input
              type="text"
              id="requestorfname"
              name="requestorfname"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="requestorlname">Requestor Last Name: </label>
            <input
              type="text"
              id="requestorlname"
              name="requestorlname"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="email">Email Address: </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="contactno">Contact Number: </label>
            <input
              type="text"
              id="contactno"
              name="contactno"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
          </div>
          <div>
            <h3>Employee Information</h3>
          </div>
          <div>
            <label htmlFor="empNo">Employee Number: </label>
            <input
              type="text"
              id="empNo"
              name="empNo"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="jobrole">Job Role: </label>
            <input
              type="text"
              id="jobrole"
              name="jobrole"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="firstname">First Name: </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
            <label htmlFor="lastname">Last Name: </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              maxlength="80"
              class="textboxes"
            />
            <br />
          </div>
          <div>
            <h3>System Access Type</h3>
          </div>
          <div>
            <label htmlFor="lan">LAN: </label>
            <input type="checkbox" id="lan" name="lan" class="checkboxes" />
            <br />
            <label htmlFor="dccs">DCCS Access: </label>
            <input type="checkbox" id="dccs" name="dccs" class="checkboxes" />
            <br />
            <label htmlFor="yardsmart">Yardsmart:</label>
            <input
              type="checkbox"
              id="yardsmart"
              name="yardsmart"
              class="checkboxes"
            />
            <br />
            <label htmlFor="ims">IMS: </label>
            <input type="checkbox" id="ims" name="ims" class="checkboxes" />
            <br />
            <label htmlFor="imi">IMI: </label>
            <input type="checkbox" id="imi" name="imi" class="checkboxes" />
            <br />
            <label htmlFor="aom">AOM: </label>
            <input type="checkbox" id="aom" name="aom" class="checkboxes" />
            <br />
            <label htmlFor="gdrive">Group Drive:</label>
            <input
              type="checkbox"
              id="gdrive"
              name="gdrive"
              class="checkboxes"
            />
            <br />
            <label htmlFor="dlist">Email Distribution List: </label>
            <input type="checkbox" id="dlist" name="dlist" class="checkboxes" />
            <br />
            <label htmlFor="tds">TDS: </label>
            <input type="checkbox" id="tds" name="tds" class="checkboxes" />
            <br />
            <label htmlFor="jda">JDA: </label>
            <input type="checkbox" id="jda" name="jda" class="checkboxes" />
            <br />
            <label htmlFor="mytr">MyTR: </label>
            <input type="checkbox" id="mytr" name="mytr" class="checkboxes" />
            <br />
            <label htmlFor="vms">VMS: </label>
            <input type="checkbox" id="vms" name="vms" class="checkboxes" />
            <br />
          </div>
          <div>
            <h3>Other Information:</h3>
          </div>
          <div>
            <div>
              <label htmlFor="gdrivedetails">Group Drive Details: </label>
              <input
                type="text"
                id="gdrivedetails"
                name="gdrivedetails"
                required
                maxlength="240"
                class="textboxes"
              />
              <br />
              <label htmlFor="dlistdetailed">Distribution List Details: </label>
              <input
                type="text"
                id="dlistdetailed"
                name="dlistdetailed"
                required
                maxlength="240"
                class="textboxes"
              />
              <br />
              <label htmlFor="dccsdetails">DCCS Access Details: </label>
              <input
                type="text"
                id="dccsdetails"
                name="dccsdetails"
                required
                maxlength="240"
                class="textboxes"
              />
              <br />
              <label htmlFor="yardsmartdetails">Yardsmart Details: </label>
              <input
                type="text"
                id="yardsmartdetails"
                name="yardsmartdetails"
                required
                maxlength="80"
                class="textboxes"
              />
              <br />
              <label htmlFor="imsdetails">IMS Details: </label>
              <input
                type="text"
                id="imsdetails"
                name="imsdetails"
                required
                maxlength="80"
                class="textboxes"
              />
              <br />
              <label htmlFor="otherdetails">Others: </label>
              <input
                type="text"
                id="otherdetails"
                name="otherdetails"
                required
                maxlength="80"
                class="textboxes"
              />
              <br />
            </div>
          </div>
          <div>
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

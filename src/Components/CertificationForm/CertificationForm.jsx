import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CertificationForm() {
  const certificates = [];

  const [certificate, setCertificate] = useState({
    name: "",
    institution: "",
    issueDate: "",
    expiryDate: "",
    credentialId: "",
  });

  const handleInputs = (e) => {
    setCertificate({ ...certificate, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(certificate);
    certificates.push(certificate);
    console.log(certificates);
  };

  return (
    <div className="">
      <h2 className="text-center font-bold text-lg">
        Add license or certification
      </h2>
      <form action="" className=" flex flex-col gap-5 w-[90vw] mx-auto my-4">
        <TextField
          id="outlined-basic"
          label="Name*"
          variant="outlined"
          name="name"
          onChange={handleInputs}
        />
        <TextField
          id="outlined-basic"
          label="Issuing Authority*"
          variant="outlined"
          name="institution"
          onChange={handleInputs}
        />
        <div className=" flex flex-col gap-1">
          <label htmlFor="expire-date" className=" text-[15px] text-slate-500">
            Issue Date
          </label>
          <input
            type="date"
            className=" border border-gray-300 p-3 rounded text-slate-500"
            name="issueDate"
            onChange={handleInputs}
          />
        </div>

        <div className=" flex flex-col gap-1">
          <label htmlFor="expire-date" className=" text-[15px] text-slate-500">
            Expiration Date
          </label>
          <input
            type="date"
            className=" border border-gray-300 p-3 rounded text-slate-500"
            name="expiryDate"
            onChange={handleInputs}
          />
        </div>

        <TextField
          id="outlined-basic"
          label="Credential Id*"
          variant="outlined"
          name="credentialId"
          onChange={handleInputs}
        />

        <Button variant="contained" disableRipple onClick={onsubmit}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default CertificationForm;

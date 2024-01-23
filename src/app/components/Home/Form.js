import React, { useState } from "react";
import { TextField } from "@mui/material";
import Navigation from "./Navigation";
import Footer2 from "../shared/Footer2";
import { Button } from "flowbite-react";

const Form = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const handleSubmitForm = () => {
    console.log(name, phone, email);
  };

  return (
    <div>
      <Navigation />
      <div className="bg-primary w-80  grid gap-3 container mx-auto rounded-lg p-10 mt-12">
        <h1 className="text-secondary font-bold mb-5">
          Course Registration Form
        </h1>
        <TextField
          onChange={(event) => setName(event.target.value)}
          className="w-[250px]"
          label="Name"
        />
        <TextField
          onChange={(event) => setPhone(event.target.value)}
          type="number"
          className="w-[250px]"
          label="Phone"
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          className="w-[250px]"
          label="Email"
        />
        <Button
          onClick={() => handleSubmitForm()}
          style={{
            width: "250px",
            marginTop: "10px",
            padding: "12px",
            backgroundColor: "#355E3B",
            color: "whitesmoke",
            fontWeight: "700",
          }}
        >
          Submit
        </Button>
      </div>

      <Footer2 />
    </div>
  );
};

export default Form;

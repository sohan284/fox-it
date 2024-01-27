import React, { useState } from "react";
import { TextField } from "@mui/material";
import Navigation from "./Navigation";
import Footer2 from "../shared/Footer2";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null)

  const handleSubmitForm = () => {
    if (name, phone, email) {
      const data = {
        name: name,
        phone: phone,
        email: email,
      }
      const url = `http://localhost:3000/users`
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json(),
        console.log('object'),
        setName(''),
        setPhone(''),
        setEmail(''),
        setError(false),
        toast.success('Thanks !!  Our team will contact with you within 24 hour'))
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <Navigation />
      <div className="bg-primary w-80  grid gap-3 container mx-auto rounded-lg p-10 mt-12">
        <h1 className="text-secondary font-bold mb-5">
          Course Registration Form
        </h1>
        <div className="flex flex-col">
          <div>
            <TextField
              onChange={(event) => setName(event.target.value)}
              className="w-[250px] bg-white"
              value={name}
              label="Name"
            />
          </div>
          <div className="my-3">
            <TextField
              onChange={(event) => setPhone(event.target.value)}
              type="number"
              value={phone}
              className="w-[250px]"
              label="Phone"
            />
          </div>
          <div>
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="w-[250px]"
              label="Email"
            />
          </div>
          {error &&
            <p className='text-[tomato] mt-3 text-start font-semibold text-xs'>Please Fillup All field</p>}
        </div>
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

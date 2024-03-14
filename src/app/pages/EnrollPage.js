import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Box,} from '@mui/material';
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const EnrollPage = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmitForm = () => {
    if (name, phone, email) {
      const data = {
        name: name,
        phone: phone,
        email: email,
      }
      const url = `https://foxit-sijq.onrender.com/users`
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json(),
        handleClose(),
        setName(''),
        setPhone(''),
        setEmail(''),
        setError(false),
        toast.success('Thanks !!  Our team will contact with you within 24 hour'))
      navigate('/')
    } else {
      setError(true)
    }
  }

  return (
    <div>
        <Navbar/>
        <div className="flex justify-center my-20 mx-5">
        <Box
          sx={{
            width: 700,
            maxWidth: "100%",
          }}>
          <div className="bg-primary grid gap-3 container mx-auto rounded-lg p-10">
            <h2 className="font-semibold text-secondary text-xl mb-5">Registration Form</h2>
            <div className="flex flex-col">
              <div>
                <TextField
                  onChange={(event) => setName(event.target.value)}
                  className="w-full bg-white"
                  value={name}
                  label="Name"
                />
              </div>
              <div className="my-3">
                <TextField
                  onChange={(event) => setPhone(event.target.value)}
                  type="number"
                  value={phone}
                  className="w-full"
                  label="Phone"
                />
              </div>
              <div>
                <TextField
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  className="w-full"
                  label="Email"
                />
              </div>
              {error &&
                <p className='text-[tomato] mt-3 text-start font-semibold text-xs'>Please Fillup All field</p>}
            </div>
            <Button
              onClick={() => handleSubmitForm()}
              style={{
                width: "",
                marginTop: "10px",
                padding: "12px",
                backgroundColor: "#009790",
                color: "whitesmoke",
                fontWeight: "700",
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
    </div>
    <Footer/>
    </div>
  );
};

export default EnrollPage;
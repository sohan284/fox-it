import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Dialog, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitForm = () => {
    if ((name, phone, email)) {
      const data = {
        name: name,
        phone: phone,
        email: email,
      };
      const url = `https://foxit-sijq.onrender.com/users`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(
        (res) => res.json(),
        handleClose(),
        setName(""),
        setPhone(""),
        setEmail(""),
        setError(false),
        toast.success(
          "Thanks !!  Our team will contact with you within 24 hour"
        ),
        navigate("/home")
      );
      
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center">
      <Button className="enroll-button" onClick={handleOpen}>
        Enroll Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        scroll="body"
      >
        <AppBar
          position="static"
          elevation={0}
          style={{ background: "linear-gradient(to right, #00978ff3, #21bb9af3)", }}
        >
          <Toolbar className="flex w-full justify-between">
            <Typography
              variant="subtitle1"
              style={{ color: "#F0EDCC", fontWeight: "700" }}
            >
              Registration Form
            </Typography>
            <Typography
              className="flex items-center my-10"
              role="button"
              color="inherit"
            >
              <span
                className="hover:bg-secondary hover:rounded-full px-1.5 py-0.5 font-semibold"
                onClick={handleClose}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            width: 700,
            maxWidth: "100%",
          }}
        >
          <div className="bg-primary grid gap-3 container mx-auto rounded-lg p-10">
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
              {error && (
                <p className="text-[tomato] mt-3 text-start font-semibold text-xs">
                  Please Fillup All field
                </p>
              )}
            </div>
            <Button
              onClick={() => handleSubmitForm()}
              style={{
                width: "",
                marginTop: "10px",
                padding: "12px",
                background: "linear-gradient(to right, #00978ff3, #21bb9af3)",
                color: "whitesmoke",
                fontWeight: "700",
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Dialog>
    </div>
  );
};

export default Form;

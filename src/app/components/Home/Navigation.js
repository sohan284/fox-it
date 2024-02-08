import FxBtn from "../shared/FxBtn";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Form from "./Form";
function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (e) => {
    navigate(e);
  };
  return (
    <div className="container mx-auto mt-10">
      <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute right-10 flex items-center sm:hidden">
              {/* <div>
                <button
                  onClick={handleClick}
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                  <MenuItem>
                    <Form />
                  </MenuItem>
                </Menu>
              </div> */}
              <Form />
            </div>
            <div class="flex flex-1 items-center  sm:items-stretch justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img
                  onClick={() => {
                    handleNavigate("/");
                  }}
                  className="lg:h-24 h-20 w-auto"
                  src="https://i.ibb.co/X3RtxjP/logo.png"
                  alt="FoxIt"
                  border="0"
                />
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
              </button>

              <div class="relative ml-3">
                <div>
                  <div class="space-x-4 hidden lg:flex">
                    {/* <FxBtn to={"/"} title={"Home"} />
                    <FxBtn title={"Reg Form"} /> */}
                    <Form />

                  </div>
                </div>
              </div>
              <div className="ml-5">
                {/* <Button
                  onClick={() => {
                    handleNavigate("/login");
                  }}
                  style={{ backgroundColor: "#355E3B", color: "whitesmoke" }}
                >
                  Log In
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;

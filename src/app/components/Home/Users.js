import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer2 from "../shared/Footer2";
import Loader from "../shared/Loader";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://foxit-sijq.onrender.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data), setLoading(false));
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="bg-primary grid gap-3 container mx-auto rounded-lg p-2 m-10 mt-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th className="border-b-2  text-[10px]">Name</th>
              <th className="border-b-2  text-[10px]">Phone</th>
              <th className="border-b-2 text-[10px]">Email</th>
              <th className="border-b-2  text-[10px]">Reason</th>
            </tr>
          </thead>

          {users?.map((user, index) => (
            <tbody>
              <tr className="border-[1px]">
                <td>
                  <div class="flex items-center space-x-3 mt-2 p-1">
                    <div class="">
                      <div class="mask mask-squircle w-4 h-4">
                        <img src={user?.photoURL} alt="" />
                        <img className="w-5"
                          src="https://i.ibb.co/dgBLLmf/Png-Item-1468479.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold text-[10px]">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-[10px]">
                  {user?.phone}
                 
                </td>
                <td className="text-[10px]">{user?.email}</td>
                <td className="text-[10px]">{user?.reason}</td>
                <th></th>
              </tr>
            </tbody>
          ))}
        </table>
        {loading && (
          <div className="flex justify-center">
            <Loader color="#002F31" />
          </div>
        )}
      </div>

     <Footer/>
    </div>
  );
};

export default Users;

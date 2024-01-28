import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer2 from "../shared/Footer2";


const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div>
            <Navigation />
            <div className="bg-primary grid gap-3 container mx-auto rounded-lg p-5 m-10 mt-12">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='border-b-2'>Name</th>
                            <th className='border-b-2 '>Phone</th>
                            <th className='border-b-2'>Email</th>

                        </tr>
                    </thead>

                    {
                        users?.map((user, index) => <tbody>
                            <tr>
                                <td>
                                    <div class="flex items-center space-x-3 mt-5">
                                        <div class="">
                                            <div class="mask mask-squircle w-10 h-10">
                                                <img src={user?.photoURL} alt="" />
                                                <img src="https://i.ibb.co/dgBLLmf/Png-Item-1468479.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.phone}
                                    <br />
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <th>
                                </th>
                            </tr>
                            <br />
                        </tbody>)
                    }
                </table>


            </div>

            <Footer2 />
        </div>
    );
};

export default Users;
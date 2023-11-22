import React, { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../data/axios";
import './PerfilPage.css';
import { useMutation } from "react-query";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../data/authContext";
import Post from "../post/Post";

const PerfilPage = () => {
    const { currentUser } = useContext(AuthContext);
    const userId = parseInt(useLocation().pathname.split("/")[2]);

    const { isLoading, error, data } = useQuery(["user"], () =>
        makeRequest.get("/users/find/" + userId).then((res) => res.data),
        {
            onError: (error) => {
                console.error("Error fetching user data:", error);
            },
        }
    );

    

    if (isLoading) {
        return "Loading";
    }

    if (!data) {
        return <div>User not found</div>;
    }


    return (
        <div className="PerfilPage">
            <div className="profileImage">
                <img src={`../userpics/${data.header_pic}`} alt="Header" />
                <img src={`../userpics/${data.foto_pfp}`} alt="Profile" />
            </div>

            <div className="profile">
                <div className="profileName">
                    <span>{data.name}</span>
                    <span>@{data.name}</span>
                </div>

        
            </div>

            <div>
                <Post userId={userId}/>
            </div>
            
        </div>
    );
};

export default PerfilPage;

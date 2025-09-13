import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import TheatreList from "./TheatreList";
import { useNavigate } from "react-router-dom"

function Partner() {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const tabItems = [
        {
            key: "1",
            label: "Theatres",
            children: <TheatreList />,
        },
    ];

    useEffect(() => {
        if (user !== "null" && user.role !== "partner") {
            navigate("/");
        }
    }, [user]);

    return (
        <div>
            <h1>Partner Page</h1>
            <Tabs items={tabItems} />
        </div>
    );
}

export default Partner;
import React from "react";
import axios from "axios";


//회원가입 API

const signUpDB = (id,password,nickname) => {
    return function (dispatch, getState, {history}) {
        axios({
            method: "post",
            url: "http://localhost:3000/JoinPage",
            data: {
                user_name: string,
                email: "useaar@example.com",
                id: string,
                password: string,
            },
        })
        .then((res) => {
            window.alert(res.data.result);
        })
        .catch((error) => {
            console.log(error);
        })
    };
};

export default UserPage;
import { useState } from "react";
import { Formik, Form } from "formik";
import fetch from "isomorphic-unfetch";
import * as Yup from "yup";
import Router from "next/router";
import Cookie from "js-cookie";
import Input from "../components/Input";
import Field from "../components/Field";
import Label from "../components/Label";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth";
import Link from 'next/link'

export default (props) => {
    const user = useAuth(props.user);

    return (
        <>

            <div className="login-link fixed-top px-3 text-left">
            <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="/contact"><a>Contact</a></Link>
                <p style={{display: "inline", color: "#007bff"}}>{user.name}</p>
              
            </div>
            <style jsx>{`
        .login-link {
          font-size: 20px; !important
          position: relative;
          top: 8px;
          left: 10px;
          font-weight: normal;
          font-family: "Times New Roman", Times, serif;
        }
        
      `}</style>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            user: await AuthService.getUserFromCookie(context.req),
        },
    };
}
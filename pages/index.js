import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth";


const DynamicVideoComponent = dynamic(import('../components/videoAnnotationDemo/VideoAnnotationDemo.js'), {
  ssr: false
})

export default (props) => {
  const user = useAuth(props.user);

  return (
    <>
      {/* <Link href="/login"><button>Login</button>
        </Link> */}
        
      <div className="fixed-top px-3 text-right">
        <a href="https://www.npmjs.com/package/react-annotation-tool">
          <img src="https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master" className="img-fluid" alt="Responsive image" />
        </a>
      </div>
      <div className="login-link  px-3 text-left">
          <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="/contact"><a>Contact</a></Link>
           {user._id
          ? <p style={{display: "inline", color: "#007bff"}}>{user.name}</p>
          : <Link href="/login" className='loginClass'><a>Login</a>
             </Link>}
        {user._id
          ? <Link href="/profile" ><a>Profile</a>
          </Link>
          : ``}
      </div>


      <hr />
      <DynamicVideoComponent />
      <style jsx>{`
        .login-link {
          font-size: 20px; !important
          position: fixed !important;
          top: 8px;
          left: 10px;
          font-weight: normal;
          font-family: "Times New Roman", Times, serif;
        }
        .loginClass{
          margin-left: 50px;
        }
        
      `}</style>
    </>
  );
};

// NODE JS CODE
export async function getServerSideProps(context) {
  
  return {
    props: {
      user: await AuthService.getUserFromCookie(context.req),
    },
  };
}


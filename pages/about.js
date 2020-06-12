import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth";

export default (props) => {
    const user = useAuth(props.user);

    return (
        <>
            {/* <div className="fixed-top px-3 text-right">
                <a href="https://www.npmjs.com/package/react-annotation-tool">
                    <img src="https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master" className="img-fluid" alt="Responsive image" />
                </a>
            </div> */}
            <div className="login-link  px-3 text-left" style={{fontFamily: "Arvo, seri", paddingTop: 20, paddingBottom:20, backgroundColor: "#ffffff", borderBottom: "1px solid #d7d7d7" }}>
            <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a style={{color: "#000000"}}>About</a></Link>
           <Link href="/contact"><a>Contact</a></Link>
                {user._id
                    ? <p style={{ display: "inline", color: "#007bff" }}>{user.name}</p>
                    : <Link href="/login"><a>Login</a>
                    </Link>}
                {user._id
                    ? <Link href="/profile" ><a>Profile</a>
                    </Link>
                    : ``}
                
            </div>
            <div className="text-right" style={{backgroundColor: "#ffffff", fontFamily: "Arvo, seri"}}>
                <Container fluid className="py-3">

                    <h3 className="display-4  text-center">CrowdMOT: A Video Annotation Tool</h3>
                    <Row>
                        <Col>
                            <p style={{ textAlign: "left", fontSize: 18, padding: 40, fontWeight: "normal" }}>CrowdMOT enables users to easily track objects of interest in a video. This crowdsourcing system is equipped with the functionality to handle when an object splits into fragments; for instance in the case of cell mitosis, where a cell divides into two children cells.
                            <br></br>
                            <div style={{textAlign: "center"}}>
                            <img src="https://live.staticflickr.com/4666/39926524554_a296f63a10_b.jpg" style={{width: 500, height:200, margin: 40, textAlign: "center"}}></img><br></br>
                            </div>
                            Users are required to follow two key steps when using Crowd- MOT. First, a user draws a bounding box around an object to begin annotation by clicking and dragging a new bounding box around it, with eight adjustable points that can be moved to tighten the box’s fit around the object. Second, the user moves the box to track the object. To do so, the user plays the video and, at any time, pauses it to relocate and refit the bounding box to a new location for the object.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <style jsx>{`
        .login-link {
          font-size: 20px; !important
          position: relative;
          top: 8px;
          left: 10px;
          font-weight: normal;
          font-family: "Times New Roman", Times, serif;
          margin-right: 10px;
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
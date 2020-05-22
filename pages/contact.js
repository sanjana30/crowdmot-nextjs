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
            <div className="fixed-top px-3 text-right">
                <a href="https://www.npmjs.com/package/react-annotation-tool">
                    <img src="https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master" className="img-fluid" alt="Responsive image" />
                </a>
            </div>
            <div className="login-link  px-3 text-left" style={{ margin: 10 }}>
            <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
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
            <div className="text-right">
                <Container fluid className="py-3">

                    {/* <h3 className="display-4  text-center">Contact</h3> */}
                    <Row>
                        <Col >
                           <Card style={{marginLeft: 450, marginRight:450, width: 550, marginTop: 50}}>
                               <CardBody>
                                   <Row>
                                       <Col className="col-lg-6 col-md-3" >
                                           <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?w968h681" style={{width: 200, height: 200}}></img>
                                       </Col>
                                       <Col className="col-lg-6 col-md-4 " style={{textAlign: "left"}}>
                                           <h4 style={{color: "black", fontWeight: "bold"}}>Dr. Danna Gurrari</h4>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>Assistant Professor</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>School of Information</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>University of Texas at Austin</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>1616, Guadalupe Street</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>Austin, TX</h6>
                                       </Col>
                                   </Row>
                               </CardBody>
                           </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                           <Card  style={{marginLeft: 450, marginRight:450, width: 550, marginTop: 50}}>
                               <CardBody>
                                   <Row>
                                       <Col className="col-lg-6 col-md-3" >
                                           <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?w968h681" style={{width: 200, height: 200}}></img>
                                       </Col>
                                       <Col className="col-lg-6 col-md-4 " style={{textAlign: "left"}}>
                                           <h4 style={{color: "black", fontWeight: "bold"}}>Samreen Anjum</h4>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>PhD. Student</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>School of Information</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>University of Texas at Austin</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>1616, Guadalupe Street</h6>
                                           <h6 style={{color: "black", fontWeight: "normal"}}>Austin, TX</h6>
                                       </Col>
                                   </Row>
                               </CardBody>
                           </Card>
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
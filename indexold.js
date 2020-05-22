// import React, { Component } from 'react'
// import dynamic from 'next/dynamic'
// import Link from 'next/link'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import useAuth from "../hooks/useAuth";
// import AuthService from "../services/auth";


// // const DynamicImageComponent = dynamic(import('../components/imageAnnotationDemo/ImageAnnotationDemo.js'), {
// //   ssr: false
// // })

// const DynamicVideoComponent = dynamic(import('../components/videoAnnotationDemo/VideoAnnotationDemo.js'), {
//   ssr: false
// })
// // const DynamicVideoComponentOld = dynamic(import('../components/two-dimensional-video/index.js'), {
// //   ssr:false
// // })
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       user: await AuthService.getUserFromCookie(context.req),
//     },
//   };
// }

// export default class Index extends React.Component {
//   // static async getInitialProps({ req }) {
//   //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   //   return { userAgent }
//   // }
  
//   render() {
    
//     return (
      
// 			<div>
//         {/* <UserInfo/> */}
//         <Link href="/login"><button>Login</button>
//         </Link>
       
// 				<div className="fixed-top px-3 text-right">
// 					<a href="https://www.npmjs.com/package/react-annotation-tool">
// 						<img src="https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master" className="img-fluid" alt="Responsive image" />
// 					</a>
// 				</div>
// 				{/* <DynamicImageComponent /> */}
// 				<hr/>
// 				<DynamicVideoComponent/>
// 			</div>
      
//     )
//   }
// }

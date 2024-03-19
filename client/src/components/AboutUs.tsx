import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/AboutUs.css";
import Timeline from "./Timeline";
import protection from "../assets/Home/protection.svg";
const AboutUs = () => {
	return (
		<Fragment>
			<NavBar />
			<section className="bannerabt-sec">
				<div className="container text-light ">
					<div className="row align-items-center">
						<div className=" col-12">
							<h1 className="txt-abt">
								We Are A Product Design, Manufacturing, R&D and Automation Company
							</h1>							
						</div>
					</div>
					<h3 className="align-items-center">
						<i className="fw-abt">
							<blockquote>Crafted with the concepts of physics </blockquote>
						</i>
					</h3>
				</div>
			</section>

			<section className="we-do-it-sec" >
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
							<h2 className="txt pt-2 pb-5">WE DO IT ALL</h2>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
							<a href="#">
								<div className="we-design-main we-1">
									<h3 className="pb-3">DESIGN</h3>
								</div>
							</a>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
							<a href="#">
								<div className="we-design-main we-2">
									<h3 className="pb-3">MANUFACTURING</h3>
								</div>
							</a>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
							<a href="#">
								<div className="we-design-main we-3">
									<h3 className="pb-3">R&D</h3>
								</div>
							</a>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
							<a href="#">
								<div className="we-design-main we-4">
									<h3 className="pb-3">AUTOMATION</h3>
								</div>
							</a>
						</div>

					</div>
				</div>
			</section>

			<section className="approach-sec pb-5"  >
				<div className="container">
					<div className="row align-items-center text-center " >
						<div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
							<h2 className="txt" >Our Approach</h2>
							<p className="txt-2 pt-3 pb-5">We follow a defined protocol to ensure that our idea flows through trajectory to become a one of a kind product</p>
							
							<section className="timeline-comp" >
								<Timeline />
							</section>
							<p className="txt-3-dp pt-5" style={{fontFamily:'system-ui',color:'black'}}>
								"We accept and encourage adjustments to our approach<br /> and are happy to go back to the drawing board at any<br /> point in the process."</p>
						</div>
					</div>
				</div>
			</section>
			



			<Footer />
		</Fragment>
	);
};

export default AboutUs;

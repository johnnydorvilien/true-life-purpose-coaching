import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Amplify, { Auth } from "aws-amplify"
import awsmobile from "../aws-exports"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import {StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../components/globalStyle.scss"
import 'bootstrap/dist/css/bootstrap.css'
import Img from "gatsby-image"


Amplify.configure(awsmobile)
toast.configure()

const backgroundTextStyle = {
  padding: "12rem 3.5rem",
  background: "rgba(51,51,153,0.3)",
  lineHeight: "2.5rem",
}

const titleTextStyle = {
  fontFamily: "Georgia",
  fontSize: "30px",
  color: "white",
  fontWeight: "600",
}

const navigationStyle = {
  color: "white",
  display: "inline",
  marginLeft: "10px",
  padding: "10px",
  float: "Right",
  marginTop: "20px",
  backgroundColor: "#336699"
}

const navigationStyle2 = {
  color: "white",
  display: "inline",
  marginLeft: "10px",
  padding: "10px",
  float: "Right",
  marginTop: "20px",
  backgroundColor: "#336699"
}

const navigationStyleReachOutToUs = {
  color: "white",
  display: "inline",
  marginLeft: "10px",
  padding: "10px",
  float: "Left",
  marginTop: "70px",
  backgroundColor: "#336699"
}

const navigationStyleLearnMore = {
  color: "white",
  display: "inline",
  marginLeft: "10px",
  padding: "10px",
  float: "Left",
  backgroundColor: "#336699"
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            home {
              title
              subtitle
              desc1
              desc2
              desc3
            }
          }
        }
        bannerImage: file(relativePath: { eq: "Corporate-15.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        successImageBeginning: file(
          relativePath: { eq: "middle-section-image-1.jpeg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        successImageMiddle: file(
          relativePath: { eq: "middle-success-image.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        successImageEnd: file(
          relativePath: { eq: "middle-success-image-2.jpeg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mp4File: file(
          relativePath: { eq: "True_Life_Purpose_Intro_Logo_Effects.mp4" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <BackgroundImage
          Tag="section"
          className={`hero`}
          fluid={data.bannerImage.childImageSharp.fluid}
        >
          <section style={backgroundTextStyle}>
            <div className="take-input" />
            <div className="container">
              <div className="animate seven">
                <p className="has-text-right">
                  <span style={titleTextStyle}>C</span>
                  <span style={titleTextStyle}>O</span>
                  <span style={titleTextStyle}>A</span>
                  <span style={titleTextStyle}>C</span>
                  <span style={titleTextStyle}>H</span>
                  <span style={titleTextStyle}>I</span>
                  <span style={titleTextStyle}>N</span>
                  <span style={titleTextStyle}>G </span>{"  "}
                  <span style={titleTextStyle}>C</span>
                  <span style={titleTextStyle}>O</span>
                  <span style={titleTextStyle}>P</span>
                  <span style={titleTextStyle}>O</span>
                  <span style={titleTextStyle}>R</span>
                  <span style={titleTextStyle}>A</span>
                  <span style={titleTextStyle}>T</span>
                  <span style={titleTextStyle}>E </span>{"  "}
     
                  <span style={titleTextStyle}>E</span>
                  <span style={titleTextStyle}>M</span>
                  <span style={titleTextStyle}>P</span>
                  <span style={titleTextStyle}>L</span>
                  <span style={titleTextStyle}>O</span>
                  <span style={titleTextStyle}>Y</span>
                  <span style={titleTextStyle}>E</span>
                  <span style={titleTextStyle}>E</span>
                  <span style={titleTextStyle}>S</span>
               
                  </p>
                  <p  className="has-text-right">
                  <span style={titleTextStyle}>T</span>
                  <span style={titleTextStyle}>h</span>
                  <span style={titleTextStyle}>r</span>
                  <span style={titleTextStyle}>i</span>
                  <span style={titleTextStyle}>v</span>
                  <span style={titleTextStyle}>e</span>{" "}
                  <span style={titleTextStyle}>&</span>{" "}
                  <span style={titleTextStyle}>w</span>
                  <span style={titleTextStyle}>i</span>
                  <span style={titleTextStyle}>n</span>{" "}
                  <span style={titleTextStyle}>t</span>
                  <span style={titleTextStyle}>h</span>
                  <span style={titleTextStyle}>e</span>{" "}
                  <span style={titleTextStyle}>d</span>
                  <span style={titleTextStyle}>a</span>
                  <span style={titleTextStyle}>y</span>{" "}
                </p>
                <p
                 
                  className="has-text-right"
                >
                  <span style={titleTextStyle}>i</span>
                  <span style={titleTextStyle}>n</span>{" "}
                  <span style={titleTextStyle}>t</span>
                  <span style={titleTextStyle}>h</span>
                  <span style={titleTextStyle}>e</span>{" "}
                  <span style={titleTextStyle}>W</span>
                  <span style={titleTextStyle}>o</span>
                  <span style={titleTextStyle}>r</span>
                  <span style={titleTextStyle}>k</span>
                  <span style={titleTextStyle}>p</span>
                  <span style={titleTextStyle}>l</span>
                  <span style={titleTextStyle}>a</span>
                  <span style={titleTextStyle}>c</span>
                  <span style={titleTextStyle}>e</span>
                </p>
              </div>
<div>
      <a style={navigationStyle2}>
            
                       Learn More
                 
                      </a>
                      </div>
                      <div>
                      <a style={navigationStyle}>
                    
                       Get Started
                  
                      </a>
                      </div>
            </div>
            
          </section>
        </BackgroundImage>

        <section class="about-area2 ptb-140">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<div class="about-wrap">
							<h3>Are any of these issues true for you?</h3>

              <ul>
              <li>Burnout</li>
                        <li>The stress of not having job security</li>
                        <li>
                          Mental health issues such as ADHD, Anxiety, or
                          Depression
                        </li>
                        <li>Lack of work-life balance </li>
                        <li>
                          Stress at work causing problems in relationships with
                          family or friends
                        </li>
                        <li>Inability to create a long-term strategy to reach goals and get promotions</li>
                        <li>
                            Lack of vision or direction for one’s career
                        </li>
                        <li>Unable to successfully resolve conflicts</li>
                        <li>
                            Lacking in the soft skills needed for effective communication with direct reports, co-workers and managers
                        </li>
                        <li>Difficulty coping and adapting to change</li>
							</ul>
							{/* <p>Intelligent, purpose-driven productivity and performance is the heartbeat of any organization. Yet so many people working within corporate environments find themselves distracted and unhappy, working longer hours and getting less done.</p>
							<p>At True Life Purpose Coaching, we help high-performance corporate employees connect with their purpose, boost their work performance, and accelerate their personal growth so they can reach their greatest goals.</p>
							<p>Our customized, self-development, coaching programs help individuals gain clarity, prevent burnout, and work through the very real problems they face in high stress and fast-paced work environments.</p>
               */}
              <a style={navigationStyleLearnMore}>
            
            Reach Out to Us
      
           </a>
						</div>
					</div>
                    <div class="col-md-6 col-xs-12">
                        <div class="row mt-60">
                        <div class="about-wrap">
                           
                                <h3>Our Solution</h3>
                                <div class="about-wrap-2">
<p>Intelligent, purpose-driven productivity and performance is the heartbeat of any organization. Yet so many people working within corporate environments find themselves distracted and unhappy, working longer hours and getting less done.</p>
<p>At True Life Purpose Coaching, we help high-performance corporate employees boost their work performance, connect with their purpose and accelerate their personal growth so they can reach their greatest goals.</p>
<p>Our customized, self-development, coaching programs help individuals gain clarity, prevent burnout, and work through the very real problems they face in high stress and fast-paced work environments.</p>

<a style={navigationStyleReachOutToUs}>
            
            Learn More
      
           </a>
        </div>
        </div>
        </div>
        </div>
	</div>
</div>
		</section>
        
          
        <header>
          <div className="overlay" />
          <video
            className="embed-responsive-item"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
              type="video/mp4"
            />
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">Learn More About Us</h1>
                <p className="lead mb-0">True Life Purpose Coaching</p>
              </div>
            </div>
          </div>
        </header>

        <section className="section-intro has-background-grey-lighter">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-t-30">
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <a alt="IMG-INTRO">
                      <Img
                        fluid={data.successImageBeginning.childImageSharp.fluid}
                      />
                    </a>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <a href="#">
                      <h4 className="txt5 color0-hov ">
                        Your Reliable Guide To High Performance at Work
                      </h4>
                    </a>

                    <p className="m-b-20">

                      At True Life Purpose Coaching, we coach the world's best employees - 
                      provide proven resources and the most effective self-development
                      coaching programs and services for real perfomance. 
                    </p>

                    <a href="#" className="txt4">
                      Learn More
                      <i
                        className="fa fa-long-arrow-right m-l-10"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-t-30">
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <a href="#">
                      <Img
                        fluid={data.successImageMiddle.childImageSharp.fluid}
                      />
                    </a>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <a href="#">
                      <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Help You Plan Strategically to Lead You To Real Success
                      </h4>
                    </a>

                    <p className="m-b-20">
                      If you can't perform to the best of your ability at work, you've got a serious problem.
                      Poor perfomance can cost you so much such as losing your job, impacting both your mental and phisical health
                      to causing relationships problems. Let one of our well trained coaches help you out.
                    </p>

                    <a href="#" className="txt4">
                      Get a quote
                      <i
                        className="fa fa-long-arrow-right m-l-10"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-t-30">
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <a>
                      <Img fluid={data.successImageEnd.childImageSharp.fluid} />
                    </a>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <a href="#">
                      <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                        Our Step-by-Step Coaching Process Ensures Results
                      </h4>
                    </a>

                    <p className="m-b-20">
                      Learn our easy coaching process that has lead hundred's of clients like yourself
                      fast and effective results. We follow the priciple of teach-a-man-to-fish process versus just catch-a-man-a-fish.
                    </p>

                    <a href="#" className="txt4">
                      Learn More
                      <i
                        className="fa fa-long-arrow-right m-l-10"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical_line" />
        </section>
      </Layout>
    )}
  />
)

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/about.scss"


const About = () => (
	<Layout>
		<SEO title="About" />
		<section className="section has-text-centered">
		<div class="about-wrap">
      <h1>What We Do</h1>

      <p className="subtitle is-size-5">
	  	We help corporate employees thrive and win in the workplace-day after day.
		Our professional coaches provide clear guidance and help employees reduce 
		and work through the very real problems they face in high stress and fast-paced work environments. 
      </p>
	  </div>
</section>

<section className="has-text-centered">
		<div class="about-wrap">
      <h1>Working With Us</h1>

     <p className="subtitle is-size-5">
	  We set our expectation high so we deliver what we promise to our clients.
	  Our commmitment to being reliable and trustworthy make our coaching firm a leader in the industry.
	  Our proven coaching services make personal and professional development easy to accomplish.
	  We help make heros out of regular people, as they contribute to their organization and win at work and at home.
      </p>
	  </div>
</section>
		<section className="section has-background-light">
			<div className="container">
				<div className="columns">
					<div className="column">

						<article className="media notification is-info">
							<figure className="media-left">
								<span className="icon is-medium">
									<i className="fab fa-2x fa-css3-alt"></i>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-3">Our Vision</h1>
									<p className="is-size-6">
										Our vision is to see transformation in people’s lives in the corporate world by
										enabling them to find a clear purpose in their work life while optimizing their
										performance in the workplace. We want to see people fulfil their life long dreams by
										reaching their goals and release the power within them. Working smarter and not harder,
										having a balanced life while enjoying what they do.
										</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column">
						{/* <div className="column is-one-third"> */}
						<article className="media notification is-primary">
							<figure className="media-left">
								<span className="icon fs-medium">
									<i className="fas fa-2x fa-align-justify"></i>
								</span>
							</figure>
							<div className="media-content">
								<h1 className="title is-size-3">Our Mission</h1>
								<p className="is-size-6">
									Our mission is to continously provide customized, self-development, coaching programs
									to help individuals gain clarity, prevent burnout, and work through the very real problems
									they face in high stress and fast-paced work environments. We are committed to helping corporate
									employees be the best version of themselves by bringing all the parts of their life into productive,
									holistic, and fulfilling alignment.
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>
			</section>
			<section className="section has-background-light">
			<div className="container">
				<div className="columns">
					<div className="column"></div>
			<div class="card">
				<div class="card-image">
					<figure class="image is-3by2">
						<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>

					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<figure class="image is-48x48">
								<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>
							</figure>
						</div>
					</div>
					<div class="media-content">
						
        <p class="title is-4">Johnny Dorvilien</p>
        <p class="subtitle is-6">ABOUT</p>
      </div>
    </div>
	<div class="content">
      Johnny is the founder of True Life Purpose Coaching LL
     
	</div>
				</div>
			</div>
			</div>
		</section>
	</Layout>
)

export default About



//     <div class="content">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Phasellus nec iaculis mauris. <a>@bulmaio</a>.
//       <a href="#">#css</a> <a href="#">#responsive</a>
//       <br>
//       <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
//     </div>
//   </div>
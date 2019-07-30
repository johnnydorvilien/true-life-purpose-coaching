import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/services.scss"

const Services = () => (
  <Layout>
    <SEO title="Services" />

    <section className="section has-text-centered">
      <h1 className="title">Services</h1>
</section>

    <section class="service-area home2-service-area ptb-100">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-6 col-xs-12 col">
						<div class="service-wrap">
							<div class="service-content">
								<h3>Work Performance Coaching</h3>
							    <p>Our coaching programs help employees prevent burnout and discover ways to get more enjoyment out of what they do at their job. We work with our clients by focusing on strategies that will have a deeper impact and create lasting changes.</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12 col">
						<div class="service-wrap">
							<div class="service-content">
								<h3>Time Management Coaching</h3>
							    <p>Getting ahead in your career, delivering your projects successfully, or getting a promotion
                    or a pay raise, requires consistent focus on what provides the most benefit.</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12 col">
						<div class="service-wrap">
							<div class="service-content">
								<h3>Coaching Employees With ADHD</h3>
							    <p>We work with ADHD-diagnosed employees, helping them improve their work skills, manage symptoms, and perform better on the job.</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
                    <div class="col-md-4 col-sm-6 col-xs-12 col">
						<div class="service-wrap">
							<div class="service-content">
								<h3>Leadership Coaching</h3>
							    <p>We help high potential, fast track managers to set goals, lead their teams, build relationships, and create effective professional development plans to accomplish their goals.</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12 col">
						<div class="service-wrap">
							<div class="service-content">
								<h3>Public Speaking & Organizational Presentation Coaching</h3>
							    <p>Get coached personally and learn the latest tips and tricks of public speaking. Have fun with an awesome and elevate your skills and confidence in public speaking.</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12 col">
						<div class="service-wrap">
							<div class="service-content">
								<h3>Life Coaching</h3>
								<p>We helo individuals of a wide range of professions attain both their personal and their professional goals
                  Our life coaches services include a veriety of methods, from personal improvment for developing positive habits.</p>
								<a href="single-service.html">Read More</a>
							</div>
						</div>
					</div>
          </div>
          </div>            
		</section>
{/* 
    <section className="section has-text-centered">
      <h1 className="title panel-heading">Our Services</h1>

      <p className="subtitle is-size-6">
        Our customized, self-development, coaching programs help individuals
        gain clarity, prevent burnout, and work through the very real problems
        they face in high stress and fast-paced work environments.
      </p>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title is-size-4 has-text-centered">
                  WORK PERFORMANCE COACHING
                </p>
                <p className="subtitle is-size-6 has-text-left">
                  Our coaching programs help employees prevent burnout and
                  discover ways to get more enjoyment out of what they do at
                  their job. We work with our clients by focusing on strategies
                  that will have a deeper impact and create lasting changes.
                </p>
                <Link className="button is-link" to="/contact/">
                  Reach out to us
                </Link>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title is-size-4 ">LEADERSHIP COACHING</p>
                <p className="subtitle is-size-6 has-text-left">
                  Help your high potential, fast track managers to set goals,
                  lead their teams, build relationships, and create a
                  professional development plan to accomplish their goals.
                </p>
                <Link className="button is-link" to="/contact/">
                  Reach out to us
                </Link>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <div className="content">
                  <p className="title is-size-4 ">TIME MANAGEMENT COACHING</p>
                  <p className="subtitle is-size-6 has-text-left">
                    To get ahead in your career, deliver your projects
                    successfully and to get a promotion or a pay rise, you must
                    learn to consistently focus on the activities that add the
                    most benefit to your projects and your clients.
                  </p>
                  <p className="subtitle is-size-6 has-text-left">
                    We offer strategies will help you get the right things done
                    in less time
                  </p>
                  <ul className="subtitle is-size-6 has-text-left">
                    <li>Clear Focus</li>
                    <li>Build dynamic task list</li>
                    <li>Focus on high-value activities</li>
                    <li>Minimize interruptions</li>
                    <li>Limit multi-tasking</li>
                    <li>Review your day</li>
                  </ul>
                  <Link className="button is-link" to="/contact/">
                    Reach out to us
                  </Link>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <div className="content">
                <p className="title is-size-4 ">
                  PUBLIC SPEAKING & ORGANIZATIONAL PRESENTATION COACHING
                </p>
                <p className="subtitle is-size-6 has-text-left">
                  Get personal coaching and learn the best tips and tricks to be
                  a public speaker. Have fun with an awesome group of people and
                  take your public speaking to a new level of greatness.
                </p>
                <ul className="subtitle is-size-6 has-text-left">
                  <li>Overcome your fear of public speaking</li>
                  <li>Deliver a speech within a certain timeframe</li>
                  <li>Develop a winning sales pitch for your business</li>
                  <li>Cope with hyperactivity</li>
                  <li>Keep their emotions under control</li>
                  <li>
                    Organize your ideas and thoughts clearly and effectively
                  </li>
                  <li>Learn to gather information</li>
                </ul>
                <Link className="button is-link" to="/contact/">
                  Reach out to us
                </Link>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title is-size-4 ">COACHING EMPLOYEES WITH ADHD</p>
              <p className="subtitle is-size-6 has-text-left">
                We work with ADHD-diagnosed employees to improve their skills,
                manage their symptoms and perform better on the job.
              </p>
              <ul className="subtitle is-size-6 has-text-left">
                <li>Manage their time more effectively</li>
                <li>Deal with distractions</li>
                <li>Manage short attention span</li>
                <li>Cope with hyperactivity</li>
                <li>Keep their emotions under control</li>
                <li>Follow Directions</li>
                <li>Get and stay organized</li>
                <li>Reduce or manage anger</li>
                <li>Reduce procrastination</li>
              </ul>
              <div className="content has-text-left">
                <p>
                  Excellence, focus, attention to detail, speed, and
                  organization—these are what employers are looking for in
                  employees and job candidates. But for employees with ADHD,
                  these behaviors are sometimes hard to deliver.
                </p>
                <p>
                  Their ADHD can make it much harder for them to excel at work
                  or even keep their jobs. At the same time, it’s easy for them
                  to suffer from feelings of restlessness and not being able to
                  focus. Making matters worse, employees who have not yet been
                  diagnosed are likely to feel like there is something wrong
                  with them.{" "}
                </p>
                <p>
                  In addition, people with ADHD are often considered lazy,
                  unmotivated, and or unreliable, adding to feelings of being
                  misunderstood and under-utilized.Having effective strategies
                  for people with ADHD to manage their symptoms helps them
                  perform better at work and feel like they are contributing in
                  the workplace.
                </p>
                <Link className="button is-link" to="/contact/">
                  Reach out to us
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section> */}
  </Layout>
)

export default Services

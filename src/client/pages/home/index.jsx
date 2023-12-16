import React, { memo } from "react";

import test1 from "../../assets/images/testimonials/testimonial-1.jpg";
import test2 from "../../assets/images/testimonials/testimonial-2.jpg";
import test3 from "../../assets/images/testimonials/testimonial-3.jpg";
import palo from "../../assets/icons/palo-bangla.png";
import paloEng from "../../assets/icons/palo-english.png";
import bigganChinta from "../../assets/icons/biggan-chinta.png";
import kishorAlo from "../../assets/icons/kishoralo-white.png";
import nagorikChinta from "../../assets/icons/nagorik.png";
import bondhushava from "../../assets/icons/bondhushava.png";
import rajneete from "../../assets/icons/rajneete.png";

import "./home.m.css";

const HomePage = () => (
  <>
    <div className='lm-animated-bg' />

    <div className='preloader'>
      <div className='preloader-animation'>
        <div className='preloader-spinner' />
      </div>
    </div>

    <div className='nurul-scroll-to-top'>
      <i className='lnr lnr-chevron-up' />
    </div>

    <div className='page-scroll'>
      <div className='page-container bg-move-effect' data-animation='transition-flip-in-right' id='page_container'>
        <header className='header' id='site_header'>
          <div className='header-content clearfix'>
            <div className='text-logo'>
              <a href='/'>
                <div className='logo-symbol'>N</div>
                <div className='logo-text'>
                  Nurul <span>Islam</span>
                </div>
              </a>
            </div>

            <div className='site-nav mobile-menu-hide'>
              <ul className='leven-classNameic-menu site-main-menu'>
                <li className='menu-item menu-item-has-children current-menu-item'>
                  <a href='/'>About Me</a>
                </li>

                <li className='menu-item'>
                  <a href='/resume'>Resume</a>
                </li>

                <li className='menu-item'>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>

            <a href='/' aria-label='menu toggle' className='menu-toggle mobile-visible'>
              <i className='fa fa-bars' />
            </a>
          </div>
        </header>

        <div className='site-main' id='main'>
          <div className='single-page-content' id='main-content'>
            <div className='content-area' id='primary'>
              <div className='page-content site-content single-post' id='content' role='main'>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12'>
                    <div className='home-content'>
                      <div className='row flex-v-align'>
                        <div className='col-sm-12 col-md-5 col-lg-5'>
                          <div className='home-photo'>
                            <div className='hp-inner' />
                          </div>
                        </div>

                        <div className='col-sm-12 col-md-7 col-lg-7'>
                          <div className='home-text hp-left'>
                            <div className='owl-carousel text-rotation'>
                              <div className='item'>
                                <h4>Fullstack-developer</h4>
                              </div>

                              <div className='item'>
                                <h4>Fullstack Developer</h4>
                              </div>
                            </div>

                            <h1>Nurul Islam</h1>
                            <p>
                              I am a passionate Full Stack Node.js developer, dedicated to crafting seamless and
                              efficient web solutions. With expertise in both front-end and back-end technologies, I
                              bring creativity and technical prowess to every project I undertake.
                            </p>

                            <div className='home-buttons'>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a aria-label='home button' className='btn btn-primary' href='#' target='_blank'>
                                Download CV
                              </a>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                              <a aria-label='btn secondary' className='btn btn-secondary' href='#' target='_self'>
                                Contact
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12 col-sm-12'>
                    <div className='p-50' />

                    <div className='block-title'>
                      <h2>What I Do</h2>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12 col-sm-6'>
                    <div className='info-list-w-icon'>
                      <div className='info-block-w-icon'>
                        <div className='ci-icon'>
                          <i className='linecons linecons-pen' />
                        </div>

                        <div className='ci-text'>
                          <h4>Web Development</h4>
                          <p>
                            As a Full Stack Node.js developer, I specialize in crafting engaging and responsive web
                            applications. From sleek user interfaces to powerful server-side logic, I bring a holistic
                            approach to web development, ensuring seamless and dynamic user experiences.
                          </p>
                        </div>
                      </div>

                      <div className='info-block-w-icon'>
                        <div className='ci-icon'>
                          <i className='linecons linecons-display' />
                        </div>

                        <div className='ci-text'>
                          <h4>RESTful API Development:</h4>
                          <p>
                            My expertise extends to the realm of RESTful API development, where I excel in designing and
                            implementing robust interfaces that facilitate efficient communication between different
                            components. Leveraging Node.js, I create APIs that are not just functional but also scalable
                            and adaptable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xs-12 col-sm-6'>
                    <div className='info-list-w-icon'>
                      <div className='info-block-w-icon'>
                        <div className='ci-icon'>
                          <i className='linecons linecons-shop' />
                        </div>

                        <div className='ci-text'>
                          <h4>Database Management</h4>
                          <p>
                            In the realm of database management, I shine in both NoSQL and relational databases. From
                            designing optimized data structures to ensuring smooth data flow, my proficiency spans
                            MongoDB to SQL databases. I bring a keen focus on database performance, security, and
                            scalability.
                          </p>
                        </div>
                      </div>

                      <div className='info-block-w-icon'>
                        <div className='ci-icon'>
                          <i className='linecons linecons-megaphone' />
                        </div>

                        <div className='ci-text'>
                          <h4>DevOps and Deployment</h4>
                          <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}s a Full Stack Node.js
                            developer, I'm well-versed in the intricacies of DevOps and deployment. Leveraging tools
                            like Docker and expertise in cloud platforms such as AWS and Heroku, I streamline deployment
                            processes, ensure continuous integration, and maintain a robust development environment for
                            efficient project workflows.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12 col-sm-12'>
                    <div className='p-20' />

                    <div className='block-title'>
                      <h2>Testimonials</h2>
                    </div>

                    <div
                      className='testimonials owl-carousel'
                      data-items='2'
                      data-mobile-items='1'
                      data-tablet-items='2'
                      id='testimonials_1'>
                      <div className='testimonial-item'>
                        <div className='testimonial-content'>
                          <div className='testimonial-picture'>
                            <img alt='Emily Thompson' src={test1} aria-label='Emily Thompson' />
                          </div>

                          <div className='testimonial-text'>
                            <p>
                              Exceptional talent! His Full Stack Node.js expertise transformed our project. Seamless
                              collaboration, timely delivery, and an unparalleled commitment to excellence.
                            </p>
                          </div>

                          <div className='testimonial-author-info'>
                            <h5 className='testimonial-author'>Emily Thompson</h5>
                            <p className='testimonial-firm'>Vancouver, BC</p>
                          </div>

                          <div className='testimonial-icon'>
                            <i className='fa fa-quote-left' />
                          </div>

                          <div className='testimonial-icon-big'>
                            <i className='fa fa-quote-right' />
                          </div>
                        </div>
                      </div>

                      <div className='testimonial-item'>
                        <div className='testimonial-content'>
                          <div className='testimonial-picture'>
                            <img alt='James MacDonald' aria-label='James MacDonald' src={test2} />
                          </div>

                          <div className='testimonial-text'>
                            <p>
                              A true professional in RESTful API development. Delivered a scalable solution with
                              precision and creativity. Highly recommend for any complex backend requirements.
                            </p>
                          </div>

                          <div className='testimonial-author-info'>
                            <h5 className='testimonial-author'>James MacDonald</h5>
                            <p className='testimonial-firm'>Toronto, ON</p>
                          </div>

                          <div className='testimonial-icon'>
                            <i className='fa fa-quote-left' />
                          </div>

                          <div className='testimonial-icon-big'>
                            <i className='fa fa-quote-right' />
                          </div>
                        </div>
                      </div>

                      <div className='testimonial-item'>
                        <div className='testimonial-content'>
                          <div className='testimonial-picture'>
                            <img alt='Daniel Pringle' src={test3} aria-label='Daniel Pringle' />
                          </div>

                          <div className='testimonial-text'>
                            <p>
                              Master of databases! From MongoDB to SQL, his meticulous database management ensured our
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              data's security and performance. A reliable partner for any data-centric project.
                            </p>
                          </div>

                          <div className='testimonial-author-info'>
                            <h5 className='testimonial-author'>Ryan Johnston</h5>
                            <p className='testimonial-firm'>Calgary, AB</p>
                          </div>

                          <div className='testimonial-icon'>
                            <i className='fa fa-quote-left' />
                          </div>

                          <div className='testimonial-icon-big'>
                            <i className='fa fa-quote-right' />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-40' />

                    <div className='block-title'>
                      <h2>Clients</h2>
                    </div>

                    <div
                      className='clients owl-carousel'
                      data-items='6'
                      data-mobile-items='1'
                      data-tablet-items='3'
                      id='clients_1'>
                      <div className='client-block'>
                        <a href='https://www.prothomalo.com' target='_blank' title='Prothom alo' rel='noreferrer'>
                          <img alt='Prothom alo' src={palo} aria-label='Prothom alo' />
                        </a>
                      </div>

                      <div className='client-block'>
                        <a
                          href='https://en.prothomalo.com'
                          target='_blank'
                          title='Prothom alo english'
                          rel='noreferrer'>
                          <img alt='Prothom alo english' src={paloEng} aria-label='Prothom alo english' />
                        </a>
                      </div>

                      <div className='client-block'>
                        <a href='https://www.bigganchinta.com' target='_blank' title='Biggan chinta' rel='noreferrer'>
                          <img alt='Biggan chinta' src={bigganChinta} />
                        </a>
                      </div>

                      <div className='client-block'>
                        <a href='https://www.kishoralo.com' target='_blank' title='Kishor alo' rel='noreferrer'>
                          <img alt='Kishor alo' src={kishorAlo} />
                        </a>
                      </div>

                      <div className='client-block'>
                        <a
                          href='https://nagorik.prothomalo.com'
                          target='_blank'
                          title='Nagorik chinta'
                          rel='noreferrer'>
                          <img alt='Nagorik chinta' src={nagorikChinta} aria-label='nagrok chinta' />
                        </a>
                      </div>

                      <div className='client-block'>
                        <a href='https://www.bondhushava.com' target='_blank' title='Bondushava' rel='noreferrer'>
                          <img alt='Bondushava' src={bondhushava} aria-label='Bondushava' />
                        </a>
                      </div>

                      <div className='client-block'>
                        <a href='https://rajneete.com' target='_blank' title='Rajneete' rel='noreferrer'>
                          <img alt='Rajneete' src={rajneete} />
                        </a>
                      </div>
                    </div>

                    <div className='p-40' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12 col-sm-12'>
                    <div className='block-title'>
                      <h2>Fun Facts</h2>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xs-12 col-sm-3'>
                    <div className='lm-info-block gray-default'>
                      <i className='linecons linecons-heart' />
                      <h4>Happy Clients</h4>
                      <span className='lm-info-block-value'>36</span>
                      <span className='lm-info-block-text' />
                    </div>
                  </div>

                  <div className='col-xs-12 col-sm-3'>
                    <div className='lm-info-block gray-default'>
                      <i className='linecons linecons-clock' />
                      <h4>Working Hours</h4>
                      <span className='lm-info-block-value'>4,780</span>
                      <span className='lm-info-block-text' />
                    </div>
                  </div>

                  <div className='col-xs-12 col-sm-3'>
                    <div className='lm-info-block gray-default'>
                      <i className='linecons linecons-star' />
                      <h4>Awards Won</h4>
                      <span className='lm-info-block-value'>13</span>
                      <span className='lm-info-block-text' />
                    </div>
                  </div>

                  <div className='col-xs-12 col-sm-3'>
                    <div className='lm-info-block gray-default'>
                      <i className='linecons linecons-cup' />
                      <h4>Coffee Consumed</h4>
                      <span className='lm-info-block-value'>1,286</span>
                      <span className='lm-info-block-text' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='site-footer clearfix'>
          <div className='footer-social'>
            <ul className='footer-social-links'>
              <li>
                <a href='https://twitter.com/nurul_islam01' target='_blank' rel='noreferrer'>
                  Twitter
                </a>
              </li>

              <li>
                <a href='https://www.facebook.com/nurul.islam001' target='_blank' rel='noreferrer'>
                  Facebook
                </a>
              </li>

              <li>
                <a href='https://www.instagram.com/__p_u_t_i__' target='_blank' rel='noreferrer'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-copyrights'>
            <p>© 2023 All rights reserved. Nurul Islam.</p>
          </div>
        </footer>
      </div>
    </div>
  </>
);

export default memo(HomePage);

import React from "react";

import creativeIT from "@icons/creative-it.png";
import SEIP from "@icons/seip.png";

const Resume = () => (
  <div className='site-main' id='main'>
    <div className='single-page-content' id='main-content'>
      <div className='content-area' id='primary'>
        <div className='page-title'>
          <h1>Resume</h1>
          <div className='page-subtitle'>
            <h4>5 Years of Experience</h4>
          </div>
        </div>

        <div className='page-content site-content single-post' id='content' role='main'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='block-title'>
                <h2>Education</h2>
              </div>

              <div className='timeline clearfix' id='timeline_1'>
                <div className='timeline-item clearfix'>
                  <h5 className='item-period'>2017</h5>
                  <span className='item-company'>Institute of Science and Technology</span>
                  <h4 className='item-title'>Computer Science and Engineering</h4>
                  <p>
                    Computer Science and Engineering graduate with a passion for problem-solving and innovation. Excited
                    to apply my skills in creating cutting-edge solutions for real-world challenges.
                  </p>
                </div>

                <div className='timeline-item clearfix'>
                  <h5 className='item-period'>2012</h5>
                  <span className='item-company'>Altajar Rahman Degree College</span>
                  <h4 className='item-title'>Higher Secondary Certificate</h4>
                  <p>
                    Science graduate since 2012, bringing a decade of experience and a foundation in critical thinking
                    to tackle challenges in diverse domains.
                  </p>
                </div>

                <div className='timeline-item clearfix'>
                  <h5 className='item-period'>2010</h5>
                  <span className='item-company'>Zangalia School and College</span>
                  <h4 className='item-title'>Secondary School Certificate</h4>
                  <p>
                    Completed SSC in Science in 2010, I bring over 10 years of experience, combining analytical skills
                    with a strong scientific background.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6'>
              <div className='block-title'>
                <h2>Experience</h2>
              </div>

              <div className='timeline clearfix' id='timeline_2'>
                <div className='timeline-item clearfix'>
                  <h5 className='item-period current'>2021 - Current</h5>
                  <span className='item-company'>Prothom Alo</span>
                  <h4 className='item-title'>Senior Fullstack developer</h4>
                  <p>
                    I&apos;ve been working with Prothom Alo, contributing as a Fullstack developer. Excited about the
                    dynamic projects and continuous growth in the ever-evolving tech landscape.
                  </p>
                </div>

                <div className='timeline-item clearfix'>
                  <h5 className='item-period'>2019 - 2021</h5>
                  <span className='item-company'>Nassa Group</span>
                  <h4 className='item-title'>Web and Android App Developer</h4>
                  <p>
                    I served here as a Web and Android App Developer, honing my skills in crafting digital solutions for
                    a diverse range of platforms
                  </p>
                </div>

                <div className='timeline-item clearfix'>
                  <h5 className='item-period'>2018</h5>
                  <span className='item-company'>Wizdoor</span>
                  <h4 className='item-title'>Junior App developer</h4>
                  <p>Starting my live from this company, in here i was work on also a web and android app developer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12 col-sm-12'>
              <div className='p-20' />

              <div className='block-title'>
                <h2>Certificates</h2>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='lightbox'>
                <div className='certificate-item clearfix'>
                  <div className='certi-logo'>
                    <img alt='logo' src={creativeIT} aria-label='creative it' />
                  </div>

                  <div className='certi-content'>
                    <div className='certi-title'>
                      <h4>Web Development</h4>
                    </div>

                    <div className='certi-id'>
                      <span>Membership ID: SD-10397</span>
                    </div>
                    <div className='certi-date'>
                      <span>19 April 2017</span>
                    </div>

                    <div className='certi-company'>
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6'>
              <div className='lightbox'>
                <div className='certificate-item clearfix'>
                  <div className='certi-logo'>
                    <img alt='logo' src={SEIP} aria-label='SEIP' />
                  </div>

                  <div className='certi-content'>
                    <div className='certi-title'>
                      <h4>Android App Development</h4>
                    </div>

                    <div className='certi-id'>
                      <span>Membership ID: 197689</span>
                    </div>

                    <div className='certi-date'>
                      <span>19 April 2018</span>
                    </div>

                    <div className='certi-company'>
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12 col-sm-12'>
              <div className='p-40' />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-12'>
              <div className='block-title'>
                <h2>Coding Skills</h2>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='skills-info skills-first-style' id='skills_1'>
                <div className='clearfix'>
                  <h4>Javascript, TypeScript</h4>
                  <div className='skill-value'>95%</div>
                </div>

                <div className='skill-container' data-value='95' id='skill_1'>
                  <div className='skill-percentage' />
                </div>

                <div className='clearfix'>
                  <h4>Java</h4>
                  <div className='skill-value'>75%</div>
                </div>

                <div className='skill-container' data-value='75' id='skill_2'>
                  <div className='skill-percentage' />
                </div>

                <div className='clearfix'>
                  <h4>Nodejs</h4>
                  <div className='skill-value'>85%</div>
                </div>
                <div className='skill-container' data-value='85' id='skill_3'>
                  <div className='skill-percentage' />
                </div>

                <div className='clearfix'>
                  <h4>React, Angular</h4>
                  <div className='skill-value'>95%</div>
                </div>
                <div className='skill-container' data-value='95' id='skill_4'>
                  <div className='skill-percentage' />
                </div>

                <div className='clearfix'>
                  <h4>React SSR, NextJS</h4>
                  <div className='skill-value'>95%</div>
                </div>
                <div className='skill-container' data-value='95' id='skill_5'>
                  <div className='skill-percentage' />
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6'>
              <div className='skills-info skills-first-style' id='skills_2'>
                <div className='clearfix'>
                  <h4>Express</h4>
                  <div className='skill-value'>90%</div>
                </div>
                <div className='skill-container' data-value='90' id='skill_6'>
                  <div className='skill-percentage' />
                </div>

                <div className='clearfix'>
                  <h4>MONGODB, SQL, Firebase, GraphQL</h4>
                  <div className='skill-value'>90%</div>
                </div>
                <div className='skill-container' data-value='90' id='skill_7'>
                  <div className='skill-percentage' />
                </div>
                <div className='clearfix'>
                  <h4>Native Android</h4>
                  <div className='skill-value'>80%</div>
                </div>
                <div className='skill-container' data-value='80' id='skill_8'>
                  <div className='skill-percentage' />
                </div>
                <div className='clearfix'>
                  <h4>Webpack expert</h4>
                  <div className='skill-value'>90%</div>
                </div>
                <div className='skill-container' data-value='90' id='skill_9'>
                  <div className='skill-percentage' />
                </div>

                <div className='clearfix'>
                  <h4>HTML, CSS, JQUERY, Tailwind, Bootstrap</h4>
                  <div className='skill-value'>85%</div>
                </div>
                <div className='skill-container' data-value='85' id='skill_10'>
                  <div className='skill-percentage' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;

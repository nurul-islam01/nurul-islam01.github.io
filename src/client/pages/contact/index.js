import React from "react";

const Contact = () => (
  <div className='site-main' id='main'>
    <div className='single-page-content' id='main-content'>
      <div className='content-area' id='primary'>
        <div className='page-title'>
          <h1>Contact</h1>
          <div className='page-subtitle'>
            <h4>Get in Touch</h4>
          </div>
        </div>

        <div className='page-content site-content single-post' id='content' role='main'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12'>
              <iframe
                allowFullScreen=''
                className='google-map-frame'
                height='450'
                loading='lazy'
                title='google map location'
                referrerPolicy='no-referrer-when-downgrade'
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7303.720254231927!2d90.3909809!3d23.7523668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702658132678!5m2!1sen!2sbd'
                style={{ border: 0 }}
                width='600'
              />
            </div>
          </div>
          <div className='p-50' />
          <div className='row'>
            <div className='col-xs-12 col-sm-4'>
              <div className='info-list-w-icon' id='info_list_1'>
                <div className='info-block-w-icon'>
                  <div className='ci-icon'>
                    <i className='linecons linecons-phone' />
                  </div>
                  <div className='ci-text'>
                    <h4>
                      <a href='tel:+8801727946384'>+8801727946384</a>
                    </h4>
                    <p>
                      Let&apos;s start a conversation about your goals and how we can achieve them together. I look
                      forward to hearing from you!
                    </p>
                  </div>
                </div>

                <div className='info-block-w-icon'>
                  <div className='ci-icon'>
                    <i className='linecons linecons-location' />
                  </div>
                  <div className='ci-text'>
                    <h4>Dhaka, Bangladesh</h4>
                    <p>
                      Don&apos;t hesitate to give me a call at
                      <a href='tel:+8801727946384'>+8801727946384</a>. I&apos;m eager to discuss how we can work
                      together to bring your ideas to life!
                    </p>
                  </div>
                </div>

                <div className='info-block-w-icon'>
                  <div className='ci-icon'>
                    <i className='linecons linecons-mail' />
                  </div>
                  <div className='ci-text'>
                    <h4>
                      <a className='__cf_email__' href='email:contact@nurulislam.dev'>
                        contact@nurulislam.dev
                      </a>
                    </h4>
                    <p>
                      I&apos;m excited to hear from you and explore the possibilities of working together. Looking
                      forward to connecting!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-8'>
              <div className='block-title'>
                <h2>How Can I Help You?</h2>
              </div>

              <form
                action='https://nurul.com/demo/leven-html-new/dark/contact_form/contact_form.php'
                className='contact-form'
                id='contact_form'
                method='post'>
                <div className='messages' />

                <div className='controls two-columns'>
                  <div className='fields clearfix'>
                    <div className='left-column'>
                      <div className='form-group form-group-with-icon'>
                        <input
                          className='form-control'
                          data-error='Name is required.'
                          id='form_name'
                          name='name'
                          placeholder='Full Name'
                          required='required'
                          type='text'
                        />
                        <div className='form-control-border' />
                        <div className='help-block with-errors' />
                      </div>

                      <div className='form-group form-group-with-icon'>
                        <input
                          className='form-control'
                          data-error='Valid email is required.'
                          id='form_email'
                          name='email'
                          placeholder='Email Address'
                          required='required'
                          type='email'
                        />
                        <div className='form-control-border' />
                        <div className='help-block with-errors' />
                      </div>

                      <div className='form-group form-group-with-icon'>
                        <input
                          className='form-control'
                          data-error='Subject is required.'
                          id='form_name'
                          name='subject'
                          placeholder='Subject'
                          required='required'
                          type='text'
                        />
                        <div className='form-control-border' />
                        <div className='help-block with-errors' />
                      </div>
                    </div>
                    <div className='right-column'>
                      <div className='form-group form-group-with-icon'>
                        <textarea
                          className='form-control'
                          data-error='Please, leave me a message.'
                          id='form_message'
                          name='message'
                          placeholder='Message'
                          required='required'
                          rows='7'
                        />
                        <div className='form-control-border' />
                        <div className='help-block with-errors' />
                      </div>
                    </div>
                  </div>

                  <div
                    className='g-recaptcha'
                    data-sitekey='6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI'
                    data-theme='dark'
                  />

                  <input className='button btn-send disabled' type='submit' value='Send message' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;

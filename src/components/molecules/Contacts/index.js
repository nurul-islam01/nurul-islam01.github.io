import React, { useState } from 'react';
import axios from 'axios';

import Spinner from '@/components/atoms/Spinner';
import SectionTitle from '@/components/atoms/SectionTitle';
import Input from '@/components/atoms/Input';
import TextArea from '@/components/atoms/TextArea';

import styles from './contacts.module.css';

const status = Object.freeze({
  ERROR: 'error',
  SUCCESS: 'success',
  LOADING: 'loading'
});

const Contacts = () => {
  const [state, setState] = useState({});
  const [mail, setMail] = useState({});

  const onChange = (e) => {
    setState((prev) => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMail({ loading: true, status: status.LOADING });
    axios
      .post('/mail', state, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.status === 200) {
          setMail({ loading: false, status: status.SUCCESS });
        } else {
          setMail({
            loading: false,
            status: status.ERROR
          });
        }
      })
      .catch((err) => {
        setMail({
          loading: false,
          status: status.ERROR
        });
      })
      .finally(() => setTimeout(() => setMail({}), 1500));
  };

  return (
    <section className={styles.base}>
      <div className={styles.static}>
        <div className={styles['static-items']}>
          <div className={styles['static-item']}>
            <div className={styles.icon}>
              <i className="linecons linecons-phone"></i>
            </div>
            <div className={styles.info}>
              <h3>
                <a href="tel:+8801727946384">+8801727946384</a>
              </h3>
              <p>
                Let&apos;s start a conversation about your goals and how we can
                achieve them together. I look forward to hearing from you!
              </p>
            </div>
          </div>
          <div className={styles['static-item']}>
            <div className={styles.icon}>
              <i className="linecons linecons-location"></i>
            </div>
            <div className={styles.info}>
              <h3>Dhaka, Bangladesh</h3>
              <p>
                Don&apos;t hesitate to give me a call at&nbsp;
                <a href="tel:+8801727946384">+8801727946384</a>. I&apos;m eager
                to discuss how we can work together to bring your ideas to life!
              </p>
            </div>
          </div>
          <div className={styles['static-item']}>
            <div className={styles.icon}>
              <i className="linecons linecons-phone"></i>
            </div>
            <div className={styles.info}>
              <h3>
                <a href="email:hello@nurulislam.dev">hello@nurulislam.dev</a>
              </h3>
              <p>
                I&apos;m excited to hear from you and explore the possibilities
                of working together. Looking forward to connecting!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['form-container']}>
        <SectionTitle title="How Can I Help You?" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <Input
              onChange={onChange}
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />
            <Input
              name="email"
              type="email"
              onChange={onChange}
              placeholder="Email Address"
              required
            />
            <Input
              name="subject"
              onChange={onChange}
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <div className={styles.textarea}>
            <TextArea
              onChange={onChange}
              name="message"
              placeholder="Message"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`${styles.submit} ${styles[mail.status] || ''}`}
            >
              {!mail.loading ? 'Send message' : <Spinner />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;

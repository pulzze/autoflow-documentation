import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Xicon from '../../static/img/x-symbol.svg';
import CheckIcon from '../../static/img/check-icon.svg';
import { post } from '../utils/api';


function Qna() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);
  const [submitSuccess, setSubmitSuccess] = useState(null)
  const [capVal, setCapVal] = useState(null);
  const [reCAPTCHALoaded, setReCAPTCHALoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [page, setPage] = useState('');

  useEffect(() => {
    setPage(window.location.href);
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const data = {
          'name': formData.name,
          'email': formData.email,
          'question': formData.message,
          'page' : page,
        };

        await post('/sendToSlackQuestion', data);
        setSubmitSuccess(true)
        setTimeout(() => {
          setExpanded(false);
          setSubmitSuccess(null);
          setFormData({ name: '', email: '', message: '' });
          setCapVal(null)
        }, 3000);
      } catch (error) {
        console.error('Error: sendToSlackQuestion', error);
      }
  }

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  return (
    <div className='qna'>
      {expanded ? (
        <div className='qna-form'>
            {
              submitSuccess === null && (
            <>
            <div className='qna-header'>
                <button onClick={toggleExpand} className='close-btn'>
                <Xicon/>
                </button>
                <div className='qna-header-text'>How can we help you?</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" 
                    name='name' 
                    placeholder='Enter your name.*' 
                    autoComplete='off' 
                    value={formData.name} 
                    onChange={updateForm}
                    required/>
                </div>
                <div className="input-box">
                    <span className="details">Email</span>
                    <input type="email" 
                    name='email'
                    placeholder='Enter your eamil.*' 
                    autoComplete='off' 
                    value={formData.email} 
                    onChange={updateForm}
                    required/>
                </div>
                <div className="input-box">
                    <span className="details">Question</span>
                    <textarea 
                      placeholder="Share your question.*" 
                      name='message'
                      value={formData.message} 
                      onChange={updateForm}
                      className='qna-text'
                      autoComplete='off'
                      required/>
                </div>
                <div className="form-submit">
                  <div className="captcha">
                    <ReCAPTCHA
                      sitekey="6LfXYQgpAAAAAPcu8ia2BXwn2-IQA-viuGoCMvJz"
                      onLoad={() => setReCAPTCHALoaded(true)}
                      onChange={(val) => setCapVal(val)}
                    />
                  </div>
                  <button
                    disabled={capVal === null}
                    type="submit"
                    value="Submit"
                    className="qna-submit"
                  >
                  Submit
                  </button>
                  { capVal === null && (
                      <div className="disabled-submit">
                        Please check reCAPCHA first
                      </div>
                    )
                  }
                </div>
              </form>
            </>
            )} 
            {
              submitSuccess === true && (
              <>
                <div className='qna-header'>
                  <button onClick={toggleExpand} className='close-btn'>
                    <Xicon/>
                  </button>
                  <div className='submit-success'>
                    <div className='check-icon'>
                      <CheckIcon/>
                    </div>
                    <div className='submit-success-title'>
                      Thank you
                    </div>
                    <div>
                      We will get back to your mail within in a few hours.
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>    
      ) : (
        <div className='qna-empty' onClick={toggleExpand}>?</div>
      )}
    </div>
  );
}

export default Qna;

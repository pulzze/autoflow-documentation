import React, { useState, useEffect } from 'react'
import { post } from '../utils/api';

export default function Feedback() {
  const [feedbackClicked, setFeedbackClicked] = useState(null);
  const [feedbackSent, setFeedbackSent] = useState(null);
  const [feeedbackResult, setFeedbackResult] = useState(null); // [true, false
  const [feedbackValue, setFeedbackValue] = useState('');
  const [page, setPage] = useState('');

  useEffect(() => {
    setPage(window.location.href);
  }, []);

  const feedbackSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { 
        'page': page,
        'result' : feeedbackResult,
        'feedback': feedbackValue,
      };
      await post('/sendFeedback', data);
      setFeedbackSent(true);
    } catch (error) {
      // Handle the error appropriately
    }
  };

  const feedbackClick = (value) => {
    setFeedbackClicked(true);
    setFeedbackResult(value);
  };

  if (feedbackSent) {
    return (
      <div className='feedback'>
        <div className='feedback-true'>
          Thank you for your feedback.👏
        </div>
      </div>
    );
  }

  if (feedbackClicked) {
    return (
        <div className="feedback-form-container">
          <div className="feedback-form">
            <div className="feedback-header">{feeedbackResult ? 'We are glad this article helped.' : 'Thanks for letting us know.'}</div>
            <form onSubmit={feedbackSubmit}>
              <textarea 
                placeholder={feeedbackResult ? "Anything else you'd like us to know(optional)" : "How can we make this article more helpful?(Optional)"}
                value={feedbackValue}
                onChange={(e) => setFeedbackValue(e.target.value)}
                className="feedback-textarea"
                fixed
              />
              <div className="feedback-footer">Please don't include any personal information in your comment.</div>
              <button type="submit" className="feedback-submit">Submit</button>
            </form>
          </div>
        </div>
    );
  }

  return (
    <div className='feedback'>
      <div className='feedback-false'>
        <div>Helpful?</div>
        <div className='feedback-false-btn'>
          <button className='feedback-btn' onClick={() => feedbackClick(true)}>Yes</button>
          <button className='feedback-btn' onClick={() => feedbackClick(false)}>No</button>
        </div>
      </div>
    </div>
  );
}
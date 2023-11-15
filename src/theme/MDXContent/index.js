import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import Qna from '../../components/Qna';
import Feedback from '../../components/Feedback';

export default function MDXContentWrapper(props) {
  return (
    <>
      <Qna/>
      <MDXContent {...props} />
      <hr/>
      <Feedback/>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';


const noteStyle = {
    padding: '15px',
    margin: '10px 10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
};

const dateStyle = {
    color: '#888',
    marginBottom: '0.5em',
};
  


function ReleaseNotes() {
  const [releaseNotesData, setReleaseNotesData] = useState([]);

  useEffect(() => {
    fetch('/apiautoflow/releaseNotes.json')
      .then(response => {
        if (!response.ok) { throw Error(response.statusText); }
        return response.json();
      })
      .then(data => {
        console.log(data); // For debugging purposes.
        setReleaseNotesData(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Layout title="Release Notes">
      <div className='container padding-top--md padding-bottom--lg'>
        <h1>Release Notes</h1>
        {releaseNotesData.map((note, index) => (
          <div key={index} style={noteStyle}>
            <h2>{note.release}</h2>
            <p style={dateStyle}>Release date : {note.date}</p>
            <div style={{ height: '25px' }} />
            <p>{note.detail.split("\r\n").map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ReleaseNotes;
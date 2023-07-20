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
    </Layout>
  );
}

export default ReleaseNotes;







// This is how the response is supposed to look like:

                    // Release Notes

                    // 3.0.25 - April 24, 2023 - Official
                    // - UI Changes in upload/download
                    // - Service/Service level logging

                    // 3.0.24 - April 20, 2023 - Official
                    // - Reset url on clear configuration
                    // - JSON schema UI enhancement
                    // - Option for Textarea UI for String 
                    // - Action remove popup menu once menu item has been selected
                    // - Add ability to collapse schema text component.

                    // ...

                    // 2.3.1 - May 18, 2022 - Official

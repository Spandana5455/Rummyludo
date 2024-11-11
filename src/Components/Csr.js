import React from 'react';
import './All.css';
import FileViewer from 'react-file-viewer';

export default function Csr() {
  const fileType = 'pdf'; // specify the file type
  const filePath = 'CSR.pdf';

  const openFileInNewWindow = () => {
    window.open(filePath, '_blank'); // Opens the PDF in a new tab
  };

  return (
    <>
      <div className='csr-main'>
        <div className='file-viewer-container shadow rounded mt-5 container'>
          <FileViewer
            fileType={fileType}
            filePath={filePath}
            onError={(e) => console.log('Error:', e)}
            id='file-width'
          />
          <button 
            className='btn btn-primary mt-3' 
            onClick={openFileInNewWindow}
          >
            Open in New Window
          </button>
        </div>
      </div>
    </>
  );
}

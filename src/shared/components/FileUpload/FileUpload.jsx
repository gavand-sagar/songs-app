import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { baseURL } from '../../../data/constants';
import { postFormData } from '../../utils/ApiUtitilities';
export default function FileUpload({ onUploaded }) {
  const [uploading, setUploading] = useState();
  const [fileName, setFileName] = useState('')
  function upload() {
    const avatar = document.getElementById('app-file-upload').files[0]
    uploadFile(avatar)
  }

  function uploadFile(avatar) {
    let data = new FormData();
    data.append('myFile', avatar)

    setUploading(true)
    postFormData('/app-image-upload', data).then(x => {
      setFileName(x.filename)
      console.log(x)
      onUploaded && onUploaded(x.filename)
    }).finally(x => {
      setUploading(false)
    })
  }

  function dropHandler(ev) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          uploadFile(file)
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }

  function dragOverHandler(ev) {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  return (

    <div onDragOver={dragOverHandler} onDrop={dropHandler} style={{
      'display': 'inline-flex',
      'flexDirection': 'column',
      'alignItems': 'center',
      'borderRadius': '5px',
      'border': '2px solid var(--base-color)'
    }}>
      <label htmlFor='app-file-upload'>
        <PhotoCameraIcon />
      </label>

      <input disabled={uploading} onChange={upload} style={{ 'display': 'none' }} id='app-file-upload' type={'file'}></input>
      <div>
        {
          uploading || (!fileName) ? <Skeleton height={100} width={150} /> :
            <>
              {fileName && <img height={'100px'} width={'150px'} src={`${baseURL}/image/${fileName}`} />}
            </>
        }

      </div>
    </div>
  )
}

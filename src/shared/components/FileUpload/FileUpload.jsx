import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Skeleton } from '@mui/material'
import './FileUpload.css'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../../data/constants';
import { postFormData } from '../../utils/ApiUtitilities';
const defaultValues = {
  formFieldName: 'myFile',
  uploadUrlPath: '/app-image-upload'
}
export default function FileUpload({ onUploaded, formFieldName, uploadUrlPath }) {
  const [uploading, setUploading] = useState();
  const [style, setStyle] = useState({
  })
  const [fileName, setFileName] = useState('')
  function upload() {
    const avatar = document.getElementById('app-file-upload').files[0]
    uploadFile(avatar)
  }

  useEffect(() => {
    if (fileName) {
      setStyle({
        'background': `url(${baseURL}/image/${fileName})`,       
      })
    }
  }, [fileName])

  function uploadFile(avatar) {
    let data = new FormData();
    data.append(formFieldName ?? defaultValues.formFieldName, avatar)

    setUploading(true)
    postFormData(uploadUrlPath ?? defaultValues.uploadUrlPath, data).then(x => {
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
          (!fileName && !uploading) ? <div>Drop Files !!!</div> :
            <>
              {
                uploading ? <div>Uploading ...</div> :
                  <>
                    {fileName && <div className='file-image-container' style={style} />}
                  </>
              }</>
        }

      </div>
    </div>
  )
}

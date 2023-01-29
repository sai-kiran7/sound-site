import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import Button from '@mui/material/Button';
import {useState} from "react"

const DropzoneAreaExample = () => {

    const [ data, setData] = useState({});
    const [detected , setDetected]=useState();
    var onFileChange = event => {
        setData( event.target.files[0] );   
    };

    const headers = {
        "content-type": "multipart/form-data",
    };


    const detect = () => {
        const formData = new FormData();
        formData.append("file", data);
        var config = {
            method: 'post',
            url: 'http://localhost:8000/object-to-json',
            headers: { 
                'Content-Type': 'multipart/form-data'
            },
            data : formData
        };
        
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDetected(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    };

    return (
        <div>
         <input type="file" onChange={onFileChange} />
        <button onClick={detect}>
            Upload!
        </button>
        {detected && <h3>{detected}</h3>}
        </div>
    );
};

export default DropzoneAreaExample;
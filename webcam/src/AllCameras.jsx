import React , {useRef, useState} from 'react'
import Webcam from "react-webcam";

const AllCameras = () => {

  const[devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback((mediaDevices) => {
    setDevices(mediaDevices.filter(({kind}) => kind === "videoinput")), [setDevices]
  })

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices)
  },[handleDevices])


  return (
    <div>
      {devices.map((device,key) => (
        <div key = {key}>
          <Webcam audio = {false} videoConstraints = {{deviceId: device.deviceId}}
          />
          {device.label || `Device ${key + 1}` }
          </div>
      ))}
    </div>
  )
}

export default AllCameras;

import './App.css';
import { useState } from 'react'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }
  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', selectedFile)

    const response = await fetch('http://localhost:3000/server/upload', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <input type='file' onChange={handleFileChange}></input>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default App;

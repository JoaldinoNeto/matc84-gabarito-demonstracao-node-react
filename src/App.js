import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    const handleRequest = async () => {
      const res = await axios.get('http://localhost:3003/list')

      setList(res.data)
    }

    handleRequest()
  }, [])

  console.log(list)
  return (
    <div className="App">
      <ul>
        {
          list.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

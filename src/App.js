import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {



  const [text, setText] = useState('')

  const [options, setOptions] = useState([])


  const handleText = (e) => {

    console.log('handleText', e.target.value);
    setText(e.target.value)
  }


  const handleAddOption = () => {
    console.log('handleAddOption', text)



    const tempOptions = options.concat(text);

    setOptions(tempOptions)
    setText('')

  }


  const handleRemoveAll = () => {

    setOptions([])
  }
  const handleRemoveOption = (index) => {

    console.log('handleRemoveOption', index)


    const filteredOptions = options.filter((option, i) => i !== index)


    console.log('filteredOptions', filteredOptions);

    setOptions(filteredOptions)
  }
  return (
    <div className='app-container'>
      <div className='container'>
        <h1>To Do List</h1>


        <button onClick={handleRemoveAll} className='remove-all' disabled={options.length === 0}>Remove All</button>
        {options.map((option, index) => {
          return (<div key={index} className='option'>

            <p>{option}</p>

            <button onClick={() => handleRemoveOption(index)} className='remove-option'>Remove</button>
          </div>)
        })}


        <input type='text' onChange={handleText} value={text} />
        <button onClick={handleAddOption} disabled={!text}>Add Option</button>
      </div>

    </div>
  );
}

export default App;

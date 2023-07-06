import React, {useState} from 'react';
import '../components/style.css'

const form = {
    name : "",
    email: "",
    phone: "",
    skill: ""
}

export default function StudentForm() {
  const [formData, setFormData] = useState(form);
  const [result, setResult] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    setFormData({
        ...formData, 
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
     setShowTable(true)
     e.preventDefault()
     setResult((prevResult) => (prevResult ? [...prevResult, formData] : [formData]));
     setFormData(form);
  }
  
  return (
    <div className='container'>
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
            <h1>Fill up the form</h1>
            <div className='input-div'>
                <input name='name' onChange={handleChange} value={formData.name} type="text" placeholder='Your name?'/>
                <input name='phone' onChange={handleChange} value={formData.phone} type="tel" placeholder='Your phone number?'/>
                <input name='email' onChange={handleChange} value={formData.email} type="email" placeholder='Your email?'/>
                <input name='skill' onChange={handleChange} value={formData.skill} type="text" placeholder='Your skill?'/>
            </div>
            <button type='submit'>SUBMIT</button>
        </form>
        </div>

<div className='table-container'> 
{showTable && ( <div>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Skill</th>
            </tr>
        </thead>

        <tbody>
            {result.map((data, index) => (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.skill}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
)}

      </div>
    </div>
  )
}

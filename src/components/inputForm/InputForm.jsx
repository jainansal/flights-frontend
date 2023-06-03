import React from 'react'
import './inputForm.scss'

function InputForm(props) {

    const [formData, setFormData] = React.useState({
        origin: '',
        destination: '',
        date: ''
    });

    const handleChange = (ev) => {
        ev.preventDefault();
        setFormData(prevData => (
            {
                ...prevData,
                [ev.target.name]: ev.target.value
            }
        ));
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        props.setWelcome(false);
        props.setLoading(true);

        const response = await fetch('https://flights-backend.onrender.com', {
            mode:'cors',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const content = await response.json();

        props.setContent(content);
        props.setLoading(false);
    }

    console.log(formData)

  return (
    <form 
        className='input-form'
        onSubmit={(ev) => handleSubmit(ev)}>
        <input 
            type="text" 
            value={formData.origin}
            name='origin'
            placeholder='Origin IATA'
            onChange={(ev) => handleChange(ev)}
            required={true}
            maxLength={3}
        />
        <input 
            type="text" 
            value={formData.destination}
            name='destination'
            placeholder='Destination IATA'
            onChange={(ev) => handleChange(ev)}
            required={true}
            maxLength={3}
        />
        <input 
            type="date"
            value={formData.date}
            name='date'
            onChange={(ev) => handleChange(ev)}
            required={true}
        />
        <button type='submit'>
            Find flights
        </button>
    </form>
  )
}

export default InputForm

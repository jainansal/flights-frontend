import React from 'react'

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
        const response = await fetch('http://localhost:8000/api/flight', {
            mode:'cors',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
                /*
                    formData : {
                        origin: String,
                        destination: String,
                        date: String
                    }
                */
        });

        const content = await response.json();

        props.setContent(content);
    }

    console.log(formData)

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
        <input 
            type="text" 
            value={formData.origin}
            name='origin'
            placeholder='Origin'
            onChange={(ev) => handleChange(ev)}
            required={true}
        />
        <input 
            type="text" 
            value={formData.destination}
            name='destination'
            placeholder='Destination'
            onChange={(ev) => handleChange(ev)}
            required={true}
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

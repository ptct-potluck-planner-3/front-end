import axios from 'axios';
import React, { useState } from 'react';

const EventForm = () => {

  const initialFormData = {
    potluckName: "",
    date: "",
    time: "",
    location: "",
    //should items be set to an empty array of items?, might be easier to leave as empty string
    items: [],
  }

  const defaultErrors = {
    potluckName: "",
    date: "",
    time: "",
    location: "",
    items: "",

  }

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErros] = useState(defaultErrors);
  const [events, setEvents] = useState([]);

  const handleChange = (e) => {

  //need something for setting errors
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      const newEvent = {
        potluckName: formData.potluckName.trim(),
        date: formData.date,
        time: formData.time,
        location: formData.location,
        items: formData.items,
      }
      axios.post(`http://localhost:5000/api/events`, newEvent)
        .then(res => setEvents([...events, res.data]))
        //initializing form data so slate is clean to add a new event after posting
        setFormData(initialFormData)
        .catch(err => {
          console.log(err)
        })
    }


  }

  return (
    <section>

    </section>
  )
}

export default EventForm;

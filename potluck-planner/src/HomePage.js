import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import { Link } from "react-router-dom";



const HomePage = () => {

  const [event, setEvent] = useState([]);

  useEffect(() => {
    const getEvents = () => {
      axiosWithAuth()
        .get("/api/events")
        .then((res) => {
          setEvent(res.data);
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getEvents()
  }, [])

  return (
    <section>
      <div>
        {event.map((res) => (
          <Link to={`/event/${res.id}`} key={res.id}>

            <section className="eventCard">

            </section>

          </Link>
        ))}
      </div>

    </section>
  )
}

export default HomePage;
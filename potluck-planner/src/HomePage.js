import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./helpers/axiosWithAuth";



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

    </section>
  )
}

export default HomePage;
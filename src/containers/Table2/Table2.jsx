import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

import "./Table2.scss";

const Table2 = () => {


    const USERNAME = 'YOUR_USERNAME';
    const PASSWORD = 'YOUR_PASSWORD';

    // API so'rovining parametrlarini belgilash
    const airport = 'UTTT'; // Toshkent xalqaro aeroportining ICAO kodi
    const begin = Math.floor(new Date('2024-07-01T00:00:00').getTime() / 1000); // Unix vaqt
    const end = Math.floor(new Date('2024-07-01T23:59:59').getTime() / 1000); // Unix vaqt


    const { t } = useTranslation();
    const [flights, setFlights] = useState([]);
    const API = "https://opensky-network.org/api/flights/arrival?airport=IATA&begin=15&end=20"

    useEffect(() => {
        // axios.get(API)
        //     .then(response => {
        //         setFlights(response.data);
        //         console.log(response.data)
        //     })
        //     .catch(error => {
        //         console.error('API xatosi:', error.message);
        //     });

        axios.get('https://opensky-network.org/api/flights/departure', {
            params: {
              airport: airport,
              begin: begin,
              end: end,
            },
            auth: {
              username: USERNAME,
              password: PASSWORD,
            }
          })
          .then(response => {
            console.log('Departures:', response.data);
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              console.log('No flights found for the given period.');
            } else {
              console.error('Error fetching data:', error);
            }
          });
    }, []);

    return (
        <div className="Table">
            <div className="flight-table">
                <h1>{t("tablo.title")}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>{t("tablo.departure")}</th>
                            <th>{t("tablo.arrival")}</th>
                            <th>{t("tablo.airline")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight, index) => (
                            <tr key={index}>
                                <td>{flight.departure}</td>
                                <td>{flight.arrival}</td>
                                <td>{flight.airline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default Table2;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Table.scss";

const Table = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        // API chaqiruvi
        axios.get('API_URL_HERE')
            .then(response => {
                setFlights(response.data); // Ma'lumotlarni holatga o'rnatish
            })
            .catch(error => {
                console.error('API xatosi:', error);
            });
    }, []);

    return (
        <div className="flight-table">
            <h1>Онлайн табло аэропорта Ташкента</h1>
            <table>
                <thead>
                    <tr>
                        <th>Вылет</th>
                        <th>Прибытие</th>
                        <th>Авиакомпания</th>
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
    );
}

export default Table;
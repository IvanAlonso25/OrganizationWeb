import { useState, useEffect } from 'react';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const Table = () => {
    const [inputs, setInputs] = useState(() => {
        const savedInputs = window.localStorage.getItem('inputs');
        return savedInputs ? JSON.parse(savedInputs) : Array(7).fill(Array(3).fill(''));
    });

    useEffect(() => {
        window.localStorage.setItem('inputs', JSON.stringify(inputs));
    }, [inputs]);

    const handleInputChange = (dayIndex, timeIndex, event) => {
        const newInputs = [...inputs];
        newInputs[dayIndex][timeIndex] = event.target.value;
        setInputs(newInputs);
    };

    return (
        <table>
      <thead>
        <tr>
          <th>Horario</th>
          {days.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {['06:30-07:00', '07:00-08:00', '08:00-10:30', '10:30-11:30', '11:30-14:00',
            '14:00-14:30', '14:30-15:00', '15:00-16:30', '16:30:18:00', '18:00-19:00',
            '19:00-20:00', '20:00-20:30', '20:30-23:30'
        ].map((time, timeIndex) => (
          <tr key={timeIndex}>
            <td>{time}</td>
            {days.map((day, dayIndex) => (
              <td key={dayIndex}>
                <input
                  type="text"
                  value={inputs[dayIndex][timeIndex]}
                  onChange={(event) => handleInputChange(dayIndex, timeIndex, event)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
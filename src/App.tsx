import './App.scss';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IStudent from './interfaces/IStudent';

function App() {
  const [studentId, setStudentId] = useState<number>(0);
  const [studentName, setStudentName] = useState<string>('');
  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    let url = 'http://localhost:8000/api/students';
    if (studentId) url += `/${studentId}`;
    else if (studentName) url += '?filter=' + studentName;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => (studentId ? setStudents([data]) : setStudents(data)));
  }, [studentName, studentId]);

  return (
    <div className="App">
      <input
        type="text"
        value={studentName}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setStudentName(e.currentTarget.value)
        }
      />
      <input
        type="number"
        value={studentId}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setStudentId(Number(e.currentTarget.value))
        }
      />
      {/* J'affiche mes étudiants */}
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.firstname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

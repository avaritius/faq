import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tytul, setTytul] = useState('');
  const [rodzaj, setRodzaj] = useState('');

  return (
    <div className="container mt-5">
      <h1>dodaj film</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="tytul" className="form-label">tytul filmu</label>
          <input
            type="text"
            className="form-control"
            id="tytul"
            value={tytul}
            onChange={(e) => setTytul(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rodzaj" className="form-label">rodzaj</label>
          <select
            className="form-select"
            id="rodzaj"
            value={rodzaj}
            onChange={(e) => setRodzaj(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="1">komedia</option>
            <option value="2">obyczajowy</option>
            <option value="3">sensacyjny</option>
            <option value="4">horror</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default App;
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tytul, setTytul] = useState('');
  const [rodzaj, setRodzaj] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ tytul, rodzaj });
  };

  return (
    <div className="container mt-5">
      <h1>dodaj film</h1>
      <form onSubmit={handleSubmit}>
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
            <option value="">wybierz rodzaj</option>
            <option value="Komedia">komedia</option>
            <option value="Dramat">dramat</option>
            <option value="Akcja">akcja</option>
            <option value="Horror">horror</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">dodaj</button>
      </form>
    </div>
  );
}

export default App;
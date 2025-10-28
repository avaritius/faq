import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tytul, setTytul] = useState(''); 

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
      </form>
    </div>
  );
}

export default App;
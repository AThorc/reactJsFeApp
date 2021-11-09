import React, { useState } from "react";
import VisitaDataService from "../services/VisitaService";

const AddVisita = () => {
  const initialVisitaState = {
    id: null,
    luogo: "",
    data_avvio: "",
    data_scadenza: ""
  };
  const [visita, setVisita] = useState(initialVisitaState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setVisita({ ...visita, [name]: value });
  };

  const saveVisita = () => {
    var data = {
      luogo: visita.luogo,
      data_avvio: visita.data_avvio,
      data_scadenza: visita.data_scadenza
    };

    VisitaDataService.create(data)
      .then(response => {
        setVisita({
          id: response.data.id,
          luogo: response.data.luogo,
          data_avvio: response.data.data_avvio,
          data_scadenza: response.data.data_scadenza
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newVisita = () => {
    setVisita(initialVisitaState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newVisita}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Luogo</label>
            <input
              type="text"
              className="form-control"
              id="luogo"
              required
              value={visita.luogo}
              onChange={handleInputChange}
              name="luogo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Data avvio</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={visita.data_avvio}
              onChange={handleInputChange}
              name="data_avvio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Data scadenza</label>
            <input
              type="text"
              className="form-control"
              id="data_scadenza"
              required
              value={visita.data_scadenza}
              onChange={handleInputChange}
              name="data_scadenza"
            />
          </div>

          <button onClick={saveVisita} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddVisita;

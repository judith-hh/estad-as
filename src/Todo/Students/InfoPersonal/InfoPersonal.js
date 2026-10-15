import React, { useState } from 'react';
import './InfoPersonal.css';

function InfoPersonal() {
  const [formData, setFormData] = useState({
    Nombrecompleto: '',
    dob: '',
    Genero: '',
    Direccion: '',
    Telefono: '',
    Telefonodecasa: '',
    nombredelaescuela: '',
    IDestudiante: '',
    Carrera: '',
    Semestre: ''
  });

  const [files, setFiles] = useState({
    INE: null,
    Credencial: null,
    CartaPresentacion: null,
    ConstanciaEstudios: null,
    ActaNacimiento: null,
    CURP: null,
    NumeroSeguroSocial: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleClear = () => {
    setFormData({
      Nombrecompleto: '',
      dob: '',
      Genero: '',
      Direccion: '',
      Telefono: '',
      Telefonodecasa: '',
      nombredelaescuela: '',
      IDestudiante: '',
      Carrera: '',
      Semestre: ''
    });
    setFiles({
      INE: null,
      Credencial: null,
      CartaPresentacion: null,
      ConstanciaEstudios: null,
      ActaNacimiento: null,
      CURP: null,
      NumeroSeguroSocial: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    Object.keys(files).forEach((key) => {
      if (files[key]) dataToSend.append(key, files[key]);
    });

    console.log('Datos listos para enviar:', formData, files);
  };

  return (
    <div className="Form-card">
      <div className="Form-header">
        <div className="Header-icon"></div>
        <div>
          <h2>Registro de estudiantes</h2>
          <p>""</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Informacion Personal */}
        <div className="Form-section">
          <div className="Section-title">
            <span className="Section-icon"></span>
            <h3>Datos Personales</h3>
          </div>
          <div className="Form-grid">
            <div className="Form-group">
              <label>Nombre completo *</label>
              <input
                type="text"
                name="Nombrecompleto"
                placeholder="Nombre completo"
                value={formData.Nombrecompleto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label>Fecha de Nacimiento*</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label>Genero *</label>
              <select
                name="Genero"
                value={formData.Genero}
                onChange={handleChange}
                required
              >
                <option value="">Seleciona Genero</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
              </select>
            </div>
            {/*<div className="Form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="example@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            */}
            <div className="Form-group">
              <label>Direccion*</label>
              <input
                type="text"
                name="Direccion"
                placeholder=""
                value={formData.Direccion}
                onChange={handleChange}
                required
              />
            </div>

            <div className="Form-group">
              <label>Numero de telefono *</label>
              <input
                type="text"
                name="Telefono"
                placeholder="(XXX) XXX-XXXX"
                value={formData.Telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label> Telefono de casa *</label>
              <input
                type="text"
                name="Telefonodecasa"
                placeholder="(XXX) XXX-XXXX"
                value={formData.Telefonodecasa}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Informacion Academica */}
        <div className="Form-section">
          <div className="Section-title">
            <span className="Section-icon"></span>
            <h3>Datos Escolares</h3>
          </div>

          <div className="Form-grid">
            <div className="Form-group">
              <label>Nombre de la escuela*</label>
              <input
                type="text"
                name="nombredelaescuela"
                value={formData.nombredelaescuela}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label>ID de estudiante*</label>
              <input
                type="text"
                name="IDestudiante"
                placeholder="e.g. 2025001"
                value={formData.IDestudiante}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label>Carrera/Especialidad*</label>
              <input
                type="text"
                name="Carrera"
                placeholder=""
                value={formData.Carrera}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label>Semestre</label>
              <select
                name="Semestre"
                value={formData.Semestre}
                onChange={handleChange}
                required
              >
                <option value="">Select Semestre</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            {/*<div className="Form-group">
              <label>*</label>
              <input
                type="date"
                name="enrollmentDate"
                value={formData.enrollmentDate}
                onChange={handleChange}
                required
              />
            </div> */}

            {/*<div className="Form-group">
              <label>Status *</label>
              <select name="status" value={formData.status} onChange={handleChange} required>
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>*/}
          </div>
        </div>

        {/* Documentos */}
        <div className="Form-section">
          <div className="Section-title">
            <span className="Section-icon"></span>
            <h3>Documentos Requeridos</h3>
          </div>
          <div className="Form-grid">
            <div className="Form-group">
              <label>Copia del INE "Mayores de edad"* (Image)</label>
              <input
                type="file"
                name="INE"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
            <div className="Form-group">
              <label>Credencial de la escuela* (Imagen)</label>
              <input
                type="file"
                name="Credencial"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
            <div className="Form-group">
              <label>Carta de Presentacion* (Imagen)</label>
              <input
                type="file"
                name="CartaPresentacion"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
            <div className="Form-group">
              <label>Constancia de estudios* (Imagen)</label>
              <input
                type="file"
                name="ConstanciaEstudios"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
            <div className="Form-group">
              <label>Acta de nacimiento* (Imagen)</label>
              <input
                type="file"
                name="ActaNacimiento"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
            <div className="Form-group">
              <label>CURP* (Imagen)</label>
              <input
                type="file"
                name="CURP"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
            <div className="Form-group">
              <label>Copia del numero de seguro social* (Imagen)</label>
              <input
                type="file"
                name="NumeroSeguroSocial"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="File-input"
              />
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="Form-actions">
          <button type="submit" className="Btn-submit">
            Registro de estudiante
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfoPersonal;
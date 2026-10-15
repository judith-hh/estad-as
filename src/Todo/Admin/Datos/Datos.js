import React, { useState, useMemo } from 'react';
import './Datos.css';

// ---------------------------------------------------------------
// Datos de ejemplo. Reemplázalos con tu API (ver useEffect abajo).
// ---------------------------------------------------------------
/*const MOCK_STUDENTS = [
  {
    id: 1,
    Nombrecompleto: 'María Fernanda López',
    dob: '2003-04-12',
    Genero: 'female',
    Direccion: 'Calle Hidalgo 123, Aguascalientes',
    Telefono: '449 123 4567',
    Telefonodecasa: '449 987 6543',
    nombredelaescuela: 'Universidad Tecnológica de Aguascalientes',
    IDestudiante: '2025001',
    Carrera: 'Ingeniería en Software',
    Semestre: '6',
    status: 'pendiente',
    docs: { INE: '#', Credencial: '#', CartaPresentacion: '#', ConstanciaEstudios: '#', ActaNacimiento: '#', CURP: '#', NumeroSeguroSocial: null }
  },
  {
    id: 2,
    Nombrecompleto: 'Carlos Ramírez Soto',
    dob: '2004-09-30',
    Genero: 'male',
    Direccion: 'Av. Universidad 450, Aguascalientes',
    Telefono: '449 555 0101',
    Telefonodecasa: '449 555 0102',
    nombredelaescuela: 'Instituto Tecnológico de Aguascalientes',
    IDestudiante: '2025002',
    Carrera: 'Industrial',
    Semestre: '8',
    status: 'aprobado',
    docs: { INE: '#', Credencial: '#', CartaPresentacion: '#', ConstanciaEstudios: '#', ActaNacimiento: '#', CURP: '#', NumeroSeguroSocial: '#' }
  }
];*/

const DOC_LABELS = {
  INE: 'INE',
  Credencial: 'Credencial de la escuela',
  CartaPresentacion: 'Carta de presentación',
  ConstanciaEstudios: 'Constancia de estudios',
  ActaNacimiento: 'Acta de nacimiento',
  CURP: 'CURP',
  NumeroSeguroSocial: 'Número de seguro social'
};

const STATUS_LABELS = {
  pendiente: 'Pendiente',
  aprobado: 'Aprobado',
  rechazado: 'Rechazado'
};

function AdminPanel() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [selected, setSelected] = useState(null);

  // Cuando tengas backend:
  // useEffect(() => {
  //   fetch('/api/estudiantes')
  //     .then((res) => res.json())
  //     .then(setStudents)
  //     .catch(console.error);
  // }, []);

  const counts = useMemo(() => ({
    total: students.length,
    pendiente: students.filter((s) => s.status === 'pendiente').length,
    aprobado: students.filter((s) => s.status === 'aprobado').length,
    rechazado: students.filter((s) => s.status === 'rechazado').length
  }), [students]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return students.filter((s) => {
      const matchStatus = statusFilter === 'todos' || s.status === statusFilter;
      const matchSearch =
        !term ||
        s.Nombrecompleto.toLowerCase().includes(term) ||
        s.IDestudiante.toLowerCase().includes(term) ||
        s.nombredelaescuela.toLowerCase().includes(term);
      return matchStatus && matchSearch;
    });
  }, [students, search, statusFilter]);

  const updateStatus = (id, status) => {
    // Con backend: await fetch(`/api/estudiantes/${id}`, { method: 'PATCH', ... })
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev));
  };

  const handleDelete = (id) => {
    if (!window.confirm('¿Eliminar este registro? Esta acción no se puede deshacer.')) return;
    setStudents((prev) => prev.filter((s) => s.id !== id));
    setSelected(null);
  };

  return (
    <div className="Form-card Admin-card">
      <div className="Form-header">
        <div className="Header-icon"></div>
        <div>
          <h2>Panel de administración</h2>
          <p>Revisa los registros de estudiantes y valida sus documentos.</p>
        </div>
      </div>

      {/* Resumen */}

      {/* Filtros */}
      <div className="Admin-toolbar">
        <div className="Form-group Toolbar-search">
          <label htmlFor="buscar">Buscar</label>
          <input
            id="buscar"
            type="text"
            placeholder="Nombre, ID de estudiante o escuela"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="Form-group Toolbar-filter">
          <label htmlFor="estado">Estado</label>
          <select
            id="estado"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="pendiente">Pendientes</option>
            <option value="aprobado">Aprobados</option>
            <option value="rechazado">Rechazados</option>
          </select>
        </div>
      </div>

      {/* Tabla */}
      <div className="Table-wrapper">
        <table className="Admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>ID</th>
              <th>Escuela</th>
              <th>Carrera</th>
              <th>Semestre</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="7" className="Table-empty">
                  No hay registros que coincidan con la búsqueda.
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id}>
                  <td className="Cell-name">{s.Nombrecompleto}</td>
                  <td>{s.IDestudiante}</td>
                  <td>{s.nombredelaescuela}</td>
                  <td>{s.Carrera}</td>
                  <td>{s.Semestre}</td>
                  <td>
                    <span className={`Badge Badge-${s.status}`}>
                      {STATUS_LABELS[s.status]}
                    </span>
                  </td>
                  <td className="Cell-actions">
                    <button
                      type="button"
                      className="Btn-clear"
                      onClick={() => setSelected(s)}
                    >
                      Ver detalle
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Detalle del estudiante */}
      {selected && (
        <div className="Modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="Modal-card"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle de ${selected.Nombrecompleto}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="Modal-header">
              <div>
                <h2>{selected.Nombrecompleto}</h2>
                <span className={`Badge Badge-${selected.status}`}>
                  {STATUS_LABELS[selected.status]}
                </span>
              </div>
              <button
                type="button"
                className="Modal-close"
                aria-label="Cerrar"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>

            <div className="Form-section">
              <div className="Section-title">
                <h3>Datos personales</h3>
              </div>
              <dl className="Detail-grid">
                <div><dt>Fecha de nacimiento</dt><dd>{selected.dob}</dd></div>
                <div><dt>Género</dt><dd>{selected.Genero === 'male' ? 'Hombre' : 'Mujer'}</dd></div>
                <div><dt>Dirección</dt><dd>{selected.Direccion}</dd></div>
                <div><dt>Teléfono</dt><dd>{selected.Telefono}</dd></div>
                <div><dt>Teléfono de casa</dt><dd>{selected.Telefonodecasa}</dd></div>
              </dl>
            </div>

            <div className="Form-section">
              <div className="Section-title">
                <h3>Datos escolares</h3>
              </div>
              <dl className="Detail-grid">
                <div><dt>Escuela</dt><dd>{selected.nombredelaescuela}</dd></div>
                <div><dt>ID de estudiante</dt><dd>{selected.IDestudiante}</dd></div>
                <div><dt>Carrera</dt><dd>{selected.Carrera}</dd></div>
                <div><dt>Semestre</dt><dd>{selected.Semestre}</dd></div>
              </dl>
            </div>

            <div className="Form-section">
              <div className="Section-title">
                <h3>Documentos</h3>
              </div>
              <ul className="Docs-list">
                {Object.keys(DOC_LABELS).map((key) => (
                  <li key={key}>
                    <span>{DOC_LABELS[key]}</span>
                    {selected.docs[key] ? (
                      <a
                        href={selected.docs[key]}
                        target="_blank"
                        rel="noreferrer"
                        className="Doc-link"
                      >
                        Ver imagen
                      </a>
                    ) : (
                      <span className="Doc-missing">No entregado</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Form-actions Modal-actions">
              <button
                type="button"
                className="Btn-danger"
                onClick={() => handleDelete(selected.id)}
              >
                Eliminar
              </button>
              <button
                type="button"
                className="Btn-clear"
                onClick={() => updateStatus(selected.id, 'rechazado')}
              >
                Rechazar
              </button>
              <button
                type="button"
                className="Btn-submit"
                onClick={() => updateStatus(selected.id, 'aprobado')}
              >
                Aprobar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
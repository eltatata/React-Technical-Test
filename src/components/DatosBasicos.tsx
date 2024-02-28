import { useState } from "react";
import { saveChanges } from '../features/users/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';

export default function DatosBasicos() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const [name, setName] = useState<string>(user.name);
  const [rol, setRol] = useState<string>(user.rol);
  const [specialty, setSpecialty] = useState<string>(user.specialty);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !rol || !specialty) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    dispatch(saveChanges({ name, rol, specialty }));
  };

  return (
    <form className="border border-dark rounded w-100 p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          id="input"
          placeholder="Ingrese su nombre"
        />
      </div>
      <div className="mb-3">
        <p className="form-label">Seleccione el rol:</p>
        <div className="form-check form-check-inline">
          <input
            checked={rol === "admin"}
            onChange={(e) => setRol(e.target.value)}
            type="radio"
            id="admin"
            name="rol"
            value="admin"
            className="form-check-input"
          />
          <label htmlFor="admin" className="form-check-label">Admin</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            checked={rol === "user"}
            onChange={(e) => setRol(e.target.value)}
            type="radio"
            id="user"
            name="rol"
            value="user"
            className="form-check-input"
          />
          <label htmlFor="user" className="form-check-label">User</label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="especialidad" className="form-label">Especialidad</label>
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="form-select"
          id="especialidad"
        >
          <option value="">Seleccione una especialidad</option>
          <option value="Programacion">Programación</option>
          <option value="Diseno">Diseño</option>
          <option value="Marketing">Marketing</option>
          <option value="Ventas">Ventas</option>
        </select>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
}
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

export default function Tablero() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className='d-flex'>
      <p className='fw-bold m-4'>{user.name}</p>
      <p className='fw-bold m-4'>{user.rol}</p>
      <p className='fw-bold m-4'>{user.specialty}</p>
    </div>
  );
}

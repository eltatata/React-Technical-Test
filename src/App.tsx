import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import DatosBasicos from './components/DatosBasicos';
import Tablero from './components/Tablero';
import { saveChanges } from './features/users/userSlice';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleSaveChanges = (name: string, rol: string, specialty: string) => {
    dispatch(saveChanges({ name, rol, specialty }));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center border border-dark rounded p-4 my-5 mx-auto w-50">
      <Tablero user={user} />
      <DatosBasicos user={user} onSaveChanges={handleSaveChanges} />
    </div>
  )
}

export default App

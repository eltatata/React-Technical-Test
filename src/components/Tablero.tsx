import { User } from "../features/users/userSlice";

interface TableroProps {
  user: User;
}

export default function Tablero({ user }: TableroProps) {
  return (
    <div className='d-flex'>
      <p className='fw-bold m-4'>{user.name}</p>
      <p className='fw-bold m-4'>{user.rol}</p>
      <p className='fw-bold m-4'>{user.specialty}</p>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import CardComponent from '../components/CardComponent'

const AdminDashboard = () => {
    const navigate = useNavigate();

    const addNewbook = () => {
    navigate('/add-book');
  };
  const getAllBook = () => {
    navigate('/all-books');
  };

  return (
    <>
    <div>
      <CardComponent
      title='Add New Book'
      subtitle='Use this to add new book'
      description='This is a new button'
      buttonText='ADD BOOK'
      buttonOnClick={addNewbook}/>
    </div>

    <div>
      <CardComponent
      title='See all books'
      subtitle='Use this to see all books'
      description='This is a button to show all books'
      buttonText='All books'
      buttonOnClick={getAllBook}/>
    </div>
     </>
  );
}

export default AdminDashboard

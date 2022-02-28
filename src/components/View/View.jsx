import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const [user, setUser] = React.useState({});
  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`https://doxker.na4u.ru/api/get/${id}`).then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);
  return (
    <div className="view">
      <div className="card">
        <div className="card-header">
          <h2>User Contact Detail</h2>
        </div>
        <div className="container">
          <div className="card-block">
            <strong>FIO:</strong>
            <span>{user.user}</span>
          </div>
          <div className="card-block">
            <strong>callNumber:</strong>
            <span>{user.callNumber}</span>
          </div>
          <div className="card-block">
            <strong>timeCall:</strong>
            <span>{user.timeCall}</span>
          </div>
          <div className="card-block">
            <strong>duration:</strong>
            <span>{user.duration}</span>
          </div>
          <div className="card-block">
            <strong>operator:</strong>
            <span>{user.operator}</span>
          </div>
          <div className="card-block">
            <strong>cost:</strong>
            <span>{user.cost}</span>
          </div>
        </div>
        <Link to="/mern-crud-fullstack-client/">
          <div className="btn btn-edit">Go Back</div>
        </Link>
      </div>
    </div>
  );
};

export default View;

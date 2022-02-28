import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import * as uuid from 'uuid';

const Home = () => {
  const [data, setData] = React.useState([]);
  const loadData = async () => {
    const response = await axios.get('https://doxker.na4u.ru/api/get');
    setData(response.data);
  };
  React.useEffect(() => {
    loadData();
  }, []);
  const deleteContact = (id) => {
    if (window.confirm('Are you sure that you wanted to delete that contact ?')) {
      axios.delete(`https://doxker.na4u.ru/api/remove/${id}`);
      toast.success('Contact Deleted Sucessfully');
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div>
      <Link to="/mern-crud-fullstack-client/addContact">
        <div className="add-call">
          <button className="btn btn-add">Add Call Information</button>
        </div>
      </Link>
      <div className="table">
        <table className="table-block">
          <thead>
            <tr className="table-header">
              <th className="header-title">id</th>
              <th className="header-title">FIO</th>
              <th className="header-title">callNumber</th>
              <th className="header-title">timeCall</th>
              <th className="header-title">duration</th>
              <th className="header-title">operator</th>
              <th className="header-title">cost</th>
              <th className="header-title">actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr className="table-body" key={uuid.v4()}>
                <td className="body__item">{i + 1}</td>
                <td className="body__item">{item.user}</td>
                <td className="body__item">{item.callNumber}</td>
                <td className="body__item">{item.timeCall}</td>
                <td className="body__item">{item.duration}</td>
                <td className="body__item">{item.operator}</td>
                <td className="body__item">{item.cost}</td>
                <td className="body__item grid">
                  <Link to={`/mern-crud-fullstack-client/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <Link to="/mern-crud-fullstack-client/">
                    <button className="btn btn-delete" onClick={() => deleteContact(item.id)}>
                      Delete
                    </button>
                  </Link>
                  <Link to={`/mern-crud-fullstack-client/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

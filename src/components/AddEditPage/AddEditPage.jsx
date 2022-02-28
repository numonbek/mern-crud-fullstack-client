import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const initialState = {
  user: '',
  userNumber: '',
  callNumber: '',
  timeCall: '',
  duration: '',
  operator: '',
  cost: '',
};
const AddEditPage = () => {
  let history = useNavigate();
  const [state, setState] = React.useState(initialState);
  const { user, userNumber, callNumber, timeCall, duration, operator, cost } = state;

  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/api/get/${id}`).then((resp) => setState({ ...resp.data[0] }));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !userNumber || !callNumber) {
      //   toast.error('please provide value into each input field');
    } else {
      if (!id) {
        axios
          .post('/api/post', {
            user,
            userNumber,
            callNumber,
            timeCall,
            duration,
            operator,
            cost,
          })
          .then(() => {
            setState(initialState);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success('Contact Added Sucessfully');
      } else {
        axios
          .put(`/api/update/${id}`, {
            user,
            userNumber,
            callNumber,
            timeCall,
            duration,
            operator,
            cost,
          })
          .then(() => {
            setState(initialState);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success('Contact Updated Sucessfully');
      }
      setTimeout(() => history('/mern-crud-fullstack-client/'), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="addeditpage">
      <h2 className="title">AddEditPage</h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="input">
            <span className="input-span">user</span>
            <input
              type="text"
              id="user"
              name="user"
              className="input-inp"
              placeholder="Your Name ..."
              value={user || ''}
              onChange={handleInputChange}
            />
          </label>

          <label className="input">
            <span className="input-span">userNumber</span>
            <input
              type="text"
              id="userNumber"
              name="userNumber"
              className="input-inp"
              placeholder="Your Email ..."
              value={userNumber}
              onChange={handleInputChange}
            />
          </label>

          <label className="input">
            <span className="input-span">callNumber</span>
            <input
              type="text"
              id="callNumber"
              name="callNumber"
              className="input-inp"
              placeholder="Your Contact ..."
              value={callNumber || ''}
              onChange={handleInputChange}
            />
          </label>

          <label className="input">
            <span className="input-span">timeCall</span>
            <input
              type="text"
              id="timeCall"
              name="timeCall"
              className="input-inp"
              placeholder="Your Contact ..."
              value={timeCall || ''}
              onChange={handleInputChange}
            />
          </label>

          <label className="input">
            <span className="input-span">duration</span>
            <input
              type="text"
              id="duration"
              name="duration"
              className="input-inp"
              placeholder="Your Contact ..."
              value={duration || ''}
              onChange={handleInputChange}
            />
          </label>

          <label className="input">
            <span className="input-span">operator</span>
            <input
              type="text"
              id="operator"
              name="operator"
              className="input-inp"
              placeholder="Your Contact ..."
              value={operator || ''}
              onChange={handleInputChange}
            />
          </label>

          <label className="input">
            <span className="input-span">cost</span>
            <input
              type="text"
              id="cost"
              name="cost"
              className="input-inp"
              placeholder="Your Contact ..."
              value={cost || ''}
              onChange={handleInputChange}
            />
          </label>

          <span className="input-buttons">
            <input type="submit" className="btn btn-add" value={id ? 'Update' : 'Save'} />
            <Link to="/mern-crud-fullstack-client/">
              <button className="btn btn-edit">Go Back</button>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddEditPage;

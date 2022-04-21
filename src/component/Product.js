import React, { useState } from 'react';

const Product = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setComment('');
    setRating('');
  };

  const validate = (values) => {
    const errors = {};
    if (values.length < 2) {
      errors.name = (
        <p style={{ color: 'red' }}>*Must be greater than 2 Characters! </p>
      );
    } else if (values.length > 15) {
      errors.name = (
        <p style={{ color: 'red' }}>*Must be less than 15 Characters! </p>
      );
    }
    return errors;
  };

  const onchangename = (e) => {
    setName(e.target.value);
    setErrors(validate(name));
  };

  return (
    <>
      <div className=" container card my-3" style={{ width: '18rem' }}>
        <img
          src="https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          className="rounded"
          alt="Pepsi Soda"
          height="300px"
          width="auto"
          style={{ margin: '8px' }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>Pepsi Soda</b>
            <br />
            <i>“That’s What I Like”</i>
          </h5>
          <p className="card-text">
            <br />
            Thank you for your recent purchase. We hope you love it! If you do,
            would you consider posting an online review? This helps us to
            continue providing great products and helps potential buyers to make
            confident decisions.
          </p>
          <a
            className="btn btn-dark"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            FeedBack
          </a>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Give Feedback
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-3 ">
                <form id="myForm">
                  <legend>Submit Comment</legend>
                  <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">
                      Rating
                    </label>
                    <select
                      id="disabledSelect"
                      className="form-select"
                      onChange={(e) => setRating(e.target.value)}
                      value={rating}
                    >
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                    <div id="emailHelp" className="form-text">
                      Give the Rating Upto 5
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleName" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                      id="exampleInputName"
                      required
                      onChange={onchangename}
                      value={name}
                    />

                    <div id="emailHelp" className="form-text">
                      {errors.name}
                    </div>
                  </div>
                  <div className="mb-3 ">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Comment
                    </label>
                    <br />
                    <textarea
                      type="text"
                      placeholder="Please Enter Your Valuable Feedback..."
                      rows="5"
                      cols="30"
                      style={{ margin: '8px 8px 8px 0px' }}
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                disabled={name.length < 2 || name.length > 15}
                className="btn btn-success"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Well hey <b>{name}</b>, Thanks for your Valuable Feedback!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>"name": {name}</p>
              <p>"Rating": {rating}</p>
              <p>"Comment": {comment}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                id="reset"
                onClick={handleSubmit}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  // creates a field for the form
  // passed to the form as a prop
  renderInput = ({ input, label, meta, touched }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`; // if true then add error class
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Tittle "
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description "
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// validate function is used to validate the form
// formValues will contain all the values of the form (title and description)
const validate = (formValues) => {
  const errors = {};

  // no title
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  // no description
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreateForm', // a unique name for the form
  validate: validate, // validate function
})(StreamCreate);

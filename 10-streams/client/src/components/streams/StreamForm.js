// form to be re-used between StreamEdit and StreamCreate
// both of these components share the same form and logic
// only differ in the form fields they render
// StreamEdit needs the initial title and description

// instead of calling an action creator when its created, it should call some callback that gets passed from the parent component

import React from 'react';
import { Field, Form } from 'react-final-form';

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  // creates a field for the form
  // passed to the form as a prop
  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`; // if true add error class
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  // if form passes validation, we call onSubmit, which calls create stream action
  // want to call a callback function that gets passed from the parent component
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
    // expect the parent to have a callback function called onSubmit
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.title) {
          errors.title = 'You must enter a title';
        }

        if (!formValues.description) {
          errors.description = 'You must enter a description';
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm;

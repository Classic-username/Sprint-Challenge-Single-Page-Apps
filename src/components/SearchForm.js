import React, { useState } from "react";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [ name, setName ] = useState('')


  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

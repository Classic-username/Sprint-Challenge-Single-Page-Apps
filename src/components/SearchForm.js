import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from "axios";

const SearchFormK = ({ errors, touched, values, status }) => {
  // TODO: Add stateful logic for query/form data
  const [ name, setName ] = useState('')

  useEffect(() => {
    if(status) {
      setName(...name, status)
    }
  }, [status])

  //onSubmit={() => onSearch(name)}

  return (
    <section className="search-form">
      <Form >
        <Field 
          component='input' 
          type='text' 
          name='name' 
          placeholder='name'
          values={name}/>
        {/* <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        /> */}
        <button type="submit">Search</button>
      </Form>
    </section>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name }) {
    return{
      name: name || ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('please enter a name')
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    Axios
      .get('https://rickandmortyapi.com/api/character/', values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error(err))
  }
})

const SearchForm = formikHOC(SearchFormK)


export default SearchForm
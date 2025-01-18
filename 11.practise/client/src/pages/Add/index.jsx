import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const oclockSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(2, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Required'),
  image: Yup.string().required('Required'),
});


const BASE_URL = "http://localhost:4000/oclocks"

 const Add = () => {
   
    const [oclocks, setOclocks] = useState([])
   

    const getOclocks = async() => {
    try {
        const res = await axios.get(`${BASE_URL}`)
        setOclocks(res.data)
    } catch (error) {
        console.log(error);
    }
    }

    useEffect(() => {
        getOclocks()
    }, [])

    const handleDelete = async(id) => {
        try {
            const res = await axios.delete(`${BASE_URL}/${id}`)
            if (res.status === 2000) {
                setOclocks([...oclocks].filter((q) => q._id !== id))
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
         <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
    <h1>Add to card</h1>
    <div>
    <Formik 
      initialValues={{
        title: '',
        price: '',
        image: '',
      }}
      validationSchema={oclockSchema}
      onSubmit={async (values) => {
        // same shape as initial values
        console.log(values);
       const posted = await axios.post(`${BASE_URL}`, values)
      }}
    >
      {({ errors, touched }) => (
        <Form style={{display: "flex", flexDirection: "column", gap:"30px", width: "300px", justifyContent: "center"}}>
          <Field name="title" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <Field name="price" />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
          <Field name="image" type="url" />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>

    <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { oclocks.length > 0 && oclocks.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right"><img src={row.image} alt=""  width={100}/></TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><button onClick={() => {window.confirm("are u sure?") &&  handleDelete(row._id) }}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>
        </>
    )
 }

export default Add;
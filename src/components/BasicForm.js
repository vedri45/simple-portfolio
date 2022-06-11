import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});

function BasicForm() {
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            onSubmit={async (values, actions) => {
                await sleep(500);
                let response = await fetch("http://localhost:5000/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(values),
                });
                // alert(JSON.stringify(values, null, 2));
                alert(JSON.stringify("Email successfully sent to recipient!"));
                actions.resetForm();
            }}
        >
            {({ handleSubmit, handleChange, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-light">Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            onChange={handleChange}
                            isValid={touched.name && !errors.name}
                            isInvalid={!!errors.name}
                            placeholder="Full Name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label className="text-light">Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                            placeholder="name@example.com"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-light">Messages</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            name="message"
                            onChange={handleChange}
                            isValid={touched.message && !errors.message}
                            isInvalid={!!errors.message}
                            rows={3}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}

        </Formik>

    )
}

export default BasicForm;

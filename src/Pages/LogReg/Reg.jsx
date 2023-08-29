import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Reg = () => {
  const {createUser} = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.Password.value;
    const email = form.email.value;
    // console.log(form);

    createUser(email, password).then(result => {
      const createdUser = result.user;
      // console.log(createdUser);
    }).catch(error => console.log(error))
  }

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  }
  return (
    <Container>
      <Form className="w-50 mx-auto" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            onClick={handleCheckbox}
            label={<>Accept <Link to='/terms' className="text-decoration-none">Terms & Conditions</Link> </>}
          />
        </Form.Group>
        <Button variant="primary" disabled={!isChecked} type="submit">
          Register
        </Button>
        <br></br>
        <Form.Text className="text-success">
          Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Reg;

import { useState } from "react";
import mydb from "../firebase";
import { collection, addDoc } from "firebase/firestore"

import styles from "./contact.module.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    console.log(name, email, message)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (name.length < 3 || email === '' || message.length < 5) {
            alert('Not filled');
        }
        else {
            alert('filled');
        }

        try {
            const docRef = await addDoc(collection(mydb, "contacts"), {
                client_name: name,
                client_email: email,
                client_message: message,
                created: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error)
        }

        setEmail("")
        setName("")
        setMessage("")
    }

    return (
        <Container>
            <div className={styles.contactdiv}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="forText">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter your email"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>If you wish to know more about me</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Or contact me in a different way</Card.Subtitle>
                        <Card.Text>
                            Here are some quick link where you can find me!
                        </Card.Text>
                        <Card.Link href="https://github.com/ArnasSimairis">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/arnas-šimaitis-b88330250/">Linked In</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    )
}
export default Contact
import styles from "./about.module.css"

import React from "react"
import Container from "react-bootstrap/Container"
import ListGroup from 'react-bootstrap/ListGroup';


const About = () => {
    return (
        <Container>
            <div className={styles.maindiv}>
                <div className={styles.div1}>
                    <h4>Hello, I am Arnas and I am a</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Back-End developer</ListGroup.Item>
                        <ListGroup.Item>Front-End developer</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className={styles.div2}>
                    <h4>My skills with</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item> <h5>HTML</h5> <p>Experienced</p></ListGroup.Item>
                        <ListGroup.Item> <h5>CSS</h5> <p>Experienced</p></ListGroup.Item>
                        <ListGroup.Item> <h5>Bootstrap</h5> <p>Experienced</p></ListGroup.Item>
                        <ListGroup.Item> <h5>JavaScript</h5> <p>Experienced</p></ListGroup.Item>
                        <ListGroup.Item> <h5>React</h5> <p>Basic</p></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Container>

    )
}
export default About
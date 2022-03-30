import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, Container, Row, Card } from "react-bootstrap";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from "./ChatBot.module.css";
import img from "./LOGO.jpg";
import { useState } from "react";
const ChatBot=()=> {
    const [chatIcon,setchatIcon]=useState(true);
    const [chatBody,setchatBody]=useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleDisplay=()=>{
        if(chatIcon==true){
            setchatBody(true);
            setchatIcon(false);
        }
        else{
            setchatBody(false);
            setchatIcon(true);
        }
    }
    return (<>
        <Container className=" d-flex justify-content-end">
            <Row>
                {chatIcon && <FontAwesomeIcon icon={faComment} className={styles.ChatIcon} onClick={handleDisplay}/>}
                {chatBody && <Card style={{ width: '18rem' } } className={styles.ChatCard}>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-around"><h3>Contact Us</h3><Button variant="light" onClick={handleDisplay}>X</Button></Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" className={styles.ChatFormControl} placeholder="eg: John" required onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" className={styles.ChatFormControl} placeholder="eg: example@gmail.com" required onChange={(e) => setEmail(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control type="tel" className={styles.ChatFormControl} placeholder="eg: 1234567890" required onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </Form.Group>
                                <Button variant="outline-danger" type="submit" className={styles.ChatBtn}>
                                    <a href={`https://api.whatsapp.com/send?phone=919704210840&text=Hi I am ${name} with Email ${email} and My phone no. is ${phoneNumber}`} className={styles.ChatLink}><FontAwesomeIcon icon={faWhatsapp} className={styles.ChatWhatsappIcon}/> Chat with Us</a>
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>}
            </Row>
        </Container>

    </>);
}

export default ChatBot;
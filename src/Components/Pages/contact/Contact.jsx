import Container from "react-bootstrap/esm/Container";
import gsap from "gsap"
import Form from 'react-bootstrap/Form'
import './contact.css'
import Button from "../../../ui/Button";
import sent from "../../../assets/images/sent.png"
import { collection , addDoc , serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger : ".contact",
                scroller: "body",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        tl.from(".contact-para", {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        })

        .from(".contact-heading", {
            y: 70,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.2")

        .from(".form-main-text-para", {
            x: -60,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.3")
        .from(".contact-links", {
            x: -60,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "1")
        .from(".form", {
            x: 60,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5")
    })
    const handleSubmit = async(e) =>{
        e.preventDefault();

        const form = e.currentTarget;
        const name = form.name.value.trim();
        const message = form.message.value.trim();
        setIsSubmitting(true);
        try{
            await addDoc(collection(db, "contacts"), {
                name : name,
                message : message,
                sendAt : serverTimestamp()
            });
            console.log("Form Submitted");
            form.reset();
            setIsSubmitted(true);
        }
        catch(error){
            console.error("Error submitting form: ", error)
        }
        finally {
            setIsSubmitting(false);
        }
    }
  return (
    <Container fluid className="lg contact">
        <p className="contact-para">Contact</p>
        <h1  className="contact-heading">Let's Build Together</h1>
        <div className="form-main">
            <div className="form-main-text">
                <p className="form-main-text-para">
                    Have an idea, project, or collaboration in mind?
                    Send me a message and let’s create something clean,
                    modern, and impactful together.
                </p>
                <div className="contact-links">
                    <a href="mailto:suvambhadra20032005@gmail.com" className="contact-link">
                        <FontAwesomeIcon icon={faEnvelope} alt= "mail"/>
                    </a>
                    <a href="https://wa.me/917439164378" target="_blank" rel="noreferrer" className="contact-link">
                        <FontAwesomeIcon icon={faWhatsapp} alt= "mail"/>
                    </a>
                    <a href="https://www.linkedin.com/in/suvam-bhadra/" className="contact-link">
                        <FontAwesomeIcon icon={faLinkedinIn} alt= "mail"/>
                    </a>
                </div>
            </div>
            <div className="form-main-form">
                <div className="form">
                    {!isSubmitted ? (
                    <Form onSubmit={handleSubmit}>
                        <h4 className="form-heading">Send Message<span className="direct">Direct</span></h4>
                        <p className="form-para">Your message opens directly in WhatsApp - no spam, just real connections</p>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="name" placeholder="Your Name" className="name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" name="message" rows={3} placeholder="Write your message..." className="message" />
                        </Form.Group>
                        <Button type="submit" variant= "form-btn" classname= "form-btn" disabled= {isSubmitting}>
                            <img src= {sent} alt="sent" className="form-btn-img" />
                            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                        </Button>
                    </Form>
                    ): (
                        <div className="form-success">
                            <div className="success-icon">
                                ✓
                            </div>
                            <h3>Message Sent!</h3>
                            <p>Thanks for reaching out, <strong>your message has been received.</strong>
                                I'll get back to you as soon as possible.
                            </p>
                            <button type="button" className="send-another" onClick={() => setIsSubmitted(false)}>SEND ANOTHER MESSAGE</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Contact
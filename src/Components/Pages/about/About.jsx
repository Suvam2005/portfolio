import Container from "react-bootstrap/esm/Container"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import Button from "../../../ui/Button"
import './about.css'
import { useRef } from "react"
import { SiReact , SiNextdotjs , SiTypescript, SiTailwindcss } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faWindowMaximize , faTableColumns } from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger , TextPlugin);
const About = ({onAboutClick}) => {
  const cardRef = useRef(null);
  const reactRef = useRef(null);
  const nextRef = useRef(null);
  const tsRef = useRef(null);
  const tailwindRef = useRef(null);
  const codeRef = useRef(null);
  const cardTl = useRef(null);
  useGSAP(() => {
    // const mm = gsap.matchMedia();
    cardTl.current = gsap.timeline({ paused: true });

    cardTl.current.to(
      ".developer-visual",
      {
        y: 30,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".open-work-para",
      {
        text: "",
      },
      {
        text: "AVAILABLE FOR WORK",
        duration: 1,
        scrollTrigger: {
          trigger: ".open-work-para",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".front-end",
      {
        y: 100,
        x: -25,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".p-text",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".p-text",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".developer-visual",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".developer-visual",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(reactRef.current, {
      y: -15,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(nextRef.current, {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.3,
    });

    gsap.to(tsRef.current, {
      y: -12,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });
    gsap.to(tailwindRef.current, {
      y: 13,
      duration: 2.7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.2,
    });
    const visual = document.querySelector(".developer-visual");
    const moveVisual = (e) => {
      if (!visual) return;
      const rect = visual.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) / 30;
      const moveY = (y - centerY) / 30;
      gsap.to(codeRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(reactRef.current, {
        x: moveX * 1.8,
        y: moveY * 1.8,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(nextRef.current, {
        x: moveX * -1.5,
        y: moveY * -1.5,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(tsRef.current, {
        x: moveX * 1.4,
        y: moveY * 1.4,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(tailwindRef.current, {
        x: moveX * -1.3,
        y: moveY * -1.3,
        duration: 0.6,
        ease: "power3.out",
      });
    };
    visual?.addEventListener("mousemove", moveVisual);
    return () => {
      visual?.removeEventListener("mousemove", moveVisual);
    };
  }, []);
  return (
    <Container fluid className="lg about">
      <div className="left-cont">
        <p className="open-work-para"></p>
        <h1 className="front-end">FullStack Developer</h1>
        <div className="p-texts">
          <p className="p-text">
            Building modern websites with clean, responsive,
            elegant interfaces. Turning ideas and designs into
            engaging digital expiriences.
          </p>
        </div>
          <div className="buttons">
            <Button variant= "glass" classname= "btns btn-1">Next.js</Button>
            <Button variant= "glass" classname= "btns btn-2">React.js</Button>
            <Button variant= "glass" classname= "btns btn-3">Typescript</Button>
            <Button variant= "glass" classname= "btns btn-4">Tailwind CSS</Button>
          </div>
          <div className="buttons-2">
            <Button variant= "action-btns" classname = "show-card-btn" onClick={onAboutClick}>About Me</Button>
          </div>
      </div>
      <div className="right-cont-main">
        <div className="developer-visual" ref={cardRef}>
          <div className="dots-bg"></div>
          <div className="orange-glow"></div>
          <div className="code-window" ref={codeRef}>
            <div className="code-header">
              <div className="window-dots">
                <span className="close-dot">
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <span className="maximize-dot">
                  <FontAwesomeIcon icon={faWindowMaximize} />
                </span>
                <span className="split-dot">
                  <FontAwesomeIcon icon={faTableColumns} />
                </span>
              </div>
              <div className="file-name">
                developer.jsx
              </div>
            </div>
            <div className="code-body">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="purple">import</span>{" "}
                React <span className="purple">from</span>{" "}
                <span className="green">'react'</span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="purple">export default</span>{" "}
                <span className="blue">function</span>{" "}
                <span className="yellow">Developer</span>() {"{"}
              </div>
              <div className="code-line indent">
                <span className="line-number">4</span>
                <span className="purple">return</span> (
              </div>
              <div className="code-line indent-2">
                <span className="line-number">5</span>
                <span className="blue">
                  &lt;section
                </span>{" "}
                <span className="orange">className</span>=
                <span className="green">"developer"</span>
                <span className="blue">&gt;</span>
              </div>
              <div className="code-line indent-3">
                <span className="line-number">6</span>
                <span className="blue">&lt;h1&gt;</span>
                <span className="white">Full Stack Developer</span>
                <span className="blue">&lt;/h1&gt;</span>
              </div>
              <div className="code-line indent-3">
                <span className="line-number">7</span>
                <span className="blue">&lt;p&gt;</span>
                <span className="white">Building digital experiences.</span>
                <span className="blue">&lt;/p&gt;</span>
              </div>
              <div className="code-line indent">
                <span className="line-number">8</span>
                <span className="blue">&lt;/section&gt;</span>
              </div>
              <div className="code-line indent">
                <span className="line-number">9</span>
                )
              </div>
              <div className="code-line">
                <span className="line-number">10</span>
                {"}"}
              </div>
            </div>
          </div>
          <div className="tech-icon react-icon" ref={reactRef}>
            <SiReact />
          </div>
          <div className="tech-icon next-icon" ref={nextRef}>
            <SiNextdotjs />
          </div>
          <div className="tech-icon ts-icon" ref={tsRef}>
            <SiTypescript />
          </div>
          <div className="tech-icon tailwind-icon" ref={tailwindRef}>
            <SiTailwindcss />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
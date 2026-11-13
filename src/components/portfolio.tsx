"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useReducedMotion} from "motion/react";
import {ReactLenis} from "lenis/react";
import {ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Mail, Menu, Sparkles, X} from "lucide-react";
import {projects, profileLinks} from "@/data/projects";

const technologies = ["React", "Next.js", "Node.js", "TypeScript", "Java", "Python", "SQL", "Git"];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [{href: "#home", label: "Home"}, {href: "#projects", label: "Projects"}, {
        href: "#contact",
        label: "Contact"
    }];
    return (
        <header className="site-header">
            <a className="brand" href="#home" aria-label="Tharindu Dilshan, back to home"><span className="brand-mark">td<span>.</span></span><span
                className="brand-caption">FULL-STACK<br/>SOFTWARE ENGINEER</span></a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen} aria-controls="main-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
            <nav id="main-navigation" className={`navigation${menuOpen ? " navigation-open" : ""}`}
                 aria-label="Main navigation">{links.map((link, index) => <a key={link.href} href={link.href}
                                                                             onClick={() => setMenuOpen(false)}><span
                className="nav-index">0{index + 1}</span>{link.label}</a>)}<a className="nav-availability"
                                                                              href="/resume.txt"
                                                                              download><span/> Download
                résumé <ArrowUpRight/></a></nav>
        </header>
    );
}

function CodeWindow() {
    return <div className="code-scene" aria-label="Decorative animated code editor" role="img">
        <div className="orbit orbit-one"/>
        <div className="orbit orbit-two"/>
        <div className="scene-glow"/>
        <div className="code-window">
            <div className="window-top">
                <div className="window-dots"><i/><i/><i/></div>
                <span>~/tharindu/portfolio.tsx</span><span className="window-language">TSX</span></div>
            <div className="code-content">
                <div className="code-line"><span className="line-num">01</span><span><i
                    className="code-purple">const</i> <i className="code-blue">developer</i> = {'{'}</span></div>
                <div className="code-line"><span className="line-num">02</span><span className="indent"><i
                    className="code-cyan">name</i>: <i className="code-green">&quot;Tharindu Dilshan&quot;</i>,</span>
                </div>
                <div className="code-line"><span className="line-num">03</span><span className="indent"><i
                    className="code-cyan">focus</i>: <i className="code-green">&quot;full-stack&quot;</i>,</span></div>
                <div className="code-line"><span className="line-num">04</span><span className="indent"><i
                    className="code-cyan">building</i>: [</span></div>
                <div className="code-line"><span className="line-num">05</span><span className="indent deeper"><i
                    className="code-green">&quot;useful things&quot;</i>,</span></div>
                <div className="code-line"><span className="line-num">06</span><span className="indent deeper"><i
                    className="code-green">&quot;better systems&quot;</i>,</span></div>
                <div className="code-line"><span className="line-num">07</span><span className="indent">],</span></div>
                <div className="code-line"><span className="line-num">08</span><span><i
                    className="code-purple">return</i> <i className="code-blue">curiosity</i> + <i
                    className="code-blue">code</i>;</span></div>
                <div className="code-line"><span className="line-num">09</span><span>{'}'}<span
                    className="cursor-blink">▋</span></span></div>
            </div>
            <div className="window-bottom"><span><span
                className="status-pip"/> All systems curious</span><span>UTF-8&nbsp; · &nbsp;Ln 09, Col 2</span></div>
        </div>
        <div className="float-chip chip-react"><span>⚛</span> React</div>
        <div className="float-chip chip-java"><span>◈</span> Java</div>
        <div className="float-chip chip-python"><span>⌘</span> Python</div>
        <div className="scene-coordinate">BUILDING WITH INTENTION&nbsp; · &nbsp;ALWAYS LEARNING</div>
    </div>;
}

function Reveal({children, className = ""}: { children: React.ReactNode; className?: string }) {
    const reduceMotion = useReducedMotion();
    return <motion.div className={className} initial={reduceMotion ? false : {opacity: 0, y: 22}}
                       whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.14}}
                       transition={{duration: 0.65, ease: [0.22, 1, 0.36, 1]}}>{children}</motion.div>;
}

function Hero() {
    const reduceMotion = useReducedMotion();
    return <section className="hero-section" id="home">
        <div className="hero-grid"/>
        <div className="hero-copy">
            <motion.div className="availability-label" initial={reduceMotion ? false : {opacity: 0, y: 8}}
                        animate={{opacity: 1, y: 0}} transition={{duration: reduceMotion ? 0 : .5}}><span
                className="pulse-dot"/>OPEN TO OPPORTUNITIES
            </motion.div>
            <motion.h1 initial={reduceMotion ? false : {opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{
                delay: reduceMotion ? 0 : .1,
                duration: reduceMotion ? 0 : .8,
                ease: [0.22, 1, 0.36, 1]
            }}>Building Digital<br/>Experiences<br/><span className="headline-last">Through <span
                className="gradient-word">Code<span className="period">.</span></span></span></motion.h1>
            <motion.p className="hero-intro" initial={reduceMotion ? false : {opacity: 0}} animate={{opacity: 1}}
                      transition={{delay: reduceMotion ? 0 : .36, duration: reduceMotion ? 0 : .65}}>Hi,
                I&apos;m <strong>Tharindu Dilshan</strong> — an aspiring full-stack software engineer passionate about
                building modern web applications, scalable systems, and meaningful digital experiences.
            </motion.p>
            <motion.div className="hero-actions" initial={reduceMotion ? false : {opacity: 0, y: 12}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: reduceMotion ? 0 : .5, duration: reduceMotion ? 0 : .55}}><a
                className="button button-primary" href="#projects">Explore my work <ArrowDownRight/></a><a
                className="button button-quiet" href="#contact">Let&apos;s connect <ArrowUpRight/></a><a
                className="button button-quiet" href="/resume.txt" download>Download résumé <ArrowUpRight/></a>
            </motion.div>
            <div className="identity-line">
                <span>FULL-STACK DEVELOPMENT</span><i/><span>SOFTWARE ENGINEERING</span><i/><span>CLOUD TECHNOLOGY</span>
            </div>
        </div>
        <motion.div className="hero-art" initial={reduceMotion ? false : {opacity: 0, scale: .96}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: reduceMotion ? 0 : .24, duration: reduceMotion ? 0 : 1}}><CodeWindow/>
        </motion.div>
        <a className="scroll-cue" href="#projects" aria-label="Scroll to selected projects"><span
            className="scroll-cue-line"/>SCROLL TO EXPLORE<ArrowDown/></a><span className="hero-coordinate">BUILD · REFINE · REPEAT</span>
    </section>;
}

function Intro() {
    const reduceMotion = useReducedMotion();
    const [imageLoaded, setImageLoaded] = useState(false);
    const portraitImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const image = portraitImageRef.current;
        if (image?.complete && image.naturalWidth > 0) setImageLoaded(true);
    }, []);

    return (
        <Reveal className="portrait-editorial">
            <motion.figure
                className="portrait-figure"
                initial={reduceMotion ? false : {opacity: 0, y: 22}}
                whileInView={{opacity: 1, y: 0}}
                whileHover={reduceMotion ? undefined : {scale: 1.012}}
                viewport={{once: true, amount: 0.28}}
                transition={{duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1]}}
            >
                <div className="portrait-glow" aria-hidden="true"/>
                <span className="portrait-index">01 / PERSONAL</span>
                <div className="portrait-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element -- use the original public portrait without Next.js optimization */}
                    <img
                        src="/images/profile.jpg"
                        alt="Portrait of Tharindu Dilshan"
                        ref={portraitImageRef}
                        loading="lazy"
                        decoding="async"
                        className={`portrait-image${imageLoaded ? " portrait-image-loaded" : ""}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className="portrait-shade" aria-hidden="true"/>
                </div>
                <figcaption className="portrait-float-label"><span/>THE DEVELOPER BEHIND THE CODE</figcaption>
            </motion.figure>
            <div className="editorial-content">
                <h2 className="editorial-heading">A NOTE FROM ME</h2>
                <motion.div
                    className="editorial-separator"
                    aria-hidden="true"
                    initial={reduceMotion ? false : {scaleX: 0, opacity: 0.45}}
                    whileInView={{scaleX: 1, opacity: 1}}
                    viewport={{once: true, amount: 0.8}}
                    transition={{
                        duration: reduceMotion ? 0 : 0.8,
                        delay: reduceMotion ? 0 : 0.18,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                />
                <p className="intro-body">I like the part where a rough idea turns into something <span>real</span> —
                    considered at the edges, dependable underneath, and genuinely <span>useful</span> to the person
                    using it.</p>
                <div className="editorial-signature"><span>T.D.</span><span>CURIOUS BY DEFAULT</span></div>
                <div className="tech-strip editorial-toolkit">
                    <span className="tech-heading">IN MY TOOLKIT</span>
                    <div className="tech-list">{technologies.map((technology, index) => <span
                        key={technology}><i>0{index + 1}</i>{technology}</span>)}</div>
                    <Code2 className="tech-icon" aria-hidden="true"/>
                </div>
            </div>
        </Reveal>
    );
}

function ProjectVisual({kind, accent}: { kind: string; accent: string }) {
    return <div className={`project-visual visual-${kind} accent-${accent}`} aria-hidden="true">
        <div className="visual-noise"/>
        {kind === "city" && <>
            <div className="city-map"><span/><span/><span/><span/><span/><span/></div>
            <div className="city-ui">
                <div className="mini-sidebar"><b>sc.</b><i/><i/><i/><i/></div>
                <div className="mini-main">
                    <div className="mini-top"><span>Overview</span><span>•••</span></div>
                    <div className="mini-stat-row">
                        <div>ACTIVE SERVICES<strong>24</strong><b>+12%</b></div>
                        <div>RESPONSE TIME<strong>1.8s</strong><b>LIVE</b></div>
                        <div>OPERATIONS<strong>96%</strong><b>+4.2%</b></div>
                    </div>
                    <div className="mini-chart">
                        <div className="chart-label">City activity <span>THIS WEEK ↗</span></div>
                        <svg viewBox="0 0 380 85" preserveAspectRatio="none">
                            <path
                                d="M0 67 C24 60 32 64 52 45 S89 64 116 41 S153 54 184 27 S213 46 244 20 S286 32 308 14 S355 32 380 4"
                                fill="none" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="visual-stamp">01 — CITY SYSTEMS</div>
        </>}{kind === "neural" && <>
        <div className="neural-core">
            <div className="neural-orbit orbit-a"/>
            <div className="neural-orbit orbit-b"/>
            <div className="neural-orbit orbit-c"/>
            <span>ND<span>·</span></span></div>
        <div className="neural-label label-top">LIVE TELEMETRY <span>●</span></div>
        <div className="neural-label label-bottom">ENGINE MODEL&nbsp; / &nbsp;V.02<br/><strong>OPTIMIZATION
            READY</strong></div>
        <div className="visual-stamp">02 — PREDICTIVE MOTION</div>
    </>}{kind === "education" && <>
        <div className="edu-ui">
            <div className="edu-top"><span>adyapana<span
                className="edu-dot">.</span></span><span>● &nbsp;ADMIN PORTAL</span></div>
            <div className="edu-greeting">Good morning, <b>Admin.</b></div>
            <div className="edu-overview">Your school, at a glance.</div>
            <div className="edu-cards">
                <div><span>STUDENTS</span><b>1,284</b><i>↗ 8.2%</i></div>
                <div><span>ATTENDANCE</span><b>94.8%</b><i>+2.4%</i></div>
                <div><span>COLLECTIONS</span><b>Rs 2.4M</b><i>On track</i></div>
            </div>
            <div className="edu-table"><span>RECENT ACTIVITY</span><i/><i/><i/></div>
        </div>
        <div className="visual-stamp">03 — LEARNING, ORGANIZED</div>
    </>}{kind === "future" && <>
        <div className="future-cross">+</div>
        <div className="future-orbit"/>
        <div className="future-core"><span>↗</span></div>
        <div className="future-label">GOOD THINGS<br/><strong>TAKE SHAPE.</strong></div>
        <div className="visual-stamp">04 — NEXT UP</div>
    </>}</div>;
}

function Projects() {
    return <section className="projects-section" id="projects">
        <div className="section-topline"><span><i className="section-dot"/>SELECTED WORK &nbsp;·&nbsp; A FEW THINGS I CARE ABOUT</span><span>SELECTED PROJECTS</span>
        </div>
        <Reveal className="projects-heading">
            <div><span className="eyebrow">THOUGHTFUL BY DESIGN. USEFUL BY NATURE.</span><h2>Things
                I&apos;ve<br/><span>Built.</span></h2></div>
            <p>Turning ideas into functional, scalable and meaningful digital solutions.<br/><span>Preview visuals are concepts; project links are placeholders.</span>
            </p></Reveal>
        <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.number}
                                                                                 className={`project-card project-card-${index + 1}`}>
            <article>
                <div className="project-hit-area">
                    <div className="project-top"><span
                        className="project-number">{project.number}<span> / 04</span></span><span
                        className="project-category">{project.category}</span><span
                        className="project-arrow"><ArrowUpRight/></span></div>
                    <ProjectVisual kind={project.visual} accent={project.accent}/>
                    <div className="project-details">
                        <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight
                            className="title-arrow"/></div>
                        <p>{project.description}</p>
                        <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        <div className="project-links" role="group" aria-label="Project links">{project.github ?
                            <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight/></a> :
                            <span>GitHub · add URL</span>}{project.demo ?
                            <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight/></a> :
                            <span>Live demo · add URL</span>}</div>
                    </div>
                </div>
            </article>
        </Reveal>)}</div>
        <div className="projects-foot"><span>MORE IDEAS IN THE WORKS<span className="foot-star">✳</span></span><span>GOOD CODE IS NEVER REALLY FINISHED.</span>
        </div>
    </section>;
}

function ContactForm() {
    const [status, setStatus] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = String(form.get("name") ?? "").trim();
        const email = String(form.get("email") ?? "").trim();
        const subject = String(form.get("subject") ?? "").trim();
        const message = String(form.get("message") ?? "").trim();
        const body = `Hi Tharindu,\n\n${message}\n\n— ${name}\n${email}`;
        window.location.href = `mailto:${profileLinks.email.replace("mailto:", "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("Your email app is opening with your message. I can’t wait to read it.");
    };
    return <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-heading"><span>01 / YOUR DETAILS</span><span>ALL FIELDS REQUIRED</span></div>
        <label htmlFor="name">YOUR NAME<input id="name" name="name" type="text" autoComplete="name"
                                              placeholder="Ada Lovelace" maxLength={80} required/></label><label
        htmlFor="email">EMAIL ADDRESS<input id="email" name="email" type="email" autoComplete="email"
                                            placeholder="ada@example.com" maxLength={120} required/></label><label
        htmlFor="subject">WHAT&apos;S ON YOUR MIND?<input id="subject" name="subject" type="text"
                                                          placeholder="A project, an idea, a hello…" maxLength={120}
                                                          required/></label><label htmlFor="message">A LITTLE MORE
        DETAIL<textarea id="message" name="message" placeholder="Tell me what you’re thinking about…" rows={4}
                        maxLength={2000} required/></label>
        <button className="form-submit" type="submit">Send a message <ArrowUpRight/></button>
        <p className="form-note" role="status" aria-live="polite">{status}</p></form>;
}

function Contact() {
    const socials = [{name: "LinkedIn", href: profileLinks.linkedin, icon: Sparkles}, {
        name: "GitHub",
        href: profileLinks.github,
        icon: Code2
    }, {name: "Facebook", href: profileLinks.facebook, icon: Sparkles}];
    return <section className="contact-section" id="contact">
        <div className="contact-orb orb-one"/>
        <div className="contact-orb orb-two"/>
        <div className="section-topline"><span><i className="section-dot"/>THE NEXT GOOD THING STARTS HERE</span><span>03 / 03</span>
        </div>
        <div className="contact-main"><Reveal className="contact-copy"><span className="eyebrow">HAVE AN IDEA? A QUESTION? A GOOD BOOK?</span>
            <h2>Have an Idea?<br/>Let&apos;s Build<br/><span>Something Great.</span></h2><p>I&apos;m always interested
                in exploring new technologies, collaborating on creative projects, and building impactful digital
                products.</p><a className="email-link" href={profileLinks.email}><span
                className="email-icon"><Mail/></span><span><i>THE DIRECT ROUTE</i><strong>dilshan.vithanaarachchi@gmail.com</strong></span><ArrowUpRight/></a>
            <div className="social-links">{socials.map(({name, href, icon: Icon}) => {
                const content = <><Icon/>{name}<i>{href ? "VISIT" : "ADD URL"}</i></>;
                return href ? <a key={name} href={href} target="_blank" rel="noreferrer"
                                 aria-label={`Visit Tharindu on ${name}`}>{content}</a> :
                    <span key={name} title={`${name} profile URL not provided`}>{content}</span>;
            })}</div>
            <p className="placeholder-note">Update the example email and add your profile URLs
                in <code>src/data/projects.ts</code>.</p></Reveal><Reveal className="contact-form-wrap">
            <div className="form-top"><span>02 / LET&apos;S TALK</span><span>USUALLY REPLY WITHIN A DAY <i>↗</i></span>
            </div>
            <ContactForm/></Reveal></div>
        <footer className="site-footer"><a className="footer-brand"
                                           href="#home">td<span>.</span></a><span>DESIGNED &amp; BUILT BY THARINDU DILSHAN<br/>A LITTLE EXTRA CARE, IN EVERY DETAIL.</span><span>© 2026<br/>BUILT ON CURIOSITY.</span><a
            className="back-top" href="#home">BACK TO TOP <ArrowUpRight/></a></footer>
    </section>;
}

export default function Portfolio() {
    const reduceMotion = useReducedMotion();
    const animateScroll = reduceMotion !== true;
    return <ReactLenis root options={{lerp: 0.09, smoothWheel: animateScroll, anchors: animateScroll}}><Header/>
        <main><Hero/>
            <div className="home-section"><Intro/></div>
            <Projects/><Contact/></main>
    </ReactLenis>;
}

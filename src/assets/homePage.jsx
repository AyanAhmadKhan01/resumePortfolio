'use client'

import { Link } from "react-router"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, CalendarDays, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="pageDiv">
        <div className="wrapper">
          <img
            src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1738516789/dr38ccxejrev185h0inp.jpg"
            alt="Background"
            className="backgroundImg"
          />

          <motion.div
            className={`profile-section-container ${isSticky ? 'sticky-nav' : ''}`}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/166162914?v=4"
              alt="Profile"
              className={`profile-section-image ${isSticky ? 'smallIcon' : ''}`}
            />
            <h2 className={`profile-title ${isSticky ? 'smallText' : ''}`}>Ayan Ahmad Khan</h2>
            {!isSticky && (
              <motion.p
                className="profile-desc"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                Hey there! I'm Ayan Ahmad Khan, a passionate <span>MERN stack</span> developer.
              </motion.p>
            )}

            <h6 className={`location ${isSticky ? 'left-badge' : ''}`}><MapPin size={18}/> Bengaluru, India</h6>

            {isSticky && (
              <motion.div
                className="nav-right"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <a href="https://x.com/DevLegend_" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                </a>
                <a href="https://github.com/AyanAhmadKhan01" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/ayanahmadkhan" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </motion.div>
            )}
          </motion.div>

          <motion.h3
            className="project-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            Projects <h2 className="badge-projects">
  <CalendarDays className="project-icon" size={18} />
  2023 – <span> Present</span>
</h2>
          </motion.h3>


          <div className="grid-container">
            {[
               {
                href: "https://solar-system-three-js-eight.vercel.app",
                tag: "Completed",
                title: "Solar System 3D",
                desc: "A visually interactive 3D simulation of the solar system built with Three.js. It features orbiting planets, dynamic controls, and an immersive space environment designed for educational and exploratory purposes.",
                tags: ["#Three.js", "#Javascript" ,"#HTML", "#CSS"],
                image: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1751898048/rzwmyoq0ainoazczpzqn.png",
                wrapperClass: "solar-wrapper",
                   timeline: 'July 2025',
                tagClass: "solar-tag",

              },
              {
                href: "#",
                tag: "Working On",
                title: "Mess Management",
                desc: "A web-based system to manage canteen operations, track daily attendance, log meals, and organize food-related data efficiently.",
                tags: ["#NextJs", "#Shadcn" ,"#TailWind", "#Express", "#Nodejs", "#MongoDB"],
                image: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1751288371/nrdtax7jdqcvhwde0xiu.png",
                wrapperClass: "mess-wrapper",
                   timeline: 'June 2025 - Present ',
                tagClass: "mess-tag",

              },
              {
                href: "https://levelcard.vercel.app",
                tag: "Under Development",
                title: "Level Card",
                desc: "A no-code platform to build and deploy your portfolio in one click, featuring built-in analytics and messaging tools.",
                tags: ["#NextJs", "#TailWind", "#Redux", "#Express", "#Nodejs", "#MongoDB"],
                image: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748003658/aabeefcnbg3iphuce1fe.png",
                wrapperClass: "level-card-wrapper",
                tagClass: "dev-tag",
                timeline: 'Feb 2025 - Present ',
                titleSpanClass: "lvl-span"
              },
              {
                href: "https://dreamwallv2.vercel.app/home",
                tag: "Completed",
                title: "DreamWall",
                desc: "A platform where users can upload, explore, and share wallpapers",
                tags: ["#ReactJs", "#Css", "#Express", "#Nodejs", "#MongoDB"],
                image: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748005188/thceyarmn8dld2glwe7w.png",
                wrapperClass: "dream-wrapper",
                   timeline: 'November 2024 - January 2025',
                tagClass: "dreamwall"
              },
              {
                href: "https://kadogg.vercel.app/",
                tag: "Completed",
                title: "Kado.gg",
                desc: "A guide website dedicated to Kado Bot, offering in-depth explanations of its Discord commands, rules, and card showcases.",
                tags: ["#React", "#MongoDB", "#Express", "#Nodejs"],
                image: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748005446/c0wi8oz914fr16qduzhr.png",
                wrapperClass: "kado-wrapper",
                   timeline: 'October 2024 - November 2024',
                tagClass: "dreamwall"
              },
              {
                href: "https://todolist-brown-pi.vercel.app/",
                tag: "Completed",
                title: "To Do List",
                desc: "Your Own Custom To-do-List, and you can customize it according to your preferences",
                tags: ["#HTML", "#CSS", "#Javascript"],
                image: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748009620/nufv16guy3umtgbjr5ed.png",
                wrapperClass: "todo-wrapper",
                   timeline: 'July 2024',
                tagClass: "dreamwall"
              }
            ].map((proj, index) => (
              <motion.div
                key={index}
                className="grid-item"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15 }}
              >
                <a href={proj.href} target="_blank" rel="noopener noreferrer">
                  <div className={`grid-item-wrapper ${proj.wrapperClass}`}>
                    <span className={proj.tagClass}>{proj.tag}</span>
                    <h4 className="grid-item-title">
                      {proj.title}
                      {proj.titleSpanClass && <span className={proj.titleSpanClass}> Card</span>}
                    </h4>
                    <p className="grid-item-desc">{proj.desc}</p>
                    <div className="tags-container">
                      {proj.tags.map((tag, i) => (
                        <h5 className={`tags ${proj.tagClass}`} key={i}>
                          {tag}
                        </h5>
                      ))}
                    </div>
                    <img className="project-image" src={proj.image} alt="project" />
                  </div>
                </a>
               <div className="timeline-container">
  <div className="timeline-bar" />
  <motion.div
    className="timeline-dot"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.6, type: "spring" }}
  />
  <p className="timeline-text">{proj.timeline}</p>
</div>

              </motion.div>
            ))}
          </div>

          <motion.div
            className="social-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <Link target="_blank" to={'https://x.com/DevLegend_'}>
              <h2 className="social-item">
                <Twitter color="gray" />
              </h2>
            </Link>
            <Link target="_blank" to={'https://github.com/AyanAhmadKhan01'}>
              <h2 className="social-item">
                <Github color="gray" />
              </h2>
            </Link>
            <Link target="_blank" to={'https://www.linkedin.com/in/ayanahmadkhan/'}>
              <h2 className="social-item">
                <Linkedin color="gray" />
              </h2>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

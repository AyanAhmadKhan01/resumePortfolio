import { Link } from "react-router";

export default function HomePage() {
   
    return(
        <>
    
    <div className="pageDiv">
      <div className="wrapper">
        <img
          src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1738516789/dr38ccxejrev185h0inp.jpg"
          alt="Background"
          className="backgroundImg"
        />
        <div className="profile-section-container">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQG63jnBoDdN2w/profile-displayphoto-shrink_200_200/B4EZYAviTaHgAY-/0/1743769184223?e=1750291200&v=beta&t=wMcq5rF4Ty6l_Hw0DK67_Bq3CFA7fMlrgkGmRQJlBkY"
            alt="Profile"
            className="profile-section-image"
          />
          <h2 className="profile-title">Ayan Ahmad Khan</h2>
          <p className="profile-desc">Hey there! I'm Ayan Ahmad Khan, a passionate <span>MERN stack</span> developer.</p>
        </div>

        <h3 className="project-title">Projects</h3>
        <div className="grid-item">
          <a href="https://levelcard.vercel.app" target="_blank" rel="noopener noreferrer">
            <div className="grid-item-wrapper level-card-wrapper">
            <span className="dev-tag">Under Development</span>
              <h4 className="grid-item-title">Level <span className="lvl-span">Card</span></h4>
              <p className="grid-item-desc">
              A no-code platform to build and deploy your portfolio in one click, featuring built-in analytics and messaging tools.
              </p>
              <div className="tags-container">
             <h5 className="tags level-tags">#NextJs</h5>
              <h5 className="tags level-tags">#TailWind</h5>
             <h5 className="tags level-tags">#Redux</h5>
            <h5 className="tags level-tags">#Express</h5> 
             <h5 className="tags level-tags">#Nodejs</h5> 
               <h5 className="tags level-tags">#MongoDB</h5>
             </div>
             <img className="project-image" src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748003658/aabeefcnbg3iphuce1fe.png" alt="project" />
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://dreamwallv2.vercel.app/home" target="_blank" rel="noopener noreferrer">
            <div className="grid-item-wrapper">
            <span className="dreamwall">Completed</span>
              <h4 className="grid-item-title">DreamWall</h4>
              <p className="grid-item-desc">
                A platform where users can upload, explore, and share wallpapers
              </p>
                <div className="tags-container">
             <h5 className="tags dream-tags">#ReactJs</h5>
              <h5 className="tags dream-tags">#Css</h5>
            <h5 className="tags dream-tags">#Express</h5> 
             <h5 className="tags dream-tags">#Nodejs</h5> 
              <h5 className="tags dream-tags">#MongoDB</h5>
             </div>
             <img className="project-image" src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748005188/thceyarmn8dld2glwe7w.png" alt="project" />
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://kadogg.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="grid-item-wrapper">
            <span className="dreamwall">Completed</span>
              <h4 className="grid-item-title">Kado.gg</h4>
              <p className="grid-item-desc">
              A guide website dedicated to Kado Bot, offering in-depth explanations of its Discord commands, rules, and card showcases.
              </p>
                              <div className="tags-container">
             <h5 className="tags kado-tag">#React</h5>
               <h5 className="tags kado-tag">#MongoDB</h5>
            <h5 className="tags kado-tag">#Express</h5> 
             <h5 className="tags kado-tag">#Nodejs</h5> 
             </div>
             <img className="project-image" src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1748005446/c0wi8oz914fr16qduzhr.png" alt="project" />
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://todolist-brown-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="grid-item-wrapper">
            <span className="dreamwall">Completed</span>
              <h4 className="grid-item-title">To Do List</h4>
              <p className="grid-item-desc">
                Your Own Custom To-do-List, and you can customize it according to your preferences
              </p>
                                <div className="tags-container">
             <h5 className="tags todo-tags">#HTML</h5>
              <h5 className="tags todo-tags">#CSS</h5>
              <h5 className="tags todo-tags">#Javascript</h5>
             </div>
             <img className="project-image" src="https://private-user-images.githubusercontent.com/166162914/348945844-7e250095-1135-48c8-a42e-979920097e20.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgwMDU4NjMsIm5iZiI6MTc0ODAwNTU2MywicGF0aCI6Ii8xNjYxNjI5MTQvMzQ4OTQ1ODQ0LTdlMjUwMDk1LTExMzUtNDhjOC1hNDJlLTk3OTkyMDA5N2UyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyM1QxMzA2MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xOTY2M2UzMjA2YWM1NGNmMDM0YWJhZTA4MDliNjFjYjg2ODVjMTEyODc0YWY0YmYxNDEyMDBmYjFkZDUwNDQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Hnu_o4m100wTtzoYwrcKP7k-EGiZBcxw-so7Tq7bn78" alt="project" />
            </div>
          </a>
        </div>
        <div className="social-container">
            <Link target="_blank" to={'https://x.com/DevLegend_'}>
          <h2 className="social-item">X Twitter</h2>
          </Link>
          <Link target='_blank' to={'https://github.com/AyanAhmadKhan01'}>
          <h2 className="social-item">Github</h2>
          </Link>
          <Link target='_blank' to={'https://www.linkedin.com/in/ayanahmadkhan/'}>
          <h2 className="social-item">Linkdin</h2>
          </Link>
        </div>
      </div>
    </div>




        </>
    )
}
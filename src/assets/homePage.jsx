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
          <h2 className="profile-title">Ayan Khan</h2>
          <p className="profile-desc">Hey there! I'm Ayan Khan, also known as Devlegend—a passionate <span>MERN stack</span> developer.</p>
        </div>

        <h3 className="project-title">Projects</h3>
        <div className="grid-item">
          <a href="https://drive.google.com/file/d/12WYxuEcQqO97Y5klT9CI5b2sEEAgI67a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="grid-item-wrapper">
            <span>Under Development</span>
              <h4 className="grid-item-title">Portfolio Builder</h4>
              <p className="grid-item-desc">
              A no-code platform to build and deploy your portfolio in one click, featuring built-in analytics and messaging tools.
              </p>
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
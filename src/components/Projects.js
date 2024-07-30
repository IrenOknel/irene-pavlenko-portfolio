import slingairVideo from "../assets/slingair.mov";

const Projects = () => {
return (
<section id="projects">
<h2 className="section-title lobster-regular">SlingAir</h2>
<div className="project-container">
<div className="project-description">
<p>
SlingAir is a seat-booking application for Slingshot Airlines,
developed using Node.js. The project involves integrating existing
frontend and backend components to create a functional MVP. The
primary tasks include setting up the backend to handle RESTful API
requests, connecting to a MongoDB database, and ensuring seamless
communication between the frontend and backend.
</p>
<p>
Tools and Technologies Used: Node.js, Express.js, React MongoDB,
Database, Yarn, Insomnia, GitHub
</p>
</div>
<div className="project-video">
<a
href="https://github.com/cb-wd-33/project-slingair/pull/10"
target="_blank"
>
<video
src={slingairVideo}
alt="SlingAir Project"
className="project-video"
controls
loop
autoPlay
/>
</a>
</div>
</div>
</section>
);
};

export default Projects;

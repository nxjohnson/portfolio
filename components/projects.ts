interface Project {
  projectName: string,
  projectDescription: string,
  techStack: string[],
  githubUrl: string,
}

const projects: Project[] = [
  {
    projectName: 'Koigoi',
    projectDescription: 'Koigoi is a frontend focused single page e-commerce store',
    techStack: ['React', 'Styled Components', 'Axios', 'Node.js', 'Express', 'Cloudinary'],
    githubUrl: 'https://github.com/nxjohnson/koigoi',
  },
  {
    projectName: 'Atelier',
    projectDescription: 'Atelier is a rating and reviews API service system design for an e-commerce store',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'AWS EC2 Instances', 'NGINX', 'K6', 'Loader.io'],
    githubUrl: 'https://github.com/nxjohnson/altelier',
  },
  {
    projectName: 'Forte',
    projectDescription: 'Forte is a music social media platform where you can connect with others based on music taste',
    techStack: ['Next.js', 'Material UI', 'Axios', 'Node.js', 'Express', 'Socket.io', 'Firebase'],
    githubUrl: 'https://github.com/nxjohnson/forte',
  }
]

export default projects;

import { StaticImageData } from 'next/image';
import koigoi from '../public/work-koigoi.png';
import atelier from '../public/work-atelier.png'
import forteOne from '../public/work-forte-1.png';
import forteTwo from '../public/work-forte-2.png';
import forteThree from '../public/work-forte-3.png';

interface Project {
  projectName: string,
  projectDescription: string,
  techStack: string[],
  githubUrl: string,
  mockupType: string,
  images: Image[],
}

interface Image {
  src: StaticImageData,
  alt: string,
}

const projects: Project[] = [
  {
    projectName: 'Koigoi',
    projectDescription: 'Koigoi is a frontend focused single page e-commerce store',
    techStack: ['React', 'Styled Components', 'Axios', 'Node.js', 'Express', 'Cloudinary'],
    githubUrl: 'https://github.com/nxjohnson/koigoi',
    mockupType: 'web',
    images: [
      {
        src: koigoi,
        alt: 'Koigoi homepage',
      }
    ]
  },
  {
    projectName: 'Atelier',
    projectDescription: 'Atelier is a rating and reviews API service system design for an e-commerce store',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'AWS EC2 Instances', 'NGINX', 'K6', 'Loader.io'],
    githubUrl: 'https://github.com/nxjohnson/altelier',
    mockupType: 'web',
    images: [
      {
      src: atelier,
      alt: 'Atelier homepage',
      }
    ]
  },
  {
    projectName: 'Forte',
    projectDescription: 'Forte is a mobile first music social media platform where you can connect with others based on music taste',
    techStack: ['Next.js', 'Material UI', 'Axios', 'Node.js', 'Express', 'Socket.io', 'Firebase'],
    githubUrl: 'https://github.com/nxjohnson/forte',
    mockupType: 'mobile',
    images: [
      {
      src: forteOne,
      alt: 'Forte forum posts',
      },
      {
        src: forteTwo,
        alt: 'Forte user profile',
      },
      {
        src: forteThree,
        alt: 'Forte music search',
      }
    ]
  }
]

export default projects;

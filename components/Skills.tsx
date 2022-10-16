import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from 'react'

import aws from'../public/icons/aws.svg'
import cloudinary from'../public/icons/cloudinary.svg'
import css from'../public/icons/css-3.svg'
import eslint from'../public/icons/eslint.svg'
import express from'../public/icons/express.svg'
import firebase from'../public/icons/firebase.svg'
import git from'../public/icons/git-icon.svg'
import html from'../public/icons/html-5.svg'
import javascript from'../public/icons/javascript.svg'
import materialui from'../public/icons/material-ui.svg'
import mongodb from'../public/icons/mongodb-icon.svg'
import mysql from'../public/icons/mysql.svg'
import nextjs from'../public/icons/nextjs-icon.svg'
import nginx from'../public/icons/nginx.svg'
import nodejs from'../public/icons/nodejs.svg'
import npm from'../public/icons/npm-logo.svg'
import postgresql from'../public/icons/postgresql.svg'
import react from'../public/icons/react.svg'
import socketio from'../public/icons/socket.io.svg'
import webpack from'../public/icons/webpack.svg'

import styles from '../styles/Skills.module.css'

interface TechStack {
  path: StaticImageData,
  name: string,
}

const Skills: FunctionComponent = () => {
  const techStack: TechStack[] = [
    {path: javascript, name:'JavaScript'},
    {path: react, name:'React'},
    {path: nextjs, name:'Next.js'},
    {path: html, name: 'HTML5'},
    {path: css, name: 'CSS3'},
    {path: materialui, name: 'Material UI'},
    {path: nodejs, name: 'Node.js'},
    {path: express, name: 'Express'},
    {path: mysql, name: 'MySQL'},
    {path: postgresql, name: 'PostgreSQL'},
    {path: mongodb, name: 'MongoDB'},
    {path: firebase, name: 'Firebase'},
    {path: git, name: 'Git'},
    {path: npm, name: 'NPM'},
    {path: webpack, name: 'Webpack'},
    {path: socketio, name: 'Socket.io'},
    {path: cloudinary, name: 'Cloudinary'},
    {path: eslint, name: 'ESLint'},
    {path: nginx, name: 'NGINX'},
    {path: aws, name: 'AWS'}
  ]

  return (
    <section id="skills" className={styles.skillsContainer}>
      <div className={styles.skillsGridLayout}>
        {techStack.map((icon, index) => {
          return (
            <div className={styles.centerIcons} key={index}>
              <div className={styles.skillsIcon}>
                <Image
                  src={icon.path}
                  alt={icon.name}
                  layout="fill"
                  objectFit='contain'
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills;
import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.linkedin.com/in/sohel-parves-2516911a5/'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-linkedin'></i>
      </a>

      <a
        href='https://github.com/SohelPerves'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-github-alt'></i>
      </a>
      <a
        href='https://app.netlify.com/teams/srperves30/sites?creator=me&visibility=public'
        className='home__social-icon'
        target='_blank'
      >
        <i className='bx bxl-netlify'></i>
      </a>
      <a
        href='https://www.instagram.com/s_p_shagor/'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-instagram'></i>
      </a>
    </div>
  )
}

export default Social

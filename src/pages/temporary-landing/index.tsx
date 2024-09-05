import './temporary-landing.css';
// import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import bg from '../../assets/flowers.mp4';

const LandingPage = () => {
  return(
    <>
      <header className="header">
        <svg width="52.893" height="25.594" viewBox="0 0 52.893 25.594" xmlns="http://www.w3.org/2000/svg">
          <g strokeLinecap='round' fillRule='evenodd' fontSize='9pt' stroke='#000' strokeWidth='0.25mm' fill='#000'>
            <path d="M 0 0 L 5.766 0 L 13.148 19.617 L 20.514 0 L 26.262 0 L 26.262 25.594 L 21.832 25.594 L 21.832 
              17.156 L 22.271 5.871 L 14.713 25.594 L 11.531 25.594 L 3.99 5.889 L 4.43 17.156 L 4.43 25.594 L 0 25.594 
              L 0 0 Z" id="0" vectorEffect="non-scaling-stroke"/>
            <path d="M 48.252 25.594 L 46.16 19.635 L 36.246 19.635 L 34.172 25.594 L 29.549 25.594 L 39.217 0 L 43.207 
              0 L 52.893 25.594 L 48.252 25.594 Z M 41.203 5.432 L 37.494 16.049 L 44.912 16.049 L 41.203 5.432 Z" 
              id="1" vectorEffect="non-scaling-stroke"/>
          </g>
        </svg>
      </header>
      <main className="main">
        <div className="main__text">
          <h1 className="main__title">Coming Soon</h1>
          <p className="main__paragraph">In the meantime, Sign up for our monthly newsletter to stay up to date.</p>
        </div>
        <form action="#" className="main__email-form">
          <TextField name='query' label='Email Address'/>
          <Button className="main__email-submit" variant='contained'>Sign Up</Button>
        </form>
      </main>
      <footer className="footer">
        <GitHubIcon />
        <LinkedInIcon />
      </footer>
    </>
  );
}

export default LandingPage;
// Styling
import './style.css';
import { Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { projects } from './projects.data';

export const Projects = () => (
  <div>
    <h1>📽️ Projects</h1>
    <Grid container spacing={0} sx={{ 
      width: '80%',
      margin: '0 auto',
      '& .MuiGrid-item': {
        padding: 0,
        '&:not(:last-child)': {
          borderRight: '1px solid #e0e0e0'
        }
      }
    }} className='project-container'>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Projects;

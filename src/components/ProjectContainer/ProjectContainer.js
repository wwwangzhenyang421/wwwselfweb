import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

// 安全地获取 PUBLIC_URL
const getPublicUrl = () => {
  if (typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL
  }
  return ''
}

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {project.image && (<img
    src={
      project.image.startsWith("http")
        ? project.image
        : `${getPublicUrl()}/images/${project.image}`
    }
    alt={`${project.name} screenshot`}
    className='project__image'
    />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className='project__links'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer

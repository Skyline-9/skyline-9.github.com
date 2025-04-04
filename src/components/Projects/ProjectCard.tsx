import { Project } from './projects.data';
import { useRef } from 'react';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardRef.current.style.setProperty('--mouse-x', `${x}px`);
            cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        }
    };
    
    return (
        <div className="card" style={{
            height: '100%',
            borderBottom: '1px solid #e0e0e0'
        }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            <div className="card-content" style={{ height: '100%' }}>
                <div className="card-image">
                    <img
                        src={project.image}
                        alt={project.altText}
                        loading="lazy"
                    />
                </div>
                <div className="card-info">
                    <h2>{project.title}</h2>
                    <h4>{project.subtitle}</h4>
                    <p>{project.description}</p>
                    <div id="social-media-container">
                        {project.links.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer nofollow">
                                    <IconComponent className="icon" /> {link.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

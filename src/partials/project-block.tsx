import React from 'react';

import {ProjectBlock} from './project-block.styles';

interface Props {
    itemData: {
        title: string,
        tags: Array<string>,
        description: string,
        url: string,
    }
}

const MainNav: React.FC<Props> = ({itemData} : Props) => {
    return (
        
        <ProjectBlock>
            <h4 className="project-title">{itemData.title}</h4>
            {itemData.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
            ))}
            <p className="project-description">
                {itemData.description}
            </p>
            <a href={itemData.url} rel="noreferrer" target="_blank">  
                Ver
            </a>
        </ProjectBlock>
    
    );

}

export default MainNav;
import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>

    <SectionDivider />

    <SectionTitle main>Projects</SectionTitle>

    <GridContainer>

      { projects.map(({ title, description, image, tags, source, visit}, index) => (
        <BlogCard key={index}>

          <Img src={image} />

          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>

            <Hr />
          </TitleContent>

          <CardInfo>
            {description}
          </CardInfo>

          <div style={{marginTop: '25px'}}>
            <TitleContent>Stack</TitleContent>

            <TagList>

              {tags.map((tag, i) => (
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}

            </TagList>
          </div>

          <UtilityList>

            <ExternalLinks href={visit}>Code</ExternalLinks>

            <ExternalLinks href={source}>Source</ExternalLinks>
            
          </UtilityList>

        </BlogCard>
      ))}

    </GridContainer>
  </Section>
);

export default Projects;
import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />

    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I've worked with a range of web develpement technologies, frameworks and libraries to build appealing website for my clients.
    </SectionText>

    <List>

      <ListItem>
        <DiReact size='5rem'/>

        <ListContainer>
          <ListTitle>Front-End</ListTitle>

          <ListParagraph>
            Experience with <br />
            React Js <br />
            Next Js <br />
            Styled-Components
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='5rem'/>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>

          <ListParagraph>
            Experience with <br />
            Node Js <br />
            and some <br />
            porpular DataBases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size='5rem'/>

        <ListContainer>
          <ListTitle>UI/UX</ListTitle>

          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;

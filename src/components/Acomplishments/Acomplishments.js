import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { accomplishmentsData } from '../../constants/constants'


const Acomplishments = () => (
  <Section>
    <SectionDivider /><br /><br />

    <SectionTitle>My Personal Accomplishments</SectionTitle>

    <Boxes>
      {accomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum> {card.number}+</BoxNum>

          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

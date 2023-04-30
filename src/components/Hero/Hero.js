import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    
    <LeftSection>

      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>

      <SectionText>
        Hello Dear, I'm ibn a Web Developer who have helped lot's of business owners and companies create a stunning online representation of their company and services with websites. <br /> It'll be my pleasure to bring your dream website to reaity. Feel free to contact me for any jobs, I'll be available for your needs.
      </SectionText>

      <Button>
        Hire Me
      </Button>
      
    </LeftSection>

  </Section>
);

export default Hero;
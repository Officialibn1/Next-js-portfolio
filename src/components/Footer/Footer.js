import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>

          <LinkTitle>CALL</LinkTitle>
          
          <LinkItem href='tel:+2349038880282'>
            +2349038880282
          </LinkItem>

        </LinkColumn>

        <LinkColumn>

          <LinkTitle>E-Mail</LinkTitle>
          
          <LinkItem href='mailto:officialibn001@gmail.com'>
            officialibn001@gmail.com
          </LinkItem>

        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>Our aim is to bring our clients dreams into reality one at a time.</Slogan>
        </CompanyContainer>

        {/* Social Icons */}
        <SocialContainer>

          <SocialIcons href='https://github.com/Officialibn1'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
        
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>

        </SocialContainer>

      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

interface LinkWithIconProps {
  href: string;
  icon: React.ElementType;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ href, icon: Icon }) => {
  const iconStyle = {
    color: 'black',
    fontSize: '30px',
  };

  return (
    <Link href={href} target="_blank">
      <Icon sx={iconStyle} />
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <div background-color='#fcba03'>
      <LinkWithIcon href="http://www.github.com" icon={GitHubIcon} />
      <LinkWithIcon href="http://www.instagram.com" icon={InstagramIcon}/>
      <LinkWithIcon href="http://www.gmail.com" icon={EmailIcon}/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CopyrightIcon />
        <Typography variant="h6" style={{ marginLeft: '8px' }}>
          Uriel Azar
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

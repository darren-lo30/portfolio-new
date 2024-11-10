import { ACCENT_COLOR } from '../config';
import { Stack, Flex, Heading, Text, IconButton, chakra, Link, Box, LinkProps } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'


const LinkItem = (props: {link: string, label: string}) => {
  return (
    <Link href={props.link} color={'inherit'} target={'_blank'} fontWeight='bold' textDecoration={'underline'} textUnderlineOffset={2} _hover={{
      textUnderlineOffset: 2,
      color: ACCENT_COLOR
    }}>{props.label}</Link> 
  )
}

const ButtonLink = chakra(IconButton, {
  base: {
    color: 'gray.400',
    backgroundColor: 'transparent',
    "&:hover": {
      backgroundColor: 'transparent',
      color: ACCENT_COLOR
    }
  },
});

const AboutTab = () => {
  return (
    <Stack w={'full'} maxW={'3xl'} gap={'32px'}>
      <Heading fontSize={{ base: '5xl' }} lineHeight={'3rem'}>
        Darren Lo
      </Heading>
      <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.400'}>
        Hi, I'm a 3rd year computer science student studying at the <LinkItem label='University of Waterloo' link='https://uwaterloo.ca/' />.
      </Text>
      <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.400'}>
        I'm currently a Software Engineer Intern at a Stealth Startup based in Toronto 
        and a Machine Learning Researcher at the University of Waterloo where I work with diffusion models.
      </Text>
      <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.400'}>
        I've previously interned at <LinkItem link="https://www.huawei.com/en/" label='Huawei' /> and <LinkItem link='https://toolbx.com/' label='TOOLBX' /> as a Software Engineer Intern.
      </Text>
      <Flex gap={2}> 
        <ButtonLink aria-label="Github" as='a' href={'https://github.com/darren-lo30'} target={'_blank'}>
          <FaGithub />
        </ButtonLink>
        <ButtonLink aria-label="Email" as='a' href={'mailto:darren.lo@uwaterloo.ca'} target={'_blank'}>
          <FaEnvelope />
        </ButtonLink>
        <ButtonLink aria-label="Linkedin" as='a' href={'https://www.linkedin.com/in/darren-lo-04/'} target={'_blank'}>
          <FaLinkedin />
        </ButtonLink>
        </Flex>
    </Stack>
  );
}

export default AboutTab;
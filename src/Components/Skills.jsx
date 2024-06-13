import React,{useState} from "react";
import { Heading, Image, Flex, Tag, Box, HStack } from '@chakra-ui/react'
import showskill from '../asset/images/showskill.png'

export default function Skills() {
    const [skills] = useState([
        'Javascript', 'Typescript', 'Angular', 'React', 'NodeJS', 'ExpressJS',
        '.net', 'C#', 'HTML5', 'CSS', 'jQuery', 'Webpack', 'Regex', 'Redux', 'MySQL',
        'Git', 'WCAG', 'JIRA', 'SVN',])
    return (
        <section className="skill">
            <Heading className="heading" p={0} mb={4}>Skills</Heading>
            <Flex flexDirection={'row'} className="skill-box">
                <Box width={'30%'}>
                    <Flex p={0} mb={5}>
                        <Image
                            className="skill-image"
                            src={showskill}
                            alt='Skill Picture'
                        />
                    </Flex>
                </Box>
                <Box width={'70%'}>
                    <HStack spacing={2} width={'100%'} wrap={'wrap'}>
                        {skills && skills.map((data) => (
                            <Tag key={data} borderRadius={'1em'} variant='solid'
                                height={'1.55rem'}
                                minWidth={'5rem'}
                                colorScheme='purple'
                                justifyContent={'center'}
                                alignItems={'center'}
                                alignContent={'center'}>
                                {data}
                            </Tag>
                        ))}
                    </HStack>
                </Box>
            </Flex>

        </section>
    )
}
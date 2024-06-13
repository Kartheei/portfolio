import React, { useState } from "react";
import { Heading, Image, Flex, Tag, Box, HStack, Link, Text } from '@chakra-ui/react'
import showskill from '../asset/images/showskill.png'
import html from '../asset/images/html.png'
import css from '../asset/images/css.png'
import bootstarp from '../asset/images/bootstrap.png'
import angular from '../asset/images/angular.png'
import ts from '../asset/images/ts.png'
import js from '../asset/images/js.png'
import react from '../asset/images/react.png'
import node from '../asset/images/nodejs.png'
import sql from '../asset/images/mysql.png'
import mongo from '../asset/images/mongo.png'
import webpack from '../asset/images/webpack.png'
import redux from '../asset/images/redux.png'



export default function Skills() {
    // const [skills] = useState([
    //     'Javascript', 'Typescript', 'Angular', 'React', 'NodeJS', 'ExpressJS',
    //     '.net', 'C#', 'HTML5', 'CSS', 'jQuery', 'Webpack', 'Regex', 'Redux', 'MySQL',
    //     'Git', 'WCAG', 'JIRA', 'SVN',])
    const [skills] = useState([
        { name: "HTML", path: html },
        { name: "CSS", path: css },
        { name: "Javascript", path: js },
        { name: "Typescript", path: ts },
        { name: "Angular", path: angular },
        { name: "React", path: react },
        { name: "Redux", path: redux },
        { name: "Webpack", path: webpack },
        { name: "Node Js", path: node },
        { name: "Bootstrap", path: bootstarp },
        { name: "My SQL", path: sql },
        { name: "Mongo DB", path: mongo },





    ])
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
                    {/* <HStack spacing={2} width={'100%'} wrap={'wrap'}>
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
                    </HStack> */}
                    <Flex flexDirection="row" flexWrap="wrap" gap={12}>
                        {skills && skills.map((data, index) => (
                            <Box key={index} borderRadius="10px" boxSize="85px" display="flex" flexDirection="column" alignItems="center">
                                <Image
                                    src={data.path}
                                    alt={data.name}
                                    m={1}
                                    _hover={{ transform: 'scale(1.1)' }}
                                />
                                <Text>{data.name}</Text>
                            </Box>
                        ))}
                    </Flex>

                </Box>
            </Flex>

        </section>
    )
}
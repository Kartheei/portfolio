import React from "react";
import { Text, Heading, Flex, Link, Image } from '@chakra-ui/react';
import github from '../asset/images/github.png'
import linkedin from '../asset/images/linkedin.png'
export default function Summary() {

    return (
        <section>
            <Heading p={0} mb={4} className="name-card">Hi, I'm Karthick</Heading>

            <Text fontSize='lg' className="defaultFont">
                I am a Software Developer who thrives on solving problems and developing web applications.
                As a loyal and dedicated worker, I bring passion and commitment to every project I undertake.
                Beyond my professional endeavors, I am deeply passionate about technology and creative expression,
                finding joy in outdoor adventures and embracing coding challenges with enthusiasm.
                <br></br>
                My passion for the entire frontend ecosystem drives me to seek out collaboration opportunities on 
                exciting projects with like-minded individuals. 
                Let's join forces and create something truly exceptional together!
            </Text>
            <Flex justifyContent={'center'}>
                <Link href="https://www.linkedin.com/in/karthick-ks/" isExternal>
                    <Image
                        src={linkedin}
                        alt="LinkedIn"
                        boxSize="75px"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Link>
                <Link href="https://github.com/Kartheei" isExternal>
                    <Image
                        src={github}
                        alt="GitHub"
                        boxSize="75px"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Link>
            </Flex>
        </section>
    )
}
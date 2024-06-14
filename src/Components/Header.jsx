import React from "react";
import { Flex, Button } from '@chakra-ui/react'

export default function Header() {
    return (
        <section className="headerSection">
            <Flex justify="flex-end" align="center">
                <a href='https://drive.google.com/file/d/1tXoGhXUyWzFV95rPehO6iUfQoEFb-ekP/view' target="_blank" rel="noopener noreferrer">
                    <Button
                        bg="#6a0dad" 
                        color="white" 
                        _hover={{ bg: '#5e0f8b' }}
                        h={12}
                        m={4}
                        px={6}
                        py={2}
                        fontSize="lg"
                        fontWeight="bold">
                        Resume
                    </Button>
                </a>
            </Flex>
        </section>
    )
}
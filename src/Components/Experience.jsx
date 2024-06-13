import React from "react";
import { Heading, Text, Image, Flex, Divider } from '@chakra-ui/react'
import scb from '../asset/images/scb_logo.png';
import tt from '../asset/images/tt.jpg';
import adrenalin from '../asset/images/adrenalin.jpg';
import ducont from '../asset/images/ducont.jpeg';
import zylog from '../asset/images/zylog.png';

export default function Expereince() {
    return (
        <section className="experience">
            <Heading className="heading" p={0} mb={4}>Experience</Heading>
            {/* SCB */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={scb}
                            alt='Scb logo'
                            mb={4}
                        />
                        <Text>May,2021 - April,2023</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='320px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Technical Lead</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Standard Chartered GBS,
                        Chennai, India
                    </Flex>
                    <Flex>
                        <Text className="defaultFont">Responsible for designing and implementing functionalities for Standard Chartered,
                            incorporating dynamic Angular applications with reusable components.
                            Ensured data security through MD5 and SHA256 encryption for JSON web API communication.
                            Optimized front-end performance by employing lazy loading and code splitting techniques,
                            delivering responsive and mobile-friendly interfaces across various devices.
                            Integrated third-party APIs including face recognition systems,
                            while also conducting code reviews and mentoring junior developers.
                            Collaborated within Agile methodologies, translating design concepts into functional interfaces,
                            and ensuring application quality and security through automated testing. Conducted regular security assessments,
                            remaining updated on the latest web development trends to enhance application capabilities.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* Adrenalin */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={adrenalin}
                            alt='Adrenalin logo'
                            mb={4}
                        />
                        <Text>Jan,2020 - April,2021</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='280px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >System Engineer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Adrenalin eSystem Pvt Ltd,
                        Chennai, India
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont" lineHeight={'1.5rem'}>
                            I specialize in designing and developing dynamic web applications using Angular 6,
                            seamlessly integrating them with web API responses. Employing Canvas,
                            I craft captivating pictorial representations like charts and graphs to enhance
                            data visualization. With a focus on optimizing front-end performance,
                            I implement advanced techniques such as lazy loading and code splitting to minimize page
                            load times. My expertise extends to creating responsive, mobile-friendly user interfaces,
                            ensuring a seamless experience across various devices and screen sizes. Collaborating closely
                            with UX/UI designers, I translate design concepts into functional interfaces,
                            maintaining visual consistency and intuitive user interactions.
                            Throughout the Agile development process, I am actively involved in delivering regular
                            releases and adapting swiftly to evolving business needs, overseeing the design, development,
                            and production phases for comprehensive project success.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* TrueTech Solution */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={tt}
                            alt='TrueTech logo'
                            mb={4}
                        />
                        <Text>May,2019 - Dec,2019</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='150px' m={4} />

                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Angular Developer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Truetech Solutions Pvt Ltd,
                        Chennai, India
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont" lineHeight={'1.5rem'}>
                            During my time as a Consultant with Adrenalin E-System Private. Ltd., I took the lead in crafting critical functionalities
                            for scalable web applications using Angular 6. This effort led to a notable 10% enhancement in performance efficiency.
                            Moreover, I fostered productive collaboration across diverse teams, ensuring the seamless integration of
                            robust server-side logic to elevate application functionality and optimize user experience.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* Ducont */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={ducont}
                            alt='Ducont logo'
                            mb={4}
                        />
                        <Text>Dec,2017 - Apr,2019</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='145px' m={4} />

                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Junior Software Developer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Ducont Systems Pvt Ltd,
                        Chennai, India
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont" lineHeight={'1.5rem'}>
                            Crafted a multi-lingual FSM product application using Angular 2 and 4,
                            resulting in a 50% expansion of market reach across global regions.
                            Additionally, played a key role in developing a .NET Core Web API, which effectively
                            reduced frontend-backend data transmission latency by 20%.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* Zylog */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={zylog}
                            alt='Zylog logo'
                            mb={4}
                        />
                        <Text>Jun,2017 - Dec,2017</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='150px' m={4} />

                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Developer Trainee</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Zylog Systems India Pvt Ltd,
                        Chennai, India
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont" lineHeight={'1.5rem'}>
                            Trained and developed responsive web applications with Angular 2 and 4,
                            enhancing performance by 20% and integrating user-facing elements with server-side logic
                            to improve data exchange efficiency and user interaction by 25%.</Text>
                    </Flex>
                </Flex>
            </Flex>
        </section>
    )
} 
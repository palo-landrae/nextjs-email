import type { NextPage } from "next";
import { sendMail } from "../services/sendMail";

import { Input, Textarea, Button, VStack, Box, Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
    return (
        <Flex width='full' align='center' justifyContent='center'>
            <Box p={2}>
                <Box p={8} maxWidth='500px' borderWidth={1} borderRadius={8} boxShadow='lg'>
                    <Box textAlign='center' mb={2}>
                        <Text fontSize='lg'>NextJS + SendinBlue + ChakraUi</Text>
                    </Box>
                    <form onSubmit={sendMail}>
                        <VStack>
                            <Input id='name' name='name' placeholder='Name' size='md' maxWidth={96} isRequired />
                            <Input
                                id='subject'
                                name='subject'
                                placeholder='Subject'
                                size='md'
                                maxWidth={96}
                                isRequired
                            />
                            <Input id='email' name='email' placeholder='Email' size='md' maxWidth={96} isRequired />
                            <Textarea
                                id='msg'
                                name='message'
                                placeholder='Here is a sample placeholder'
                                size='md'
                                maxWidth={96}
                                resize='none'
                                isRequired
                            />
                            <Button as='button' type='submit' width={72} maxWidth={96}>
                                Send
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;

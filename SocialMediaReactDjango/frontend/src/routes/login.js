import { FormControl, Flex, VStack, FormLabel, Input, Button, Heading, Text} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const { auth_login } = useAuth();


    const handleLogin = async () => {
        auth_login(username, password)
    }

    const handleNav = () => {
        navigate('/register')
    }

    return (
        <Flex w="100%" justifyContent="center" alignItems="center" h="calc(100vh - 90px)">
            <VStack alignItems='start' w='95%' maxW='400px' gap='30px'>
                <Heading>Login</Heading>
                <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input onChange={(e) => setUsername(e.target.value)} bg='white' id="username" type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input onChange={(e) => setPassword(e.target.value)} bg='white' id="password" type="password" />
                </FormControl>
                <VStack w='100%' alignItems='start' gap='10px'>
                    <Button onClick={handleLogin} w='100%' colorScheme="green" fontSize='18px'>Login</Button>
                    <Text onClick={handleNav} fontSize='14px' color='gray.500'>Don't have an account ? Log In</Text>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default Login;
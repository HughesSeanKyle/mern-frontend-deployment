import React from 'react';
// Chakra imports
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Box,
	Flex,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Heading,
	Input,
	Link,
	Switch,
	Text,
	DarkMode,
} from '@chakra-ui/react';

// Assets
import signInImage from 'assets/img/signInImage.png';

// Custom Components
import GradientBorder from 'components/GradientBorder/GradientBorder';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/i,
			'Invalid Email'
		)
		.required(),
	password: yup
		.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]?)[A-Za-z\d\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]{8,}$/,
			'Password must contain minimum 8 characters, atleast one lowercase letter, uppercase letter, number'
		)
		.required(),
	passwordConfirm: yup
		.string()
		.required('Confirm Password is required')
		.oneOf([yup.ref('password')], 'Passwords must and should match'),
});

function SignIn() {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};

	fetch('https://aqueous-retreat-11852.herokuapp.com/test-get', requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));

	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const titleColor = 'white';
	const textColor = 'gray.400';

	return (
		<Flex position="relative">
			<Flex
				minH="100vh"
				h={{ base: '120vh', lg: 'fit-content' }}
				w="100%"
				maxW="1044px"
				mx="auto"
				pt={{ sm: '100px', md: '0px' }}
				flexDirection="column"
				me={{ base: 'auto', lg: '50px', xl: 'auto' }}
			>
				<Flex
					alignItems="center"
					justifyContent="start"
					style={{ userSelect: 'none' }}
					mx={{ base: 'auto', lg: 'unset' }}
					ms={{ base: 'auto', lg: 'auto' }}
					w={{ base: '100%', md: '50%', lg: '450px' }}
					px="50px"
				>
					<Flex
						direction="column"
						w="100%"
						background="transparent"
						mt={{ base: '50px', md: '150px', lg: '160px', xl: '245px' }}
						mb={{ base: '60px', lg: '95px' }}
					>
						<Heading color={titleColor} fontSize="32px" mb="10px">
							Nice to see you!
						</Heading>
						<Text
							mb="36px"
							ms="4px"
							color={textColor}
							fontWeight="bold"
							fontSize="14px"
						>
							Enter your email and password to sign in
						</Text>
						<Text
							mb="36px"
							ms="4px"
							color={textColor}
							fontWeight="bold"
							fontSize="14px"
						>
							Netlify Auto Deploy test
						</Text>
						<form onSubmit={handleSubmit('')}>
							<FormControl>
								<FormLabel
									ms="4px"
									fontSize="sm"
									fontWeight="normal"
									color="white"
								>
									Email
								</FormLabel>
								<GradientBorder
									mb="24px"
									w={{ base: '100%', lg: 'fit-content' }}
									borderRadius="20px"
								>
									<Input
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										h="46px"
										placeholder="Your email adress"
									/>
								</GradientBorder>
							</FormControl>
							<FormControl>
								<FormLabel
									ms="4px"
									fontSize="sm"
									fontWeight="normal"
									color="white"
								>
									Password
								</FormLabel>
								<GradientBorder
									mb="24px"
									w={{ base: '100%', lg: 'fit-content' }}
									borderRadius="20px"
								>
									<Input
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: '100%', md: '346px' }}
										maxW="100%"
										type="password"
										placeholder="Your password"
									/>
								</GradientBorder>
							</FormControl>
							<FormControl display="flex" alignItems="center">
								<DarkMode>
									<Switch id="remember-login" colorScheme="brand" me="10px" />
								</DarkMode>
								<FormLabel
									htmlFor="remember-login"
									mb="0"
									ms="1"
									fontWeight="normal"
									color="white"
								>
									Remember me
								</FormLabel>
							</FormControl>
							<Button
								variant="brand"
								fontSize="10px"
								type="submit"
								w="100%"
								maxW="350px"
								h="45"
								mb="20px"
								mt="20px"
							>
								SIGN IN
							</Button>
						</form>

						<Flex
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							maxW="100%"
							mt="0px"
						>
							<Text color={textColor} fontWeight="medium">
								Don't have an account?
								<Link color={titleColor} as="span" ms="5px" fontWeight="bold">
									Sign Up
								</Link>
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Box
					w={{ base: '335px', md: '450px' }}
					mx={{ base: 'auto', lg: 'unset' }}
					ms={{ base: 'auto', lg: 'auto' }}
					mb="80px"
				></Box>
				<Box
					display={{ base: 'none', lg: 'block' }}
					overflowX="hidden"
					h="100%"
					maxW={{ md: '50vw', lg: '50vw' }}
					minH="100vh"
					w="960px"
					position="absolute"
					left="0px"
				>
					<Box
						bgImage={signInImage}
						w="100%"
						h="100%"
						bgSize="cover"
						bgPosition="50%"
						position="absolute"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						position="absolute"
					>
						<Text
							textAlign="center"
							color="white"
							letterSpacing="8px"
							fontSize="20px"
							fontWeight="500"
						>
							INSPIRED BY THE FUTURE:
						</Text>
						<Text
							textAlign="center"
							color="transparent"
							letterSpacing="8px"
							fontSize="36px"
							fontWeight="bold"
							bgClip="text !important"
							bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
						>
							THE VISION UI DASHBOARD
						</Text>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
}

export default SignIn;

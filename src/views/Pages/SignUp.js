import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
// Signup with redux
import { signUp } from '../../actions/auth';
// Signup without redux
import { signup } from '../../api/auth/signup';
import { loadUser } from '../../actions/auth';
import setAuthToken from 'utils/setAuthToken';
import store from '../../store';

import PropTypes from 'prop-types';

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
	HStack,
	Input,
	Link,
	Switch,
	Text,
	Icon,
	DarkMode,
} from '@chakra-ui/react';

// Icons
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
// Custom Components
import GradientBorder from 'components/GradientBorder/GradientBorder';

// Assets
import signUpImage from 'assets/img/signUpImage.png';

// Form input Validation
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	username: yup
		.string()
		.matches(/^$|\s?/i, 'username is a required field')
		.min(8, 'Your username should be more than two characters')
		.max(12, 'Your username cannot be more than 12 characters')
		.required(),
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

function SignUp(props) {
	const { setAlert, alerts, signUp, auth } = props;
	// const { auth } = store.getState();
	// console.log('Errors from SignUp', auth);
	console.log('alertsState', alerts);
	console.log('authState', auth);

	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	console.log('isSubmitting', isSubmitting);

	const [signUpError, setSignUpError] = useState(null);
	const signUpErrorRef = useRef(null);

	useEffect(() => {
		if (auth.errors) {
			console.log('Huston we got an error');
			// can handle specific status code errors from here
			setSignUpError(auth.errors[0].msg);
			signUpErrorRef.current?.scrollIntoView();
		}
	}, [auth.errors]);

	// useEffect(() => {
	// 	const { auth } = store.getState();

	// 	if (auth.errors) {
	// 		if (auth.errors.length > 0) {
	// 			setSignUpError(auth.errors[0].msg);
	// 			signUpErrorRef.current = auth.errors[0].msg;
	// 		}
	// 	}
	// 	console.log('signUpError', signUpError);
	// 	console.log('authState', auth);

	// 	// if (authState && authState.auth.errors[0].msg) {
	// 	// 	console.log(
	// 	// 		'authState?.auth?.errors[0]?.msg',
	// 	// 		authState.auth.errors[0].msg
	// 	// 	);
	// 	// }

	// 	// if (store.getState()?.auth?.errors[0]?.msg) {
	// 	// 	setSignUpError(store.getState().auth?.errors[0]?.msg);
	// 	// }
	// 	// authState = ;
	// 	// if (!!errors?.passwordConfirm) {
	// 	// 	setAlert('Passwords do not match', 'danger');
	// 	// 	console.log(alerts);
	// 	// }
	// }, []);

	console.log('signUpError', signUpError);

	// Helper function to handle signUp
	const handleSignUp = async ({ username, email, password }, e) => {
		try {
			await signUp({ username, email, password });
		} catch (err) {
			console.log('err', err.message);
		}

		// *Works
		// await signup(username, email, password);
	};

	console.log('RHF Errors', errors);

	const titleColor = 'white';
	const textColor = 'gray.400';

	return (
		<Flex position="relative" overflow={{ lg: 'hidden' }}>
			<Flex
				flexDirection="column"
				h={{ sm: 'initial', md: 'unset' }}
				w={{ base: '90%' }}
				maxW="1044px"
				mx="auto"
				justifyContent="space-between"
				pt={{ sm: '100px', md: '0px' }}
				me={{ base: 'auto', lg: '50px', xl: 'auto' }}
			>
				<Flex
					alignItems="center"
					justifyContent="start"
					style={{ userSelect: 'none' }}
					flexDirection="column"
					mx={{ base: 'auto', lg: 'unset' }}
					ms={{ base: 'auto', lg: 'auto' }}
					mb="50px"
					w={{ base: '100%', md: '50%', lg: '42%' }}
				>
					<GradientBorder p="2px" me={{ base: 'none', lg: '30px', xl: 'none' }}>
						<Flex
							background="transparent"
							borderRadius="30px"
							direction="column"
							p="40px"
							minW={{ base: 'unset', md: '430px', xl: '450px' }}
							w="100%"
							mx={{ base: '0px' }}
							bg={{
								base: 'rgb(19,21,56)',
							}}
						>
							<Text
								fontSize="xl"
								color={textColor}
								fontWeight="bold"
								textAlign="center"
								mb="22px"
								ref={signUpErrorRef}
							>
								Register With
							</Text>
							<HStack spacing="15px" justify="center" mb="22px">
								<GradientBorder borderRadius="15px">
									<Flex
										_hover={{ filter: 'brightness(120%)' }}
										transition="all .25s ease"
										cursor="pointer"
										justify="center"
										align="center"
										bg="rgb(19,21,54)"
										w="71px"
										h="71px"
										borderRadius="15px"
									>
										<Link href="#">
											<Icon
												color={titleColor}
												as={FaFacebook}
												w="30px"
												h="30px"
												_hover={{ filter: 'brightness(120%)' }}
											/>
										</Link>
									</Flex>
								</GradientBorder>
								<GradientBorder borderRadius="15px">
									<Flex
										_hover={{ filter: 'brightness(120%)' }}
										transition="all .25s ease"
										cursor="pointer"
										justify="center"
										align="center"
										bg="rgb(19,21,54)"
										w="71px"
										h="71px"
										borderRadius="15px"
									>
										<Link href="#">
											<Icon
												color={titleColor}
												as={FaApple}
												w="30px"
												h="30px"
												_hover={{ filter: 'brightness(120%)' }}
											/>
										</Link>
									</Flex>
								</GradientBorder>
								<GradientBorder borderRadius="15px">
									<Flex
										_hover={{ filter: 'brightness(120%)' }}
										transition="all .25s ease"
										cursor="pointer"
										justify="center"
										align="center"
										bg="rgb(19,21,54)"
										w="71px"
										h="71px"
										borderRadius="15px"
									>
										<Link href="#">
											<Icon
												color={titleColor}
												as={FaGoogle}
												w="30px"
												h="30px"
												_hover={{ filter: 'brightness(120%)' }}
											/>
										</Link>
									</Flex>
								</GradientBorder>
							</HStack>
							<Text
								fontSize="lg"
								color="gray.400"
								fontWeight="bold"
								textAlign="center"
								mb="22px"
							>
								or
							</Text>
							{signUpError ? (
								<Alert mb="18px" status="error">
									<AlertIcon />
									<AlertTitle>{signUpError}</AlertTitle>
								</Alert>
							) : null}
							<form onSubmit={handleSubmit(handleSignUp)}>
								<FormControl
									isInvalid={!!errors?.username}
									errortext={errors?.username?.message}
								>
									<FormLabel
										color={titleColor}
										ms="4p"
										fontSize="sm"
										fontWeight="normal"
									>
										Username
									</FormLabel>

									<GradientBorder
										h="50px"
										w={{ base: '100%', lg: 'fit-content' }}
										borderRadius="20px"
										mb={!!errors?.username ? '0px' : '24px'}
									>
										<Input
											data-testid="sign-up-input-username"
											color={titleColor}
											bg={{
												base: 'rgb(19,21,54)',
											}}
											border="transparent"
											borderRadius="20px"
											fontSize="sm"
											size="lg"
											w={{ base: '100%', md: '346px' }}
											maxW="100%"
											h="46px"
											type="text"
											name="username"
											placeholder="Your username"
											{...register('username')}
										/>
									</GradientBorder>
									<FormErrorMessage mb="24px">
										{errors?.username?.message}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={!!errors?.email}
									errortext={errors?.email?.message}
								>
									<FormLabel
										color={titleColor}
										ms="4px"
										fontSize="sm"
										fontWeight="normal"
									>
										Email
									</FormLabel>
									<GradientBorder
										mb="24px"
										h="50px"
										w={{ base: '100%', lg: 'fit-content' }}
										borderRadius="20px"
										mb={!!errors?.email ? '0px' : '24px'}
									>
										<Input
											color={titleColor}
											bg={{
												base: 'rgb(19,21,54)',
											}}
											border="transparent"
											borderRadius="20px"
											fontSize="sm"
											size="lg"
											w={{ base: '100%', md: '346px' }}
											maxW="100%"
											h="46px"
											type="email"
											placeholder="Your email address"
											name="email"
											{...register('email')}
											data-testid="sign-up-input-email"
										/>
									</GradientBorder>
									<FormErrorMessage mb="24px">
										{errors?.email?.message}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={!!errors?.password}
									errortext={errors?.password?.message}
								>
									<FormLabel
										color={titleColor}
										ms="4px"
										fontSize="sm"
										fontWeight="normal"
									>
										Password
									</FormLabel>
									<GradientBorder
										mb="24px"
										h="50px"
										w={{ base: '100%', lg: 'fit-content' }}
										borderRadius="20px"
										mb={!!errors?.password ? '0px' : '24px'}
									>
										<Input
											color={titleColor}
											bg={{
												base: 'rgb(19,21,54)',
											}}
											border="transparent"
											borderRadius="20px"
											fontSize="sm"
											size="lg"
											w={{ base: '100%', md: '346px' }}
											maxW="100%"
											h="46px"
											type="password"
											placeholder="Your password"
											name="password"
											{...register('password')}
											data-testid="sign-up-input-password"
										/>
									</GradientBorder>
									<FormErrorMessage mb="24px">
										{errors?.password?.message}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={!!errors?.passwordConfirm}
									errortext={errors?.passwordConfirm?.message}
								>
									<FormLabel
										color={titleColor}
										ms="4px"
										fontSize="sm"
										fontWeight="normal"
									>
										Confirm Password
									</FormLabel>
									<GradientBorder
										mb="24px"
										h="50px"
										w={{ base: '100%', lg: 'fit-content' }}
										borderRadius="20px"
										mb={!!errors?.passwordConfirm ? '0px' : '24px'}
									>
										<Input
											color={titleColor}
											bg={{
												base: 'rgb(19,21,54)',
											}}
											border="transparent"
											borderRadius="20px"
											fontSize="sm"
											size="lg"
											w={{ base: '100%', md: '346px' }}
											maxW="100%"
											h="46px"
											type="password"
											name="passwordConfirm"
											placeholder="Confirm password"
											{...register('passwordConfirm')}
											data-testid="sign-up-input-confirm-password"
										/>
									</GradientBorder>
									<FormErrorMessage mb="24px">
										{errors?.passwordConfirm?.message}
									</FormErrorMessage>
								</FormControl>
								<FormControl display="flex" alignItems="center" mb="24px">
									<DarkMode>
										<Switch id="remember-login" colorScheme="brand" me="10px" />
									</DarkMode>

									<FormLabel
										color={titleColor}
										htmlFor="remember-login"
										mb="0"
										fontWeight="normal"
									>
										Remember me
									</FormLabel>
								</FormControl>
								<Button
									disabled={
										!!errors.username ||
										!!errors.email ||
										!!errors.password ||
										!!errors.passwordConfirm
									}
									data-testid="sign-up-button"
									isLoading={isSubmitting}
									variant="brand"
									fontSize="10px"
									type="submit"
									w="100%"
									maxW="350px"
									h="45"
									mb="20px"
									mt="20px"
								>
									SIGN UP
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
									Already have an account?
									<Link
										color={titleColor}
										as="span"
										ms="5px"
										href="#"
										fontWeight="bold"
									>
										Sign In
									</Link>
								</Text>
							</Flex>
						</Flex>
					</GradientBorder>
				</Flex>
				<Box
					w={{ base: '335px', md: '450px' }}
					mx={{ base: 'auto', lg: 'unset' }}
					ms={{ base: 'auto', lg: 'auto' }}
					mb="90px"
				></Box>
				<Box
					display={{ base: 'none', lg: 'block' }}
					overflowX="hidden"
					h="1300px"
					maxW={{ md: '50vw', lg: '48vw' }}
					w="960px"
					position="absolute"
					left="0px"
				>
					<Box
						bgImage={signUpImage}
						w="100%"
						h="1300px"
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

SignUp.propTypes = {
	setAlert: PropTypes.func.isRequired,
	loadUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	alerts: PropTypes.array.isRequired,
	signUp: PropTypes.func.isRequired,
};

// map the redux state to this components props so that function/component has access to it

const mapStateToProps = (state) => ({
	// Will now have props.alerts available to comp
	alerts: state.alert,
	auth: state.auth,
});

/*
	Connect takes in two args 
	1. Any state that should be mapped
		- e.g get State from alert 
		- for now == null  
	2. Object with any actions needed to use in this component. The 'setState' of redux 
		setAlert - Will allow access to props.SetAlert
*/
export default connect(mapStateToProps, { setAlert, signUp, loadUser })(SignUp);

import React, { useEffect, useState, useRef } from 'react';

// Chakra imports
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Box,
	Button,
	Center,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Heading,
	HStack,
	Input,
	Link,
	Switch,
	Text,
	Icon,
	DarkMode,
	VStack,
} from '@chakra-ui/react';

const FormSlide = ({ formSlideData, slideNumber }) => {
	console.log('slideNumber', slideNumber);

	return formSlideData.map((slide, index) => {
		return (
			index === slideNumber && (
				<Box height="500px" width="100%" backgroundColor={slide.color}>
					<Flex
						height="100%"
						flexWrap="wrap"
						direction="column"
						justify="center"
						alignContent="center"
					>
						<Center height="100" width="100%">
							<VStack
								divider={<Divider width="270px" orientation="horizontal" />}
								spacing={4}
								align="stretch"
							>
								<Heading>{slide.heading}</Heading>

								<FormControl>
									<FormLabel
										color="blue"
										ms="4px"
										fontSize="sm"
										fontWeight="normal"
									>
										Password
									</FormLabel>
									<Input
										color="blue"
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
									/>
								</FormControl>
							</VStack>
						</Center>
					</Flex>
				</Box>
			)
		);
	});
};

export default FormSlide;

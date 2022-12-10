import React, { useEffect, useState, useRef } from 'react';

// Chakra imports
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Box,
	Divider,
	Flex,
	Button,
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
						<Heading>{slide.heading}</Heading>
					</Flex>
				</Box>
			)
		);
	});
};

export default FormSlide;

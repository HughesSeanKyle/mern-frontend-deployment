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

const FormSlide = ({ color, heading }) => {
	return (
		<Box height="500px" width="100%" backgroundColor={color}>
			<Flex height="100%" direction="column" justify="center" align="center">
				<Heading>{heading}</Heading>
			</Flex>
		</Box>
	);
};

export default FormSlide;

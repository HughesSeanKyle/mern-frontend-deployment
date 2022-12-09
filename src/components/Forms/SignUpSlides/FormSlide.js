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
	HStack,
	Input,
	Link,
	Switch,
	Text,
	Icon,
	DarkMode,
} from '@chakra-ui/react';

const FormSlide = ({ color }) => {
	const slideColor = ['red', 'blue', 'green'];
	return <Box height="500px" width="100%" backgroundColor={color}></Box>;
};

export default FormSlide;

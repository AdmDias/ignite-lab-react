import { 
    Box, 
    Button, 
    Center,
    FormControl,
    Heading,
    Icon,
    Input,
    useTheme,
    VStack
} from 'native-base'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Envelope, Key } from 'phosphor-react-native'

import PrimaryLogo from '../../assets/logo_primary.svg'

export function Login() {
    const { colors } = useTheme()

    return (
        <VStack 
            flex={1}
            pt={getStatusBarHeight()}
            bg={'gray.600'}
            alignItems={'center'}
            px={8}
        >
            <PrimaryLogo />

            <Heading
                mt={20}
                color='gray.100'
                fontSize='xl'
            >
                Acesse sua conta
            </Heading>

            <FormControl isRequired>
                <Input 
                    mt={4}
                    InputLeftElement={
                        <Icon 
                            as={
                                <Envelope size={24} color={colors.gray[300]} />
                            }
                            ml={4}
                        />
                    }
                    type='text'
                    dataDetectorTypes='address'
                    keyboardType='email-address'
                    placeholder='E-mail'
                    size='md'
                    bg='gray.700'
                    borderWidth={1}
                    color='gray.100'
                    borderColor='gray.700'
                    _focus={{
                        borderColor:"green.500",
                        bg: "gray.700"
                    }}

                />
            </FormControl>

            <FormControl isRequired>
                <Input 
                    mt={3}
                    InputLeftElement={
                        <Icon 
                            as={
                                <Key size={24} color={colors.gray[300]} />
                            }
                            ml={4}
                        />
                    }
                    placeholder='Senha'
                    size='md'
                    bg='gray.700'
                    secureTextEntry
                    color='gray.100'
                    borderWidth={1}
                    borderColor='gray.700'
                    _focus={{
                        borderColor:"green.500",
                        bg: "gray.700"
                    }}
                />
            </FormControl>

            <Button
                mt={5}
                w='full'
                bg='green.700'
                size='lg'
                _pressed={{
                    bg: 'green.500'
                }}
            >
                Entrar
            </Button>

        </VStack>
    )
}
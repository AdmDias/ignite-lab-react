import { 
    FormControl,
    Heading,
    Icon,
    useTheme,
    VStack
} from 'native-base'

import PrimaryLogo from '../../assets/logo_primary.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Envelope, Key } from 'phosphor-react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

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
                    InputLeftElement={
                        <Icon 
                            as={
                                <Envelope size={24} color={colors.gray[300]} />
                            }
                            ml={4}
                        />
                    }
                    placeholder='E-mail'
                />
            </FormControl>

            <FormControl isRequired>
                <Input 
                    InputLeftElement={
                        <Icon 
                            as={
                                <Key size={24} color={colors.gray[300]} />
                            }
                            ml={4}
                        />
                    }
                    placeholder='Senha'
                    secureTextEntry
                />
            </FormControl>

            <Button
                mt={5}
                w='full'
                title='Entrar'
            />

        </VStack>
    )
}
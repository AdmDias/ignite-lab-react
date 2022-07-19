import { 
    HStack,
    VStack,
    Heading,
    Button
} from 'native-base'
import { SignOut } from 'phosphor-react-native'
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import SecondaryLogo from '../../assets/logo_secondary.svg'

export function Home() {
    return (
        <VStack
            height={'full'}
            bg={'gray.400'}
            pt={6}
        >
            <HStack 
                my={10}
                px={6}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <SecondaryLogo />
                <SignOut size={26} color='#7C7C8A'/>
            </HStack>

            <VStack
                bg={'gray.700'}
                height={'full'}
                pt={10}
                px={6}
            >
                <HStack
                    justifyContent={'space-between'}
                >
                    <Heading color={'gray.100'}>
                        Solicitações
                    </Heading>
                    <Heading color={'gray.100'}>
                        0
                    </Heading>
                </HStack>

                <HStack
                    mt={5}
                >
                    <Button
                        flex={1}
                        bg={'gray.400'}
                        size={'md'}
                    >
                        EM ANDAMENTO
                    </Button>
                    <Button
                        flex={1}
                        bg={'gray.400'}
                        size={'md'}
                    >
                        FINALIZADOS
                    </Button>
                </HStack>
                
                <Button
                    mt={5}
                    w={'full'}
                    bg={'green.700'}
                    size={'lg'}
                >
                    Nova solicitação
                </Button>
            </VStack>
        </VStack>
    )
}
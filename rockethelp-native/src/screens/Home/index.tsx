import { 
    HStack,
    VStack,
    Heading,
    Button,
    IconButton,
    useTheme
} from 'native-base'

import { SignOut } from 'phosphor-react-native'
import { useState } from 'react'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import SecondaryLogo from '../../assets/logo_secondary.svg'
import { Filter } from '../../components/Filter'

export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
    
    const { colors } = useTheme()
 
    return (
        <VStack
            flex={1}
            bg='gray.700'
            pt={6}
        >
            <HStack 
                py={getStatusBarHeight() / 4}
                px={6}
                bg='gray.400'
                alignItems='center'
                justifyContent='space-between'
            >
                <SecondaryLogo />

                <IconButton
                    _pressed={{
                        bg: 'gray.500'
                    }}
                >
                    <SignOut color={colors.gray[300]}/>
                </IconButton>
            </HStack>

            <VStack
                flex={1}
                px={6}
                py={5}
            >
                <HStack
                    w='full'
                    alignItems='center'
                    justifyContent='space-between'
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
                    space={3}
                >
                    <Filter
                        title='em andamento'
                        type='open'
                        onPress={() => setStatusSelected('open')}
                        isActive={statusSelected === 'open'}
                    />
                    <Filter
                        title='finalizados'
                        type='closed'
                        onPress={() => setStatusSelected('closed')}
                        isActive={statusSelected === 'closed'}
                    />
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
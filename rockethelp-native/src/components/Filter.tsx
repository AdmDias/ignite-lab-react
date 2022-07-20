import { 
    Button,
    IButtonProps, 
    Text,
    useTheme
} from "native-base";


interface FilterProps extends IButtonProps {
    title: string;
    isActive?: boolean;
    type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: FilterProps) {
    const { colors } = useTheme()
    
    const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]
    
    return (
        <Button
            flex={1}
            variant='outline'
            borderWidth={1}
            borderColor={isActive ? colorType : 'gray.600'}
            bg='gray.600'
            size='sm'
            _pressed={{
                bg: 'gray.600'
            }}
            { ...rest }
        >
            <Text
                color={isActive ? colorType : 'gray.300'}
                fontWeight='bold'
                textTransform='uppercase'
            >
                { title }
            </Text>
        </Button>
    )
}
import { Button as NativeBaseButton, IButtonProps as NativeBaseButtonProps, Text } from "native-base";

interface ButtonProps extends NativeBaseButtonProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
    return (
        <NativeBaseButton 
            bg='green.700'
            size='lg'
            rounded='sm'
            _pressed={{
                bg: 'green.500'
            }}
            { ...rest }
        >
            <Text
                fontWeight="bold"
                color="gray.100"
            >
                { title }
            </Text>
        </NativeBaseButton>
    )
}
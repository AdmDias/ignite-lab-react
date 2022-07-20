import { Input as NativeBaseInput, IInputProps as NativeBaseInputProps } from "native-base";


export function Input({ ...rest } : NativeBaseInputProps) {
    return (
        <NativeBaseInput 
            mt={4}
            bg='gray.700'
            color='gray.100'
            borderColor='gray.700'
            borderWidth={1}
            _focus={{
                borderColor:"green.500",
                bg: "gray.700"
            }}
            size='md'
            { ...rest }
        />
    )
}
import { Flex } from "@chakra-ui/layout"

const Footer = (params) => {
    return (
        <Flex width='100%' height='80px' py='10' bgColor="blue.600" justify="center" align="center" fontSize={[16, 20, 24, 28]}>
            Created to learn how redux works.
        </Flex>
    )
}
export default Footer
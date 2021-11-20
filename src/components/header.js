import '../index.css'
import { Box, Flex } from '@chakra-ui/layout'
// import { Switch } from "@chakra-ui/react"

const Header = (params) => {
    return (
        <Box bg="blue.500" className="headerwrapper">
            <Flex className="header" justify="space-between">
                <Box>
                    To do app
                </Box>
                {/* <Box>
                    <Switch size="md" />
                </Box> */}
            </Flex>
        </Box>
    )
}
export default Header
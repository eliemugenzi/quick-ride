import COLORS from "@/theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    },
    text: {
        flexBasis: '10%',
        alignSelf: 'center',
        fontSize: 12,
        marginHorizontal: 5
    },
    line: {
        flexBasis: '45%',
        alignSelf: 'center',
        backgroundColor: COLORS.gray,
        height: 3
    }
})

export default styles
import DIMENSIONS from '@/theme/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: DIMENSIONS.deviceWidth,
        height: DIMENSIONS.deviceHeight
    },
    wrapper: {
        marginHorizontal: DIMENSIONS.deviceWidth * 0.1,
        marginVertical: DIMENSIONS.deviceHeight * 0.1
    },
    buttonsWrapper: {
       marginTop: '80%'
    },
    registerBtn: {
        marginVertical: DIMENSIONS.margin
    },
    title: {
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        fontSize: 12
    }
})

export default styles;

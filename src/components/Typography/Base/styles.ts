import COLORS from '@/theme/colors';
import { StyleSheet } from 'react-native';

export type BaseType =  
 'plain'
| 'primary'
| 'secondary'
| 'success'
| 'content'
| 'danger'
| 'warning';

const styles = (type: BaseType = 'plain', level?: number)  => StyleSheet.create({
    boldedText: {
        fontFamily: 'Poppins-Bold',
    },
    regularText: {
        fontFamily: 'Poppins-Regular'
    },
    text: {
        color: type === 'primary' ? COLORS.primary : type === 'danger' ? COLORS.red : COLORS.black,
        fontSize: 14,
    },
    paragraph: {
        width: '100%',
        marginBottom: 15,
        fontFamily: 'Poppins-Regular'
    },
    title: {
        fontSize: level === 1 ? 24 : level === 2 ? 21 : level === 3 ? 18 : 15,
        fontFamily: 'Poppins-Bold'
    }
})

export default styles;

import COLORS from '@/theme/colors';
import { StyleSheet }  from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderColor: COLORS.primary,
        borderWidth: 1,
    },
    title: {
        fontSize: 14,
    },
    description: {
        fontSize: 12,
        color: COLORS.darkGray
    },
    actionButtons: {
        flexDirection: 'row'
    },
    editButtonWrapper: {
        marginRight: 15
    },
    dateCreated: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'right'
    }
})

export default styles
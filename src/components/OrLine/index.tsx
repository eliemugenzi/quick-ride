import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import Typography from '../Typography'

import styles from './styles';

interface Props {
    style?: StyleProp<ViewStyle>;
}

const OrLine: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.wrapper, style]}>
        <View style={styles.line} />
        <Typography.Text style={styles.text}>Or</Typography.Text>
        <View style={styles.line} />

    </View>
  )
}

export default OrLine
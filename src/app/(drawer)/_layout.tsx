import React from "react";
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
     <Drawer>
        <Drawer.Screen name="history" options={{
            drawerLabel: 'History'
        }} />
        <Drawer.Screen name="complain" options={{
            drawerLabel: 'Complain'
        }} />
     </Drawer>
    )
}

export default DrawerLayout
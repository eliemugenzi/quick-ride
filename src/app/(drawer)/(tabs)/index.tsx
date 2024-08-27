import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

import image from "@/assets/images/map-marker.png";
import COLORS from "@/theme/colors";
import Button from "@/components/Button";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import Icon from "@/components/Icon";
import DIMENSIONS from "@/theme/dimensions";
import Row from "@/components/Row";
import BottomSheet from "@/components/BottomSheet";
import Typography from "@/components/Typography";

import Line from "@/components/Line";
import componentDimensions from "@/theme/componentDimensions";
import Location from "@/components/Location";
import { router, useNavigation } from "expo-router";



const Home = () => {
  const navigation = useNavigation();
  const [transportmModalOpen, setTransportModalOpen] = useState(false);
  const [canConfirmSelectedAddress, setCanConfirmSelectedAddress] =
    useState(false);
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity style={styles.hamburgerIcon} onPress={()=> {
        navigation.openDrawer();
      }}>
        <Ionicons name="menu" color={COLORS.black} size={30} />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.9441,
          longitude: 30.0619,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -1.9706,
            longitude: 30.0535,
          }}
        >
          <Image source={image} />
        </Marker>
      </MapView>
      <View style={styles.formModal}>
        <View style={styles.buttonGroup}>
          <Button
            type="primary"
            size="small"
            style={{
              flexBasis: "50%",
            }}
            onPress={() => {
              router.navigate("/transport");
            }}
          >
            Rental
          </Button>
          <View style={styles.locationBtn}>
            <Icon name="location-target" size={20} color={COLORS.black} />
          </View>
        </View>
        <Card
          style={{
            backgroundColor: COLORS.primaryLight,
          }}
        >
          <TextInput
            inputWrapperStyle={styles.inputWrapperStyle}
            placeholder="Where would you go?"
            prefix={
              <Icon
                name="search"
                color={COLORS.black}
                style={styles.inputIcon}
              />
            }
            suffix={<Icon name="heart" color={COLORS.black} size={30} />}
          />
          <Row style={styles.input}>
            <Button
              type="primary"
              size="tiny"
              onPress={() => {
                setTransportModalOpen(!transportmModalOpen);
              }}
            >
              Transport
            </Button>
            <Button
              size="tiny"
              style={{
                backgroundColor: COLORS.primaryLight,
              }}
            >
              Delivery
            </Button>
          </Row>
        </Card>
      </View>
      {transportmModalOpen && (
        <BottomSheet style={{ margin: 0, padding: 0 }}>
          <Typography.Title
            level={3}
            style={{
              marginVertical: 15,
              textAlign: "center",
            }}
          >
            Select address
          </Typography.Title>
          <Line style={styles.line} />

          <TextInput
            style={styles.input}
            placeholder="From"
            prefix={
              <Icon name="location-target" size={15} style={styles.inputIcon} />
            }
          />
          <TextInput
            placeholder="To"
            style={styles.input}
            prefix={<Icon name="map-pin" size={20} style={styles.inputIcon} />}
          />
          <Line style={styles.line} />
          <Typography.Text style={styles.input}>Recent places</Typography.Text>
          <Location
            style={styles.input}
            onPress={() => {
              setTransportModalOpen(false);
              setCanConfirmSelectedAddress(true);
            }}
          />
          <Location style={styles.input} />
          <Location style={styles.input} />
        </BottomSheet>
      )}
      {canConfirmSelectedAddress && (
        <BottomSheet>
          <Typography.Title style={{ textAlign: "center" }}>
            Select address
          </Typography.Title>
          <Location style={styles.input} />
          <Location style={styles.input} />
          <Button style={styles.input} type="primary">
            Confirm location
          </Button>
        </BottomSheet>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: componentDimensions.textInput.verticalMargin,
    marginHorizontal: componentDimensions.textInput.horizontalMargin,
  },
  line: {
    marginVertical: componentDimensions.textInput.verticalMargin,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  hamburgerIcon: {
    position: "absolute",
    top: "10%",
    left: "10%",
    backgroundColor: COLORS.primaryLight,
    zIndex: 1000,
    borderRadius: 5,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  formModal: {
    position: "absolute",
    bottom: DIMENSIONS.deviceHeight * 0.1,
    // zIndex: 1000,
    left: "5%",
    width: "90%",
    padding: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: DIMENSIONS.margin,
  },
  locationBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  inputWrapperStyle: {
    padding: 0,
    backgroundColor: COLORS.white,
  },
  inputIcon: {
    marginRight: 10,
    marginLeft: -10,
  },
});

export default Home;

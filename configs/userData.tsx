import React, { useEffect, useState } from 'react';
import * as Device from "expo-device";
import * as Location from "expo-location";
import Geocoder from 'react-native-geocoding';

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/slices/authSlice";
import { Platform } from 'react-native';

Geocoder.init('AIzaSyDn1X_BlFj-57ydasP6uZK_X_WTERNJb78');

type Props = {

}


 

const useFetch = (params: any) => {

 const user = useSelector(selectUser);
 const [status, setStatus] = useState('idle');
 const [data, setData] = useState([]);
 const [refetch, setRefetch] = useState(false)

const [longitude, setLongitude] = useState(0);
const [latitude, setLatitude] = useState(0);
 const [location, setLocation] = useState({});

 const [currentLocation, setCurrentLocation] = useState<any>();
 const URL = "https://www.sunshinedeliver.com";
 const [username, setUsername] = useState();
const [userPhoto, setUserPhoto] = useState("");
 const [userPhone, setUserPhone] = useState("");
 const [userAddress, setUserAddress] = useState("");
 const [userId, setUserId] = useState(1);
 const customer_avatar = `${userPhoto}`;
 const customer_image = `${URL}${customer_avatar}`;
 const [address, setAddress] = useState('');


    const dispatch = useDispatch();


    const url = "https://www.sunshinedeliver.com/api";

    const pickUser = async () => {
        let response = await fetch(
          "https://www.sunshinedeliver.com/api/customer/profile/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userId,
            }),
          }
        )
          .then((response) => response.json())
          .then((responseJson) => {
            setUserPhone(responseJson.customer_detais.phone);
            setUserAddress(responseJson.customer_detais.address);
            setUserPhoto(responseJson.customer_detais.avatar);
          })
          .catch((error) => {
            // console.error(error);
          });
      };

    const userLocation = async () => {
        if (Platform.OS === "android" && !Device.isDevice) {
            alert(
            "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
          );
          return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }
      
        let location = await Location.getCurrentPositionAsync({});
      
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      };
      

    useEffect(() => {
        console.log("usese id", userPhoto)

        if (!params) return;

        const fetchData = async () => {
            setStatus('loading');

            let headers = undefined;

            if (params.auth) {
                let tokenvalue = user?.token;

                headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${tokenvalue}`
                }
            }
            else {
                headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }

            const response = await fetch(url + params.endpoint, {
                headers: headers,
                method: params.method,
                ...(params.method == "POST" && { body: JSON.stringify(params.body) })
            })

            const data = await response.json();
            setData(data);
            setStatus('loaded');
        };
    Geocoder.from(currentLocation)
      .then(response => {
        const formattedAddress = response.results[0].formatted_address;
        setAddress(formattedAddress);
      })
      .catch(error => {
        console.log(error);
      });
      pickUser();

        fetchData();
        const timer = setInterval(() => userLocation(), 2000);
        return () => clearInterval(timer);
    }, [refetch, data, address]);

    return { status, data, refetch, setRefetch, address, customer_image };
};
export default useFetch;
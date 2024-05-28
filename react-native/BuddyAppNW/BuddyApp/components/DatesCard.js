import React, { useState, memo } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { addfavoriteState, removefavoriteState } from "../context/slices/favoriteSlice/favoriteSlice";

const { width, height } = Dimensions.get("window");

const DatesCard = memo(({ items }) => {
  const item = items.item;
  const router = useRouter();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const imageWidth = width * 0.8;
  const imageHeight = height * 0.76;

  const favoritesHandle = () => {
    if (!liked) {
      dispatch(addfavoriteState(item?.id));
      setLiked(true);
    } else {
      dispatch(removefavoriteState(item?.id));
      setLiked(false);
    }
  };

  return (
    <Link push href={`/profile/${item?.id}`}>
      <View style={{ paddingTop: 20, width: '100%', height: '100%' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <Image
            source={{ uri: item?.imgUrl }}
            style={{
              width: imageWidth,
              height: imageHeight,
              borderRadius: imageWidth / 15,
              contentFit: 'cover'
            }}
          />
        </View>

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View style={{ position: "absolute", top: 50, left: 30 }}>
          <TouchableOpacity onPress={favoritesHandle}>
            {!liked ? (
              <FontAwesome5
                name="heart"
                size={32}
                color="white"
                style={{
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 5,
                }}
              />
            ) : (
              <FontAwesome
                name="heart"
                size={32}
                color="white"
                style={{
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 5,
                }}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={{ position: "absolute", bottom: 20, left: 20, paddingLeft: 4 }}>
          <View style={{ backgroundColor: "#06BCEE", borderRadius: 125 / 2, width: 125, alignItems: 'center', marginBottom: 3 }}>
            <Text style={{ color: "white", fontSize: 14 }}>AVAILABLE NOW</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1 }}>
              {item?.name} {item?.lastName}
            </Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1 }}>
              {", "}
              {item?.age}
            </Text>
            <Feather name="check-circle" size={24} color="#06BCEE" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1 }}>
              {item?.city}
              {", "}
            </Text>
            <Text style={{ color: "white", fontSize: 12, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>
              {item?.country}
            </Text>
          </View>
        </View>

        <View style={{ position: "absolute", top: 45, right: width > 375 ? 30 : 30, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>{"$35"}</Text>
          <Text style={{ color: "white", fontSize: 12, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>{"per hr"}</Text>
        </View>
      </View>
    </Link>
  );
}, (prevProps, nextProps) => {
  return prevProps === nextProps;
});

export default DatesCard;

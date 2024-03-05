import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
//import React, { useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FoodItem from "../../components/Fooditem";
const Hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const menu = [
    {
      id: "20",
      name: "Recommended",
      items: [
        {
          id: "101",
          name: "Paneer 65",
          price: 50,
          description:
            "קלוריות:",
          rating: 4.1,
          ratings: 43,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "102",
          name: "Chilly Chicken (Boneless)",
          price: 35,
          description:
          "קלוריות:",
          rating: 4.3,
          ratings: 34,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "103",
          name: "Spl Veg Biryani",
          price: 60,
          description: "קלוריות:",
          rating: 4.5,
          ratings: 56,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "104",
          name: "Chilly Paneer",
          price: 40,
          description: "קלוריות:",
          rating: 3.8,
          ratings: 22,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "105",
          name: "Chicken 65",
          price: 32.5,
          description: "קלוריות:",
          rating: 4.5,
          ratings: 45,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "11",
      name: "Rice",
      items: [
        {
          id: "201",
          name: "Chicken Fried Rice",
          price: 45,
          description:"קלוריות:",
          
          rating: 4.3,
          ratings: 34,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
          veg: false,
          bestSeller: true,
        },
        {
          id: "202",
          name: "Egg Fried Rice",
          price: 50,
          description: "קלוריות:",
          rating: 4.3,
          ratings: 52,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
          veg: false,
          bestSeller: false,
        },
        {
          id: "203",
          name: "Veg Fried Rice",
          price: 60,
          description: "קלוריות:",
          rating: 4.6,
          ratings: 56,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
          veg: true,
          bestSeller: true,
        },
        {
          id: "204",
          name: "Jeera Rice",
          price: 25,
          description: "קלוריות:",
          rating: 4.5,
          ratings: 48,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
          veg: true,
          bestSeller: false,
        },
      ],
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#ffe4b5" }}>
      <View style={styles.v1}>
        <Ionicons
          onPress={() => router.back()}
          style={{ padding: 5 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <View style={styles.v2}>
          <SimpleLineIcons name="camera" size={24} color="black" />
          <Ionicons name="bookmark-outline" size={24} color="black" />
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={styles.v3}>
        <Text style={styles.pname}>{params?.name}</Text>
        <Text style={styles.tex}>איסוף מהיר :)</Text>
        <View style={styles.v4}>
          <View style={styles.v5}>
            <Text style={styles.t1}>{params?.aggregate_rating}</Text>
            <Ionicons name="star" size={15} color="white" />
          </View>
          <Text style={styles.t2}>Ratings</Text>
        </View>
        <View style={styles.v6}>
          <Text>10-20 mins Sami-Shamoon</Text>
        </View>
      </View>

      {menu?.map((item, index) => (
        <FoodItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  
  v1: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  v2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },
  v3: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  pname: {
    fontSize: 30,
    fontWeight: "bold",
  },
  tex: {
    marginTop: 5,
    color: "gray",
    fontWeight: "500",
    fontSize: 20,
  },
  v4: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 10,
  },
  v5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAAA4E",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 5,
    gap: 4,
  },

  t1: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  t2: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 5,
  },
  v6: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAAA4E",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 12,
  },
});

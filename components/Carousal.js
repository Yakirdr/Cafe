import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/premium-photo/photo-realistic-beef-schnitzel-sandwich_960911-1575.jpg",
    "https://www.dirshu.co.il/wp-content/uploads/2017/04/%D7%A7%D7%A4%D7%94-2.jpg",
    "https://th.bing.com/th/id/R.98eed29ceef0e5d3aa646e46e7a63d9b?rik=ndrxtZjYoh0eGQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.6c9502a302eb46415dc313a318a2ae4c?rik=E%2fpJyspsOsP31w&pid=ImgRaw&r=0",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={styles.imgcomp}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imgcomp: {
    borderRadius: 6,
    width: "90%",
    marginTop: 50,
  },
});

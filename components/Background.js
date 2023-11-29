import { Image, StyleSheet } from 'react-native';

export default function Background({ placeholderImageSource }) {
  return (
    <Image style={styles.image} source={placeholderImageSource} />
  );  
}

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
  }

});
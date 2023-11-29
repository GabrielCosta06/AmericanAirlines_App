import { StyleSheet, Image } from 'react-native';

export default function Logo({ImageSrc}) {
  return (
    <Image style={styles.Logo} source={ImageSrc}/>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 350,
    height: 350,
    position: 'absolute',
  }, 
  
}); 
 
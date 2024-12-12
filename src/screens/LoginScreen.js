import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { signInWithFacebook } from '../auth/authHelper';

// Placeholder login screen
export default function LoginScreen() {
  const handleLogin = async () => {
    const result = await signInWithFacebook();
    console.log(result);
    alert(result.message);
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen Placeholder</Text>
      <Button title="Login with Facebook" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

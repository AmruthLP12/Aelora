import React from 'react';
import { Button, Alert } from 'react-native';
import { deleteCurrentSession } from '../lib/appwrite';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await deleteCurrentSession();
      Alert.alert("Logged out", "You have been logged out successfully.");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;

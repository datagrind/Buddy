import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../../../../components/Profile/Profile'
import { useLocalSearchParams } from 'expo-router'

const ProfileDetails = () => {

    const { id } = useLocalSearchParams()

  return (
    <Profile id={id} />
  )
}

export default ProfileDetails
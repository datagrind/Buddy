import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../../../../components/Profile/Profile'
import { useLocalSearchParams } from 'expo-router'
import { memo } from 'react'

const ProfileDetails = memo(() => {

    const { id } = useLocalSearchParams()

  return (
    <Profile id={id} />
  )
}, (prevProps, nextProps) => { 
  console.log("[id]prevProps===nextProps: ", prevProps === nextProps)
  return prevProps.items === nextProps.items;
})

export default ProfileDetails
import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { NativeBaseProvider } from 'native-base';

const FloatingBottomNavigation = () => {
  return (
    <NativeBaseProvider>
        <Container>
        <Content padder>
            {/* Your main content goes here */}
            <Text>Main Content</Text>
        </Content>

        {/* Floating Action Button */}
        <Footer>
            <FooterTab>
            <Button vertical>
                <Icon name="home" />
                <Text>Home</Text>
            </Button>
            <Button vertical>
                <Icon name="search" />
                <Text>Search</Text>
            </Button>
            <Button vertical>
                <Icon name="person" />
                <Text>Profile</Text>
            </Button>
            </FooterTab>
            <Button style={styles.fab}>
            <Icon name="add" />
            </Button>
        </Footer>
        </Container>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#ff4081', // You can change the color as per your preference
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default FloatingBottomNavigation;

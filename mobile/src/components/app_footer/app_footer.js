import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';

class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active>
            <Text>То одно</Text>
          </Button>
          <Button>
            <Text>То другое</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

export default AppFooter;

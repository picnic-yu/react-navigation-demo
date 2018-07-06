import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Accordion, List } from 'antd-mobile-rn';
export default class AccordionExmple extends React.Component {
    onChange = (key) => {
      console.log(key);
    }
    render() {
      return (
        <View style={{ marginTop: 80, marginBottom: 10 }}>
          <Accordion onChange={this.onChange} defaultActiveKey="2">
            <Accordion.Panel header="Title 1">
              <List>
                <List.Item>Content 1</List.Item>
                <List.Item>Content 2</List.Item>
                <List.Item>Content 3</List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="Title 2">
              this is panel content2 or other
            </Accordion.Panel>
            <Accordion.Panel header="Title 3">
              Text text text text text text text text text text text text text
              text text
            </Accordion.Panel>
          </Accordion>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});
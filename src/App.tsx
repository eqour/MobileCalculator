import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import calculatorHelper from './CalculateHelper';

const App = () => {
  const [screenText, setScreenText] = useState('0');

  const handleKeyPress = (key: string) => {
    setScreenText(getResultText(key));
  };

  const getResultText = (char: string) => {
    // eslint-disable-next-line prettier/prettier
    const numbers = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
    const operations = ['-', '+', '*', '/', '%'];
    if (numbers.indexOf(char) !== -1) {
      return calculatorHelper.addChar(char);
    } else if (operations.indexOf(char) !== -1) {
      return calculatorHelper.doOperation(char);
    } else if (char === '=') {
      return calculatorHelper.doEqualPress();
    } else if (char === '⌫') {
      return calculatorHelper.eraseLastChar();
    } else if (char === 'C') {
      return calculatorHelper.clear();
    } else {
      return '0';
    }
  };

  const buttonChars = [
    ['C', '%', '⌫', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '00', ',', '='],
  ];

  const getButtonRows = () => {
    const rows = [];
    for (let i = 0; i < buttonChars.length; i++) {
      rows.push(
        <ButtonRow
          key={i}
          chars={buttonChars[i]}
          onButtonPressed={handleKeyPress}
        />,
      );
    }
    return rows;
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topPane}>
        <Text style={styles.resultText}>{screenText}</Text>
      </View>
      <View style={styles.bottomPane}>{getButtonRows()}</View>
    </View>
  );
};

const ButtonRow = (props: any) => {
  const onButtonPressed = (text: string) => props.onButtonPressed(text);

  const getButtons = () => {
    const buttons = [];
    for (let i = 0; i < props.chars.length; i++) {
      buttons.push(
        <CalcButton key={i} text={props.chars[i]} onPress={onButtonPressed} />,
      );
    }
    return buttons;
  };

  return <View style={styles.buttonRow}>{getButtons()}</View>;
};

const CalcButton = (props: any) => {
  const onPress = () => {
    props.onPress(props.text);
  };

  return (
    <TouchableOpacity style={styles.calcButton} onPress={onPress}>
      <Text style={styles.calcButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 10,
    rowGap: 10,
    backgroundColor: 'whitesmoke',
  },
  topPane: {
    flex: 1,
    backgroundColor: 'paleturquoise',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  bottomPane: {
    flex: 6,
    rowGap: 10,
  },
  buttonRow: {
    flex: 1,
    columnGap: 10,
    flexDirection: 'row',
  },
  calcButton: {
    flex: 1,
    backgroundColor: 'white',
  },
  calcButtonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 32,
  },
});

export default App;

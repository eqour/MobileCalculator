import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 10,
    rowGap: 10,
    backgroundColor: 'whitesmoke',
  },
  topPane: {
    flex: 1,
    backgroundColor: 'lightgreen',
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

const App = () => {
  const getButtonRows = () => {
    const rows = [];
    for (let i = 0; i < 5; i++) {
      rows.push(<ButtonRow key={i} />);
    }
    return rows;
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topPane}>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.bottomPane}>{getButtonRows()}</View>
    </View>
  );
};

const ButtonRow = () => {
  const getButtons = () => {
    const buttons = [];
    for (let i = 0; i < 4; i++) {
      buttons.push(<CalcButton key={i} />);
    }
    return buttons;
  };

  return <View style={styles.buttonRow}>{getButtons()}</View>;
};

const CalcButton = () => {
  return (
    <TouchableOpacity style={styles.calcButton}>
      <Text style={styles.calcButtonText}>C</Text>
    </TouchableOpacity>
  );
};

export default App;

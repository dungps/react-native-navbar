import React, { PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

const renderButtonText(data, props) {
  if (!data || data.props) {
    return data; 
  }
  
  return (
    <View style={props.style}>
      <Text style={[styles.navBarButtonText, props.textStyle]}>{props.title}</Text>
    </View>
  )
}

export default function NavbarButton(props) {
  const {
    style,
    textStyle,
    title,
    handler,
    disabled,
    accessible,
    accessibilityLabel
  } = props;

  return (
    <TouchableOpacity
      style={styles.navBarButton}
      onPress={handler}
      disabled={disabled}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    >
      {renderButtonText(title, props)}
    </TouchableOpacity>
  );
}

NavbarButton.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  tintColor: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
  accessible: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
};

NavbarButton.defaultProps = {
  style: {},
  title: '',
  tintColor: '#0076FF',
  disabled: false,
  handler: () => ({}),
};

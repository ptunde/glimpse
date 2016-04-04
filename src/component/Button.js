import React, {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PropTypes
} from 'react-native';
import { colors } from '../../styles/constants';

const SimpleButton = ({
  onPress,
  children,
  style,
  textStyle,
  disabled,
  text,
  icon,
  iconStyle
}) => {
  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  const wrapperStyles = [
    styles.container, style, disabled && styles.containerDisabled
  ];

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={wrapperStyles}>
        {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : children}
      </View>
    </TouchableOpacity>
  );
};

SimpleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string
};

SimpleButton.defaultProps = {
  disabled: false
};

const styles = SimpleButton.styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.SOFT_BLUE,
    borderRadius: 3
  },
  containerDisabled: {
    opacity: 0.5
  },
  text: {
    fontFamily: 'HelveticaNeue-Medium',
    color: 'white'
  },
  iconStyle: {
    marginLeft: 10
  }
});

export default SimpleButton;

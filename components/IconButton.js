import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, name, style, size, color }) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

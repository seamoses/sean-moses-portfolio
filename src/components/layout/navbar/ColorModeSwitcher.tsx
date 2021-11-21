import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="md"
      fontSize="x-large"
      variant="ghost"
      color="current"
      marginX="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

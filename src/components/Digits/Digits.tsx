import { Text } from "@mantine/core";
import { formatNumber } from "../../utils";
import type { DigitsProps } from "./types";

export const Digits = ({ value, ...props }: DigitsProps) => {
  return <Text {...props}>{formatNumber(value)}</Text>;
};

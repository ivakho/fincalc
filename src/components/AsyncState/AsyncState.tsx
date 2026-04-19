import { Alert, Flex, Loader } from "@mantine/core";
import type { AsyncStateProps } from "./types";

export const AsyncState = ({ loading, error, children }: AsyncStateProps) => {
  if (loading)
    return (
      <Flex justify="center" align="center" h="200px">
        <Loader color="blue" />
      </Flex>
    );

  if (error)
    return (
      <Flex justify="center" align="center" h="200px">
        <Alert color="red" title="Something went wrong">
          Failed to load data.
        </Alert>
      </Flex>
    );

  return <>{children}</>;
};

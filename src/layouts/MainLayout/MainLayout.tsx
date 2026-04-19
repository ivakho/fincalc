import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import { BackButton, AddButton } from "../../components";
import { useLocation } from "react-router-dom";
import { Group } from "@mantine/core";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const isRoot = location.pathname !== "/";

  return (
    <div className={styles.container}>
      {children}
      <Group>
        {isRoot && <BackButton />}
        <AddButton ml={"auto"} variant={isRoot ? "light" : "filled"} />
      </Group>
    </div>
  );
};

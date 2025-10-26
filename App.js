import { useRef, useState } from "react";
import { DrawerLayoutAndroid } from "react-native";
import { Box } from "./components/ui/primitives";
import { StatusBar } from 'expo-status-bar';
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";

import { NativeBaseProvider } from 'native-base';

const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");

  // Ref Declaration
  const drawer = useRef(null);

  // Change Page Function
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };

  // Navigation View (Drawer Content)
  const navigationView = () => (
    <Box p={8} bg="#222222" flex={1}>
      <Button text="List" onPress={() => changePage(drawer, "list")} />
      <Separator height={30} />
      <Button text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
    </Box>
  );

  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <StatusBar style="light" backgroundColor="#AA0002" />
        <Box>
          <Header drawer={drawer} />
          {page === "list" ? <List /> : page === "article" ? <Article /> : null}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};

export default App;

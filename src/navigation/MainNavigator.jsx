import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSession } from "../db";
import { setUser } from "../features/auth/authSlice";
import { useGetUserQuery } from "../services/userService";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../global/colors";

const MainNavigator = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const storedSession = await fetchSession();
        if (storedSession.length > 0) {
          setSession(storedSession[0]);
        }
      } catch (error) {
        console.error("Error al obtener la sesión:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const { data: user, isFetching } = useGetUserQuery(
    { localId: session?.localId },
    { skip: !session }
  );

  useEffect(() => {
    if (user && !isFetching) {
      const favourites = user.favourites ? Object.values(user.favourites) : [];
      dispatch(setUser({ ...user, localId: session.localId, favourites }));
    }
  }, [user, isFetching, session, dispatch]);

  if (loading || isFetching) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.yellow} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

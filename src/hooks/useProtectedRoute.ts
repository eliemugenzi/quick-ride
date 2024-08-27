import { useNavigationContainerRef } from "expo-router";

const useProtectedRoute = () => {
  const rootNavigation = useNavigationContainerRef();
  rootNavigation.isReady();

  return {
    isNavigationReady: rootNavigation.isReady(),
  };
};

export default useProtectedRoute;

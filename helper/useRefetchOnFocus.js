import { useFocusEffect } from "@react-navigation/native";

const useRefetchOnFocus = (refetch) => {
  useFocusEffect(() => {
    refetch();
  });
  /* Maybe subscribe to App state here too */
};
export default useRefetchOnFocus;

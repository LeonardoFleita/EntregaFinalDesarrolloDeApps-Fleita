import { colors } from "../global/colors";

export const buttonStyles = {
  base: {
    width: "90%",
    backgroundColor: colors.yellow,
    alignSelf: "center",
    padding: 9,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
};

export const sessionStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 65,
  },
  title: {
    fontFamily: "Baumans",
    color: colors.yellow,
    fontSize: 55,
    textShadowColor: colors.orange,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    gap: 13,
    marginVertical: 20,
  },
  textInput: {
    borderRadius: 25,
    backgroundColor: colors.mediumGrey,
    width: "100%",
    paddingHorizontal: 10,
    height: 38,
    alignSelf: "center",
  },
};

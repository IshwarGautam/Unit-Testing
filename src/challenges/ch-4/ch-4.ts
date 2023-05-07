// Valid token is the string having length 10
export let TOKEN = "fj@kf56fjk";

/**
 * Function to set token.
 * @param token string
 */
export function setToken(token: any) {
  TOKEN = token;
}

/**
 * Function to get token.
 * @param onSuccess function
 * @param onError function
 * @returns success function | Error
 */
export function getToken(
  onSuccess: (token: string) => void,
  onError: (err: Error) => void
) {
  if (TOKEN.length === 10 && typeof TOKEN === "string") {
    return onSuccess(TOKEN);
  } else {
    onError(new Error("Invalid Token"));
  }
}

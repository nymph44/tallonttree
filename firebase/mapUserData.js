export const mapUserData = (user) => {
  const { uid, email, xa, displayName, photoURL } = user
  return {
    uid,
    email,
    displayName,
    photoURL,
    provider: xa,
  }
}

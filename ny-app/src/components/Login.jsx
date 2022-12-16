export const Login = () => {
  //eslint-disable-next-line
  const AUTH_HAND_WRITTEN =
    "https://accounts.spotify.com/authorize?client_id=222026c437384544b7fb802e7dbba16c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modoify-playback-state";
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=222026c437384544b7fb802e7dbba16c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  console.log(AUTH_URL);
  return (
    <>
      <a href={AUTH_URL} className="btn-primary">
        Login with Spotify
      </a>
    </>
  );
};

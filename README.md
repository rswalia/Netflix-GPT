# Netflix GPT

## Step 1 : Planning

- Navbar

  - Logo
  - GPT Search
    - Search Bar
    - Movie Suggestions
  - Login/Logout button

- Body

  - MainContainer
    - VideoBackground (trailer)
    - VideoInfo (name, desc, Play & info button)
  - SecondaryContainer
    - MovieList \* N
      - MovieCard \* N

- Footer
  - copyright
  - links

## Steps

- create-react-app
- setup Tailwind CSS
- Routing of App : index.js - ( / : <Login/>, /browse : <Browse/> )
- App.js (<Provider store={appStore}>)
- Header
- Login Page
- Sign in form
- Toggle Signin-Signup
- Formik Library
- onSubmit={(e) => e.preventDefault()}
- Form Validation
- useRef Hook
- setup Firebase
- Deploy using Firebase
- Authentication (signup/signin)
- Google sign in
- Sign Out (Header)
- onAuthStateChanged (Header)
  - After signin navigate to /browse
  - Add user in Redux Store
  - Protected Routes
  - unsubscribe (unmounting)
- Redux Store
  - user
  - movies
    - nowPlayingMovies
    - videoTrailer
- Browse Page
- Generate API Key & API Access Token
- Main Container
- Fetch movies from TMDB API
- useNowPlayingMovies (custom hook)
- Main Movie (Trailer & info)
- Secondary Container
- Movie List & Movie Card UI
- Fetch Popular movies from TMDB API

> username : rohit@gmail.com
> password : Rohit123

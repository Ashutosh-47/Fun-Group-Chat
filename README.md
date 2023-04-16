<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

<!-- 1. Install Firebase in Project then create DatBase , Authentication , see code in docs in paste in code in file firebase.js 
( 1st letter small to make it different from   frontend to user)

2. in database create collection name group {it has is id } create Sub Collection --> { name , msg ,time} [ it also has it unique id] -->

3. prompt to get names and Alert

// -------------------------- Stuck -----------------------------------------------------------------------------------

1. I thought When user click on SingIn(Login) Page it directly go to chat.js Page using Boolean value
    Means when userSignIn false --> LogIn will show && true--> Chat.js will show
    but Question arises how to pass As I have to pass user Data also ( like name etc ) so I use Hook useContext.

2. When passing function signIn from firebase after Google Authentication I didnt knew that i return a promise 
   I was accessing tha data directly after SigIn button clicked as a result error was coming.

3. I pass Data SideBarChat.js(Add new Chat Group) --> Firebase db --> Sidebar.js ---> { name , id of gropu} ---> SidebarChat.js again

   When showing data inSideBar.js ( means different Groups name and last msg ) I didnt useEffect as a result it keeps on rendering so i use it and put [] 

4. White displaying data in SideBarChat.js like group name etc I was not able to see The UI so I go to docs of firebase and read about a Method Called

onSnapShot ( db , elem , func ) --> It gives Real time update from firestore database. 

5. when we click on specific chat room how it will navigate to that particular chat room to I put id{ collection group id from db } in path so that it will take to that
specific room. when I was clicking on chat-room it way thinking a way to display that room other things remain same so I use useParams [ Hook ]

//-----------------------   Hooks Used -------------------------------------------------------------------------------------

1. UseState
2. UseContext
3. UseEfffect
4. useParams  ---> react-router Hooks --> need -->  When we want to move dynamically certain part of that page we will not able to see that

Ex. Home Services Nav when we click on services we go to service page But when we dynamically want to see food ( part of service page ) we change url (service/food) but
not able to see that ----> path = "group/:groupid" [ : imp ] --> -->
 
































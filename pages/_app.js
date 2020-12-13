import '../node_modules/react-modal-video/scss/modal-video.scss';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
    <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
    )

}
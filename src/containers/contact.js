import React from 'react';
import Hamberger from '../components/hamberger';
import Background from '../components/background';
import ProfImg from '../assets/image-icon.jpg';
import Footer from '../components/footer';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scenenum: 0,
        };
    }

    setSceneNum(num) {
        this.setState({ scenenum: num});
    }

    render() {
        return(
            <>
                <Hamberger setSceneNum={(num) => { this.setSceneNum(num); }}/>
                <Background  scenenum={ this.state.scenenum } />
                <div id="main">
                    <div className="img-block">
                        <img className="img-icon" src={ ProfImg } alt="プロフィール画像" />
                        <p>綿貫　彬彦</p>
                    </div>
                    <div className="EA-block">
                        <p><span className="under">Email</span> : akki.ni.ni.32@gmail.com</p>
                        <p><span className="under">Address</span> : Kofu, Yamanashi, Japan</p>
                    </div>
                    <div className="icons-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                            <a href="https://twitter.com/wataame_815">
                                <circle cx="12" cy="12" r="12" fill="white" fillOpacity="20%"/>
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </a>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="60" height="60">
                            <a href="https://github.com/watawata14341">
                                <circle cx="8" cy="8" r="8" fill="white" fillOpacity="20%"/>
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </a>
                        </svg>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Contact;
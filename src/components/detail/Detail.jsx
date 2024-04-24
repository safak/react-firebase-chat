import './detail.css';

const Detail = () => {
    return (
        <div className='detail'>
            <div className='user'>
                <img
                    src='./avatar.png'
                    alt=''
                />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img
                            src='./arrowUp.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy & help</span>
                        <img
                            src='./arrowUp.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared photos</span>
                        <img
                            src='./arrowDown.png'
                            alt=''
                        />
                    </div>
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                                    alt=''
                                />
                                <span>photo_2024</span>
                            </div>
                            <img
                                className='icon'
                                src='./download.png'
                                alt=''
                            />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                                    alt=''
                                />
                                <span>photo_2024</span>
                            </div>
                            <img
                                className='icon'
                                src='./download.png'
                                alt=''
                            />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img
                                    src='https://zdjecia-cdn.r.pl/hotel/3984/zakwaterowanie-umn_3984_131867_3x2.jpg?class=khMainGalleryDesktopLargePrimaryV2'
                                    alt=''
                                />
                                <span>photo_2024</span>
                            </div>
                            <img
                                className='icon'
                                src='./download.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img
                            src='./arrowUp.png'
                            alt=''
                        />
                    </div>
                </div>
                <div className='button'>
                    <button>Block User</button>
                    <button className='logout'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;

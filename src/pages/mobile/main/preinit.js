import bowser from 'bowser';

function toPc() {
    if (process.env.NODE_ENV == 'development') {
        location.href = 'http://localhost:3002';
    } else {
        // location.href = 'http://localhost:3002';
    }
}

function toMobile() {
    if (process.env.NODE_ENV == 'development') {
        location.href = 'http://localhost:3001';
    } else {
        // location.href = 'http://localhost:3001';
    }
}

function getClient() {
    if (process.env.NODE_ENV == 'development') {
        return /3001/.test(location.port) ? 'mobile' : 'pc';
    } else {
        // return /3001/.test(location.port) ? 'mobile' : 'pc';
    }
}


export default async () => {
    // if (bowser.ios || bowser.iphone || bowser.mobile) {
    //     if (getClient() == 'pc') {
    //         toMobile();
    //         return false;
    //     }
    // } else {
    //     if (getClient() == 'mobile') {
    //         toPc();
    //         return false;
    //     }
    // }
    return true;
}
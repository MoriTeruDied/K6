import http from 'k6/http';

export default function () {
    const url = 'https://rusagro.weconf.live/auth/fairy-games/login';
    const payload = JSON.stringify({
        email_or_phone: 'loko.cat@ya.ru',
        password: 'qeHdXZbe',
        remember:'',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    };

    let res = http.post(url, payload, params);
    console.log('res');
    console.log(res);
}

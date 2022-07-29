import http from 'k6/http';

export const options = {

    stages: [

        {duration: '3m', target: 100}, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.

        {duration: '5m', target: 100}, // stay at 100 users for 10 minutes

        {duration: '3m', target: 0}, // ramp-down to 0 users

    ],

    thresholds: {

        'http_req_duration': ['p(99)<2500'], // 99% of requests must complete below 1.5s



    },
};




export default () => {

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


}

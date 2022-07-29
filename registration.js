import http from 'k6/http';

export default function () {
    const url = 'https://rusagro.weconf.live/auth/fairy-games/register';
    const payload = JSON.stringify({
        first_name: 'aaa',
        last_name: 'bbb',
        email: 'aaa@aaa',
        business: 'meat',
        phone: '72452452424',
        user_type:'employee'


    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}

const axios = require('axios');

let token;

const setToken = () => {
    axios.post('https://dev.api.nami.gg/auth/sign',
        {
            "publicAddress": "0xfc9247de9626f4aad438977fcd0be6d524a00bd9"
        }
    ).then(r => {
        token = r.data.data.accessToken;
    }).catch(e => {
        console.log(e);
    });
}

setToken();

while (!token) {
    setTimeout(() => {
        console.log(token)
    }, 1000);
}

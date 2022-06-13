import {Api} from "./base-api";

export const getRandomGameId = () => {
    let gameApi = new Api("/game/list");
    return gameApi.get().then(r => {
            let games = r.body.data;
            let randomGame = games[Math.floor(Math.random() * games.length)];
            return randomGame._id;
        }
    );
}

export const getGameList = () => {
    let gameApi = new Api("/game/list");
    return gameApi.get().then(r => {
            return r.body.data;
        }
    );

}

export const getAdminHeaders = () => {
    let body = {"publicAddress": Cypress.env('adminAddress')};
    let userApi = new Api("/auth/sign", body, {});
    return userApi.post().then(r => {
            return {"Authorization": "Bearer "+ r.body.data.accessToken};
        }
    );

}

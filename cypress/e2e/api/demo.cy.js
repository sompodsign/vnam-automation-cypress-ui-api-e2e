import {Api} from "./base-api";
import {getAdminHeaders, getRandomGameId} from "./utils";

describe('demo', function () {

    it('should be true', function () {
        getAdminHeaders().then(r => {
            console.log(r);
        });
    });
});

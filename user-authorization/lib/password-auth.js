var credential = require('credential'),
    pw = credential(),
    userAuthInfo = '{"hash": "Gnlaw/seN4PqGt/bTRh07ionkHkjE+YFUamHFg5MzRHjInGL905/lS1Wc7QqhU2ZS8MIrEhhT0mLCrfUNNR/2x8X","salt": "viKhrrR1FSgl26Ud+OiqajFIvR2tN/5QOc0yVmQjVSgogGrsTes2BQVnhtwgZnJ4bu0cyWa7A7AaMUOaUDFPZU1L","keyLength": 66,"hashMethod": "pbkdf2","iterations": 260563}';

exports.verify = function verify(username, password, verified) {
    // Auth Check Logic
    pw.verify(userAuthInfo, password, function(err, isValid) {
        if (!isValid) {

            return verified(null, false, {
                message: 'Incorrect Password'
            });
        }

        return verified(null, userAuthInfo, null);
    });
};
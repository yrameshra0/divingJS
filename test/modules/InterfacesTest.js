var assert = require('chai').assert;
var stampit = require('stampit');

describe('Interface Creation', function() {
    it('StampIt Interface Example', function() {
        (function(exports) {
            'use strict';
            // Make sure local storage is supported
            var ns = 'post',
                supportsLocalStorage = (typeof localstorage !== 'undefined') && localstorage !== null,
                storage,

                storageInterface = stampit().methods({
                    save: function saveStorage() {
                        throw new Error('.save() method not implemented');
                    }
                }),

                localstorageProvider = stampit().compose(storageInterface())
                .methods({
                    save: function saveLocal() {
                        assert.ok(true);
                    }
                }),

                cookieProvider = stampit().compose(storageInterface())
                .methods({
                    save: function saveCookie() {
                        assert.ok(true);
                    }
                }),

                post = stampit().methods({
                    save: function postSave() {
                        storage.save();
                        return this;
                    },
                    setStorage: function setStorage(storageInterface) {
                        storage = storageInterface;
                        return this;
                    }
                });

            post().setStorage(localstorageProvider()).save();
        }());
    });
});
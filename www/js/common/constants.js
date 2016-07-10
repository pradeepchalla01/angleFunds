'use strict';
angular.module('angleFunds')
    .constant('CONSTANTS', {

    //API_URL
    API_URL: "http://localhost:8100/anglefunds/index.php/service",

    // Messages
    SERVER_ERROR_MESSAGE: "Oops, something went wrong. Our engineers have been notified & should" +
        " have this problem fixed in no time. Thanks for your patience.",
    FORBIDDEN_MESSAGE: "You don't seem to have access to this page. Try logging back in." +
        " Please contact our support team if you need assistance.",
    REQUIRED_FIELDS: "Please fill out required fields.",

    NUMBER_REGEX: /^\d+(\.\d{1,2})?$/,
    PHONE_REGEX: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}) *$/,
    EMAIL_REGEX: /^[a-zA-Z0-9_+\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/,
    URL_REGEX: /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
});

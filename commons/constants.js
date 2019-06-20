/**
 * Created by jithu on 23-01-2017.
 */

let path = require("path");

module.exports = {
  MESSAGES: {
    ERROR: {
      INTERNAL_SERVER_ERROR: "Internal Server Error",
      SERIES_NOT_MAPPED: "User not mapped to any series",
      UNAUTHORIZED_USER: "Unauthorized User",
      INVALID_CORPORATE_LICENSE: "Invalid corporate license",
      FORBIDDEN: "Access denied",
      GATEWAY_TIMEOUT: "Gateway Timeout",
      DUPLICATE_ENTRY: "Duplicate Entry",
      NEXT_MOVE_INVALID: "You cannot move forward until you have received all the responses that you have sought from your group",
      BAD_REQUEST: "Bad Request"
    },

    SUCCESS: {
      SAVE: "Saved Successfully",
      UPDATE: "Updated Successfully",
      LOGOUT: "Logout Successfully",
      DATA_POPUATED: "Data populated successfully",
      ADVICES_CREATE_MESSAGE: "Your message has been sent",
      ACTION_REVERSED: "Action reversed successfully"
    }
  },
  RESPONSE_STATUS: {
    SUCCESS: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    CREATED: 201,
    UPDATED: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    GATEWAY_TIMEOUT: 504,
    SUCCESS_NO_CONTENT: 204
  },
  //For querying DOM to get ogTags
  OG_TAG: {
    BASE: "meta[property='@ogTag@']",
    //Key names can be modified to changed the response structure
    PARAMS: {
      title: {
        key: 'og:title',
        alt: 'title',
        isAltText: true
      },
      images: {
        key: 'og:image',
        alt: 'img'
      },
      description: {
        key: 'og:description',
        alt: "[name='description']"
      },
      url: {
        key: 'og:url',
        alt: "[name='url']"
      },
      type: {
        key: 'og:type'
      }
    }
  }
};
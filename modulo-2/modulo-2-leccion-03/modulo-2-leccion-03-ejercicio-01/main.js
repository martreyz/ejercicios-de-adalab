"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const avatarElement = document.querySelector(".user__avatar");
avatarElement.src = userAvatar;

if (!!userAvatar === true) {
  avatarElement.src = userAvatar;
} else {
  avatarElement.src = DEFAULT_AVATAR;
}

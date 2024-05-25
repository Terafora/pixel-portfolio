import {k} from "./kaboom.Ctx.js";

k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": {
            from: 936,
            to: 0,
        },
        run: {
            from: 1,
            to: 8,
        },
    },
});
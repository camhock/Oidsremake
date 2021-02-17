namespace SpriteKind {
    export const tractor = SpriteKind.create()
    export const ladder = SpriteKind.create()
    export const jail = SpriteKind.create()
    export const prisoner = SpriteKind.create()
    export const saved = SpriteKind.create()
    export const hud = SpriteKind.create()
    export const enemyguns = SpriteKind.create()
    export const enemybase = SpriteKind.create()
    export const jet = SpriteKind.create()
    export const mother = SpriteKind.create()
    export const tout = SpriteKind.create()
    export const tour = SpriteKind.create()
}
namespace StatusBarKind {
    export const saved = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shipcontrolled == "ship") {
        music.playTone(247, music.beat(BeatFraction.Sixteenth))
        music.playTone(247, music.beat(BeatFraction.Sixteenth))
        music.playTone(294, music.beat(BeatFraction.Sixteenth))
        music.playTone(220, music.beat(BeatFraction.Sixteenth))
        if (facing == 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . 5 4 2 . . . . . . . 
                . . . . . 4 2 4 5 4 . . . . . . 
                . . . . . . 5 2 5 . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                `, ship, 0, 50)
            velocityy += -10
        } else if (facing == 1) {
            velocityy += -5
            velocityx += 5
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 4 . . . . . . . . . . . 
                . . . 5 4 2 . . . . . . . . . . 
                . . 4 2 4 5 4 . . . . . . . . . 
                . . . 5 2 5 . . . . . . . . . . 
                . . . . 2 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, -50, 50)
        } else if (facing == 2) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 4 . . . . . . . . . . . . . 
                . 5 4 2 . . . . . . . . . . . . 
                4 2 4 5 4 . . . . . . . . . . . 
                . 5 2 5 . . . . . . . . . . . . 
                . . 2 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, -50, 0)
            velocityx += 10
        } else if (facing == 3) {
            velocityy += 5
            velocityx += 5
            projectile2 = sprites.createProjectileFromSprite(img`
                . . 4 . . . . . . . . . . . . . 
                . 5 4 2 . . . . . . . . . . . . 
                4 2 4 5 4 . . . . . . . . . . . 
                . 5 2 5 . . . . . . . . . . . . 
                . . 2 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, -25, -25)
        } else if (facing == 4) {
            velocityy += 10
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . 4 . . . . . . . . 
                . . . . . . 5 4 2 . . . . . . . 
                . . . . . 4 2 4 5 4 . . . . . . 
                . . . . . . 5 2 5 . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 0, -50)
        } else if (facing == 5) {
            velocityy += 5
            velocityx += -5
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . 4 . . . 
                . . . . . . . . . . . 5 4 2 . . 
                . . . . . . . . . . 4 2 4 5 4 . 
                . . . . . . . . . . . 5 2 5 . . 
                . . . . . . . . . . . . 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 25, -25)
        } else if (facing == 6) {
            velocityx += -10
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 4 . . 
                . . . . . . . . . . . . 5 4 2 . 
                . . . . . . . . . . . 4 2 4 5 4 
                . . . . . . . . . . . . 5 2 5 . 
                . . . . . . . . . . . . . 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 25, 0)
        } else {
            velocityy += -5
            velocityx += -5
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 4 . . . 
                . . . . . . . . . . . 5 4 2 . . 
                . . . . . . . . . . 4 2 4 5 4 . 
                . . . . . . . . . . . 5 2 5 . . 
                . . . . . . . . . . . . 2 . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 25, 25)
        }
        projectile2.lifespan = 100
        projectile2.setKind(SpriteKind.jet)
    }
})
sprites.onOverlap(SpriteKind.tractor, SpriteKind.prisoner, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.rings, 100)
    pod = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . 7 7 1 1 1 7 7 . . . . . . 
        . . . 7 7 f 1 f 7 7 . . . . . . 
        . . . 7 7 1 1 1 7 7 . . . . . . 
        . . . 7 7 7 7 7 7 . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.saved)
    pod.setPosition(sprite.x, sprite.y)
    music.playMelody("C D E F G A B C5 ", 500)
    pod.follow(mothership, 15)
    pod.setFlag(SpriteFlag.BounceOnWall, true)
    saved += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shipcontrolled == "ship") {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        ladder1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . 4 4 2 2 2 4 4 . . . . . 
            . . . . 4 4 2 4 2 4 4 . . . . . 
            . . . 4 4 4 4 2 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 . . . . . . 
            . . . . . . 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.tractor)
        ladder1.setPosition(ship.x, ship.y)
        ladder1.setVelocity(velocityx, 30)
    }
})
function makeBase () {
    base = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 7 7 7 7 7 7 6 . . 
        . 6 7 7 1 7 7 1 7 7 7 1 7 7 6 . 
        6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        6 4 5 4 4 5 4 4 5 4 4 5 4 4 5 6 
        6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 
        6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 
        6 4 4 4 4 4 6 6 6 6 4 4 4 4 4 6 
        `, SpriteKind.jail)
    tiles.placeOnRandomTile(base, assets.tile`tile9`)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.prisoner, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shipcontrolled == "ship") {
        music.pewPew.play()
        if (facing == 0) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 . . 5 . . . . . . . 
                . . . . . 2 . . 4 . . . . . . . 
                . . . . . 4 . . 2 . . . . . . . 
                . . . . . 5 . . 5 . . . . . . . 
                . . . . . 4 . . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 0, -100)
        } else if (facing == 1) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . 2 . . . . 
                . . . . . . . . . . 5 . 4 . . . 
                . . . . . . . . . 4 . 2 . . . . 
                . . . . . . . . 5 . 5 . . . . . 
                . . . . . . . . . 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 50, -50)
        } else if (facing == 2) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 5 5 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 100, 0)
        } else if (facing == 3) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 . . . . . . 
                . . . . . . . . 4 . 2 . . . . . 
                . . . . . . . . . 2 . 4 . . . . 
                . . . . . . . . . . 5 . 2 . . . 
                . . . . . . . . . . . 5 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 50, 50)
        } else if (facing == 4) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . . 5 . . . . . . 
                . . . . . . 2 . . 4 . . . . . . 
                . . . . . . 4 . . 2 . . . . . . 
                . . . . . . 5 . . 5 . . . . . . 
                . . . . . . 4 . . 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, 0, 100)
        } else if (facing == 5) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 2 . . . . . . . . . . . 
                . . . 5 . 4 . . . . . . . . . . 
                . . 4 . 2 . . . . . . . . . . . 
                . 5 . 5 . . . . . . . . . . . . 
                . . 2 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, -50, 50)
        } else if (facing == 6) {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 5 4 2 4 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, -100, 0)
        } else {
            cannon = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 2 . . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . 5 . . . 5 . . . . . . . . . 
                . . . 2 . . . 4 . . . . . . . . 
                . . . . 2 . . . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ship, -50, -50)
        }
    }
})
function makeShip () {
    shipcontrolled = "ship"
    ship = sprites.create(img`
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, SpriteKind.Player)
    facing = 0
    velocityx = 0
    velocityy = 10
    ship.setPosition(mothership.x, mothership.y + 5)
    scene.cameraFollowSprite(ship)
    ship.setFlag(SpriteFlag.DestroyOnWall, true)
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    facing += 1
    if (facing > 7) {
        facing = 0
    }
    pause(100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shipcontrolled == "ship") {
        facing += -1
        if (facing < 0) {
            facing = 7
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.saved, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    saved += -1
    prisonersleft += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.jail, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    for (let index = 0; index < 2; index++) {
        person = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . 1 1 1 . . . . . . . . 
            . . . . . 5 5 5 . . . . . . . . 
            . . . . . 5 5 5 . . . . . . . . 
            . . . . . 7 . 7 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.prisoner)
        person.setPosition(otherSprite.x, otherSprite.y)
        person.setVelocity(randint(-15, 15), 0)
        person.setFlag(SpriteFlag.BounceOnWall, true)
    }
    music.siren.play()
})
sprites.onOverlap(SpriteKind.enemyguns, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 2000)
    scene.cameraShake(8, 1000)
    explodesound()
})
function explodesound () {
    music.playTone(196, music.beat(BeatFraction.Sixteenth))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(196, music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(165, music.beat(BeatFraction.Sixteenth))
}
function buildLevel () {
    saved = 0
    levelbases = 6 + level
    levelasteroids = 6 + level
    levelJails = 6 + level
    levelsmallcomets = 6 + level
    prisonersleft = levelJails * 2
    game.showLongText("Level " + level, DialogLayout.Bottom)
    game.showLongText("Number of enemy cannons: " + levelbases, DialogLayout.Bottom)
    game.showLongText("Number of asteroids:   " + levelbases, DialogLayout.Bottom)
    game.showLongText("Number of jails:  " + levelJails, DialogLayout.Bottom)
    for (let index = 0; index < 6 + level; index++) {
        makelargeasteroid()
        makeBase()
        makesmallasteroid()
        makecannon()
    }
    shipcontrolled = "mother"
    game.showLongText("Get ready for Level " + level, DialogLayout.Bottom)
    makeMother()
    airbrakes = 2 + level
}
function makesmallasteroid () {
    smallAsteroid = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 5 . . . . . . . . . 
        . . 5 4 4 4 4 4 . . . . . . . . 
        . . . 4 4 4 4 4 5 . . . . . . . 
        . . . 4 6 4 4 4 . . . . . . . . 
        . . . 4 6 6 4 . . . . . . . . . 
        . . . . 4 4 4 . . . . . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    smallAsteroid.setVelocity(randint(-30, 30), randint(-20, 20))
    smallAsteroid.setFlag(SpriteFlag.BounceOnWall, true)
    tiles.placeOnRandomTile(smallAsteroid, assets.tile`tile3`)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.saved, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    explodesound()
    saved += -1
    prisonersleft += -1
    info.changeScoreBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing += 1
    if (facing > 7) {
        facing = 0
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemybase, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    explodesound()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.halo, 1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    clearLevel()
    totalsaved = saved + totalsaved
    game.showLongText("Prisoners saved this level :" + saved, DialogLayout.Bottom)
    game.showLongText("Percentage saved this level " + saved / (levelbases * 2) * 100, DialogLayout.Bottom)
    game.showLongText("Total Saved so far" + totalsaved, DialogLayout.Bottom)
    info.changeScoreBy(totalsaved * 4)
    level += 1
    saved = 0
    if (level == 2) {
        tiles.setTilemap(tilemap`level2`)
        buildLevel()
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level3`)
        buildLevel()
    } else if (level == 4) {
        tiles.setTilemap(tilemap`level4`)
        buildLevel()
    } else if (level == 5) {
        tiles.setTilemap(tilemap`level4`)
    } else {
        info.changeScoreBy(info.life() * 5)
        game.showLongText("Final score " + info.score(), DialogLayout.Bottom)
        game.over(true)
    }
})
function makeMother () {
    mothership = sprites.create(img`
        ..................................................
        .....6............................................
        .....66...........................................
        ....6644..........................................
        ...6664466........................................
        ..666666666666....................................
        ..666666666666669696969696........................
        .6666666666666666969696969696969666666161.........
        8686868666666666666666666666969666666661616166662.
        68686868686868686868686666666666666666161666......
        8686868686868666666666666666666666................
        686868686f666666666666666.........................
        f68686f6f6666666..................................
        6f6f66............................................
        ..................................................
        ..................................................
        `, SpriteKind.mother)
    scene.cameraFollowSprite(mothership)
    tiles.placeOnRandomTile(mothership, assets.tile`myTile`)
    mothership_vy = 4
    mothership.setVelocity(0, mothership_vy)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shipcontrolled == "mother") {
        makeShip()
    } else if (airbrakes > 0) {
        velocityx = 0
        velocityy = 0
        scene.cameraShake(4, 500)
    }
    airbrakes += -1
})
function makelargeasteroid () {
    largeasteroid = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 e 4 4 4 4 5 . . . . 
        . . . . . e e 4 4 4 4 5 4 6 . . 
        . . . 6 4 e e 4 4 4 5 5 4 4 . . 
        . . . 4 4 4 e e e 4 5 5 4 4 . . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 5 5 4 4 4 4 4 4 4 4 4 . . 
        . . . e 5 4 e 4 4 4 4 4 4 4 . . 
        . . . e 5 e e 4 4 4 4 4 6 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    largeasteroid.setVelocity(randint(-30, 30), randint(-20, 20))
    largeasteroid.setFlag(SpriteFlag.BounceOnWall, true)
    tiles.placeOnRandomTile(largeasteroid, assets.tile`tile3`)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnRandomTile(ship, assets.tile`tile2`)
})
sprites.onOverlap(SpriteKind.saved, SpriteKind.mother, function (sprite, otherSprite) {
    sprite.destroy()
    music.playMelody("C D E F G A B C5 ", 500)
})
function clearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.saved)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.tractor)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.prisoner)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.jail)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.enemybase)) {
        value.destroy()
    }
    ship.destroy()
    mothership.destroy()
    info.changeLifeBy(2)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.prisoner, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    prisonersleft += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.saved, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(8, 1000)
    saved += -1
    prisonersleft += -1
    explodesound()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    music.siren.play()
    info.changeLifeBy(-1)
    scene.cameraFollowSprite(mothership)
    shipcontrolled = "mother"
})
function makecannon () {
    enemygun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . 6 6 9 1 1 1 1 9 9 6 6 . . . 
        . 6 9 9 9 1 1 1 1 9 9 9 9 6 . . 
        . 6 9 9 9 b 1 1 1 9 9 9 9 6 . . 
        6 9 9 9 9 b 1 1 b 9 9 9 9 9 1 . 
        6 9 9 6 9 b 1 1 9 9 9 9 9 9 6 . 
        6 9 8 9 6 9 1 9 6 9 6 9 9 9 6 . 
        6 8 9 8 9 6 9 6 9 6 9 9 9 9 6 . 
        6 9 8 9 8 9 6 9 6 9 9 9 9 9 6 . 
        6 9 9 8 9 8 9 6 9 8 9 9 9 9 6 . 
        6 9 9 9 8 9 8 9 8 9 8 9 9 9 6 . 
        6 6 9 9 9 8 9 8 9 8 9 9 9 6 6 . 
        6 6 9 9 9 9 8 9 8 9 9 9 9 6 6 . 
        6 . 6 6 9 9 9 9 9 9 9 6 6 . 6 . 
        6 . . . 6 6 6 6 6 6 6 . . . 6 . 
        `, SpriteKind.enemybase)
    tiles.placeOnRandomTile(enemygun, assets.tile`tile11`)
    gunpos = 0
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 1000)
    explodesound()
    gunsdestroyed += 1
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (shipcontrolled == "ship") {
        facing += -1
        if (facing < 0) {
            facing = 7
        }
        pause(100)
    }
})
let enemyfire: Sprite = null
let gunsdestroyed = 0
let gunpos = 0
let enemygun: Sprite = null
let largeasteroid: Sprite = null
let mothership_vy = 0
let totalsaved = 0
let smallAsteroid: Sprite = null
let levelsmallcomets = 0
let person: Sprite = null
let cannon: Sprite = null
let base: Sprite = null
let ladder1: Sprite = null
let pod: Sprite = null
let velocityx = 0
let velocityy = 0
let ship: Sprite = null
let projectile2: Sprite = null
let mothership: Sprite = null
let shipcontrolled = ""
let saved = 0
let prisonersleft = 0
let levelJails = 0
let levelasteroids = 0
let levelbases = 0
let airbrakes = 0
let level = 0
let facing = 0
info.setScore(0)
let statusbar = statusbars.create(20, 4, StatusBarKind.saved)
let levelassets = 6
facing = 0
level = 1
airbrakes = 3
statusbar.positionDirection(CollisionDirection.Top)
tiles.setTilemap(tilemap`level1`)
info.setLife(3)
game.showLongText("Level " + level, DialogLayout.Bottom)
levelbases = 3 + level
levelasteroids = 3 + level
levelJails = 3 + level
let levelComets = 3 + level
prisonersleft = levelJails * 2
game.showLongText("Number of enemy cannons: " + levelbases, DialogLayout.Bottom)
game.showLongText("Number of asteroids:   " + levelasteroids, DialogLayout.Bottom)
game.showLongText("Number of comets:  " + levelComets, DialogLayout.Bottom)
game.showLongText("Number of jails:  " + levelJails, DialogLayout.Bottom)
saved = 0
for (let index = 0; index < levelJails; index++) {
    makelargeasteroid()
    makeBase()
    makecannon()
    makesmallasteroid()
}
shipcontrolled = "mother"
game.showLongText("Get ready for Level " + level, DialogLayout.Bottom)
game.showLongText("Launch ship with down arrow", DialogLayout.Bottom)
makeMother()
scene.cameraFollowSprite(mothership)
game.onUpdate(function () {
    if (shipcontrolled == "ship") {
        ship.setVelocity(velocityx, velocityy)
        statusbar.value = saved / prisonersleft * 100
        if (facing == 0) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . 5 . . . . . 
                . . . . 5 . . . . . 
                . . . 5 6 5 . . . . 
                . . 3 3 5 3 3 . . . 
                . . . 5 2 5 . . . . 
                . . . . b . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `)
        } else if (facing == 1) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . 5 . . 
                . . . . 6 5 5 . . . 
                . . . 5 5 5 . . . . 
                . . 2 5 3 . . . . . 
                . . 5 5 . . . . . . 
                . . b . . . . . . . 
                . . . . . . . . . . 
                `)
        } else if (facing == 2) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . 2 . . . . . . . 
                . . 5 5 5 6 . . . . 
                . b 5 3 5 5 5 5 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `)
        } else if (facing == 3) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . b 5 2 . . . . . 
                . . . 5 5 5 . . . . 
                . . . . 3 5 6 . . . 
                . . . . . 5 . . . . 
                . . . . . . 5 . . . 
                . . . . . . . 5 . . 
                `)
        } else if (facing == 4) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . b . . . . . 
                . . . 5 2 5 . . . . 
                . . 3 3 5 3 3 . . . 
                . . . 5 6 5 . . . . 
                . . . . 5 . . . . . 
                . . . . 5 . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `)
        } else if (facing == 5) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . 2 5 b . . 
                . . . . 5 5 5 . . . 
                . . . 6 5 3 . . . . 
                . . . 5 5 . . . . . 
                . . . 5 . . . . . . 
                . . 5 . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `)
        } else if (facing == 6) {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . 2 . . . 
                . . . 6 5 5 5 . . . 
                . 5 5 5 5 3 5 b . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `)
        } else {
            ship.setImage(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . 5 . . . . . . . . 
                . . 5 5 6 . . . . . 
                . . . 5 5 . . . . . 
                . . . . 3 5 2 . . . 
                . . . . . 5 5 . . . 
                . . . . . . b . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `)
        }
    }
})
game.onUpdateInterval(2000, function () {
    gunpos += 1
    if (gunpos == 1) {
        for (let value of sprites.allOfKind(SpriteKind.enemybase)) {
            enemyfire = sprites.createProjectileFromSprite(img`
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . 6 6 b 6 6 . . . . . . 
                . . . . 4 6 8 b 8 6 4 . . . . . 
                . . . . 4 b b b b b 4 . . . . . 
                . . . . 4 6 8 b 8 6 4 . . . . . 
                . . . . . 6 6 b 6 6 . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, -50, -50)
            enemyfire.setKind(SpriteKind.enemyguns)
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 6 6 6 6 6 6 . . . . . 
                . . 6 6 9 1 1 1 1 9 9 6 6 . . . 
                . 6 9 9 9 1 1 1 1 9 9 9 9 6 . . 
                . 6 9 9 9 b 1 1 1 9 9 9 9 6 . . 
                6 9 9 9 9 b 1 1 b 9 9 9 9 9 1 . 
                6 9 9 6 9 b 1 1 9 9 9 9 9 9 6 . 
                6 9 8 9 6 9 1 9 6 9 6 9 9 9 6 . 
                6 8 9 8 9 6 9 6 9 6 9 9 9 9 6 . 
                6 9 8 9 8 9 6 9 6 9 9 9 9 9 6 . 
                6 9 9 8 9 8 9 6 9 8 9 9 9 9 6 . 
                6 9 9 9 8 9 8 9 8 9 8 9 9 9 6 . 
                6 6 9 9 9 8 9 8 9 8 9 9 9 6 6 . 
                6 6 9 9 9 9 8 9 8 9 9 9 9 6 6 . 
                6 . 6 6 9 9 9 9 9 9 9 6 6 . 6 . 
                6 . . . 6 6 6 6 6 6 6 . . . 6 . 
                `)
        }
    } else if (gunpos == 2) {
        for (let value of sprites.allOfKind(SpriteKind.enemybase)) {
            enemyfire = sprites.createProjectileFromSprite(img`
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . 6 6 b 6 6 . . . . . . 
                . . . . 4 6 8 b 8 6 4 . . . . . 
                . . . . 4 b b b b b 4 . . . . . 
                . . . . 4 6 8 b 8 6 4 . . . . . 
                . . . . . 6 6 b 6 6 . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, -50)
            enemyfire.setKind(SpriteKind.enemyguns)
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 6 6 6 6 6 6 . . . . . 
                . . 6 6 9 9 9 9 9 9 9 1 1 . . . 
                . 6 6 9 9 9 9 9 9 9 9 1 1 1 . . 
                . 6 9 9 9 9 9 9 9 9 1 1 1 1 . . 
                6 9 9 9 9 9 9 9 9 1 1 1 9 9 6 . 
                6 9 9 6 9 9 9 1 1 1 1 9 9 9 6 . 
                6 9 8 9 6 9 9 9 6 9 6 9 9 9 6 . 
                6 8 9 8 9 6 9 6 9 6 9 9 9 9 6 . 
                6 9 8 9 8 9 6 9 6 9 9 9 9 9 6 . 
                6 9 9 8 9 8 9 6 9 8 9 9 9 9 6 . 
                6 9 9 9 8 9 8 9 8 9 8 9 9 9 6 . 
                6 6 9 9 9 8 9 8 9 8 9 9 9 6 6 . 
                6 6 9 9 9 9 8 9 8 9 9 9 9 6 6 . 
                6 . 6 6 9 9 9 9 9 9 9 6 6 . 6 . 
                6 . . . 6 6 6 6 6 6 6 . . . 6 . 
                `)
        }
    } else {
        for (let value of sprites.allOfKind(SpriteKind.enemybase)) {
            enemyfire = sprites.createProjectileFromSprite(img`
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . 6 6 b 6 6 . . . . . . 
                . . . . 4 6 8 b 8 6 4 . . . . . 
                . . . . 4 b b b b b 4 . . . . . 
                . . . . 4 6 8 b 8 6 4 . . . . . 
                . . . . . 6 6 b 6 6 . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 50, -50)
            enemyfire.setKind(SpriteKind.enemyguns)
            gunpos = 0
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 6 6 6 6 6 6 . . . . . 
                . . 1 1 9 9 9 9 9 9 9 6 6 . . . 
                . 1 1 1 9 9 9 9 9 9 9 9 6 6 . . 
                . 1 1 1 1 9 9 9 9 9 9 9 9 6 . . 
                6 9 9 1 1 1 9 9 9 9 9 9 9 9 6 . 
                6 9 9 6 1 1 1 9 9 9 9 9 9 9 6 . 
                6 9 8 9 6 9 9 9 6 9 6 9 9 9 6 . 
                6 8 9 8 9 6 9 6 9 6 9 9 9 9 6 . 
                6 9 8 9 8 9 6 9 6 9 9 9 9 9 6 . 
                6 9 9 8 9 8 9 6 9 8 9 9 9 9 6 . 
                6 9 9 9 8 9 8 9 8 9 8 9 9 9 6 . 
                6 6 9 9 9 8 9 8 9 8 9 9 9 6 6 . 
                6 6 9 9 9 9 8 9 8 9 9 9 9 6 6 . 
                6 . 6 6 9 9 9 9 9 9 9 6 6 . 6 . 
                6 . . . 6 6 6 6 6 6 6 . . . 6 . 
                `)
        }
    }
})
game.onUpdateInterval(1000, function () {
    mothership_vy = mothership_vy * -1
    mothership.setVelocity(0, mothership_vy)
})

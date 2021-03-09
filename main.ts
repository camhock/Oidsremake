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
    } else if (shipcontrolled == "none") {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            2 . . 2 . . 5 4 2 . . 4 2 2 2 . 
            2 4 2 . 4 4 2 4 5 4 2 . 4 4 2 . 
            . . 2 2 4 . 5 2 5 4 . 4 4 4 . . 
            . 4 4 . . 2 2 2 . . . 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, 0)
        projectile2.setFlag(SpriteFlag.DestroyOnWall, true)
        projectile2.lifespan = 20
        velocityy += -10
        shipcontrolled = "ship"
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (ship.isHittingTile(CollisionDirection.Bottom) && facing == 0 && (velocityx < 11 && velocityy < 11)) {
        velocityx = 0
        velocityy = 0
        shipcontrolled = "none"
    } else {
        ship.destroy()
    }
})
function callStart () {
    info.setScore(0)
    statusbar = statusbars.create(20, 4, StatusBarKind.saved)
    levelassets = 6
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
    levelComets = 3 + level
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
}
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
    mothership.setVelocity(5, -5)
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    facing += 1
    if (facing > 7) {
        facing = 0
    }
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.prisoner, function (sprite, otherSprite) {
    if (shipcontrolled == "none") {
        otherSprite.destroy(effects.rings, 100)
        music.playMelody("C D E F G A B C5 ", 500)
        saved += 1
    }
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
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 4 . . . . 
            . . . . . . . . . . 1 6 1 . . . 
            . . . . . . . . . . . 6 . . . . 
            . . . . . . . . . . 1 . 1 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.prisoner)
        person.setPosition(otherSprite.x, otherSprite.y)
        if (Math.percentChance(50)) {
            person.setVelocity(randint(10, 6), 0)
        } else {
            person.setVelocity(randint(-10, -6), 0)
        }
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
    totalsaved = saved + totalsaved
    game.showLongText("Prisoners saved this level :" + saved, DialogLayout.Bottom)
    game.showLongText("Percentage saved this level " + saved / (levelbases * 2) * 100, DialogLayout.Bottom)
    game.showLongText("Total Saved so far" + totalsaved, DialogLayout.Bottom)
    clearLevel()
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
        tiles.setTilemap(tilemap`level6`)
        buildLevel()
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
    prisonersleft = prisonersleft - saved
    info.changeLifeBy(-1)
    scene.cameraFollowSprite(mothership)
    saved = 0
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
let mothership: Sprite = null
let saved = 0
let prisonersleft = 0
let levelComets = 0
let levelJails = 0
let levelasteroids = 0
let levelbases = 0
let airbrakes = 0
let level = 0
let levelassets = 0
let statusbar: StatusBarSprite = null
let velocityx = 0
let velocityy = 0
let ship: Sprite = null
let projectile2: Sprite = null
let facing = 0
let shipcontrolled = ""
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2eeeeeeeeeeffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2eeeeeeeefffffeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffeeeefffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffeeeffffffffffffffffffffffffffffffffffffffffffffe2eeeeeefffffeeeefffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeffffffeeeeeeefffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffeeeefffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffeeeeeeeeffffffffffffffffffffffffffffffffffffffffffe222effffffeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffe42effffffeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeefffeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffeffffffffeeeeeeffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeefffeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffeeeee222eeeeeeffffffffffffffeefffffffffffffffffffffffffffffffeeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffe22e222222eeeeeefffffffffffeeefffffffffffffffffffffffffffffffeeeeeeeffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeffe222222222eeeeeeffffffffffeeeffffffffffffffffffffffffffffffeeeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeffffe222222222eeeeeffffffffe2eeeffffffffffffffffffeefffffffffeeeeeeefffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeefffffe42222222eeeeefffffffe2eeeffffffffffffffffffeeeeeeffffeeeeeefffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeefffffffee2222222eeeefffffe22eeeefffffffffffffffffeeeeeeeeeeeeeefffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffee22eeeeeeeeeeeeeeeeffffffffffe2222222eeeffffe2eeeeeffffffffffffffffffeeeeeeeeeeeeefffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222eeeeeeeeeeeeefffffffffffffee42222eeefff222eeeeefffffffffffffffffeeeeeeeeeeeeeeffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222eeeeeee22eefffffffffffffffffee222eeeffe222eeeeefffffffffffffffffeeeeeee2eeeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222eeee22effffffffffffffffffffffee2eefffffeeeeeefffffffffffffffffeeeeee22eeeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee22222effffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeee2eeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2eeeeeeeeeeeffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeefffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffeeeeeeeeefffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffffee2eeeeffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffeeeeeecccecfffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeefffffffffffffffffffffe22eeeffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffceeee888ceeefffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeffffffffffffffffffffffee2efffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffeee8888eeeeeffffffffffffffffffffffffffffffffffffffffffffffffffee222eeeeefffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffee888ceeeeeefffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffce88ceeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffff22eeeeeeffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffeeefffffffffffffe88e44eeeffffffffffffffffffffffffffffffffffffffffffffffffffffe2eeeeeeffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffe4eeecfffffffffffffc64444ecfffffffffffffffffffffffffffffffffeeefffffffffffffffffe2eeeefffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffc54eeefffffffffffffffce44ecfffffffffffffffffffffffffffffffffeeeeefffffffffffffffff2eeeefffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffe544ecffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeefffffffffffffffeeeeffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffc4eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeefffffffffffffffffffffffffeeeeeeeefffffffffffffffffffffffffffffffff.
    fffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffff8888cfffffffffffffffffeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffff.
    ffffffffce44effffffffffffffffffffffffffffffffffffffffffffffffc8888888ffffffffffffffffeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffff.
    ccffffe444eeeffffffffffffffffffffffffffffffffffffffffffffffff8888888888fffffffffffffffeeeeeeefffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffff.
    eeeece54eeeeefffffffffffffffffffffffffffffffffffffffffffffffc8888888888cffffffffffffffeeeeefffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffffff.
    eeeeee454eeeffffffffffffffffffffffffffffffffffffffffffffffffec6668888888fffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffff.
    eeeeee444eeffffffffffffffffffffffffffffffffffffffffffffffffe2c6666668888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffce66666666888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffff86666666688fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffff66666c68ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeecffffffffffffffffffffffffccffffffffffffffffffffffff866c2ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeecffffffffffffffffcee7445454444eefffffffffffffffffffceeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeecfffffffffffee45577777777744444ecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeecffffffee4555766666666666674444effffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeeeecfce45555466666666666666664444effffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeeeeee455555766666666666666888c4444efffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeeeeeee455466666666666666688888e4444efffffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeeeeee4547666666666666666888888c44444fffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeee445555566666666686666668888888644444effffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeee455555555576666666888886888888888844444effffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeee4555555555555666666888888888888888884444eefffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeee45555555555555466688888888888888888884444eefffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeee455555555555555444c8888888888888888888c444eeefffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeee455555555555554444447688888888888888888c44eeeefffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeee45555555555555444444444c888888888888888ce4eeeeefffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeee455555555555555444444444447c888888888888ce4eeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeee45555555555555444444444444444ec888888888c44eeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fcee455555555555544444444444444444444ec88888e4eeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4effffffffffffffffffffffffff.
    ffc4555555555445444444444444444444444444ec6e4eeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe44efffffffffffffffffffffffff.
    fc45555555555e744444444444444444444444444444eeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444effffffffffffffffffffffff.
    c45555555554ec74444444444444444444444444444eeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444efffffffffffffffffffffff.
    45555555555ecce444444444444444444444444444eeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe4444effffffffffffffffffffff.
    5444555555eccce44444444444444444444444444eeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444efffffffffffffffffffff.
    dddd55555eccce44444444444444444444444444eeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee4444cffffffffffffffffffff.
    dddb5554eccce444444444444444444444444444eeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeee44478fffffffffffffffffff.
    dbb4554eccce4444444444444e444444444444eeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeee44468ffffffffffffffffff.
    bbb554eccce4444444444444ee4444444444eeeeeeeeeeeeeeeeeeeeeecfffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeee4768fffffffffffffffff.
    bb454eccce4444444444444ecc44444444eeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffe54effffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeee4c88ffffffffffffffff.
    b454eccce4444444444444eccc44444444eeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffc554efffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeee688fffffffffffffff.
    b45544444444444444444eccce4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffe44efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeee88fffffffffffffff.
    45544444444444444444ecccc44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffc454effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeec88ffffffffffffff.
    5544444444444444444ecccce4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffe554fffffffffffffffffffffffffffffffffff888cfffffffffffffffffffffffeeeeeeee68cfffffffffffff.
    5444444444444444444cccce4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfe44effffffffffffffffffffffffffffffffff8888cefffffffffffffffffffffffeeeeee4e88fffffffffffff.
    444444444444444444cccce444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffff88888eeefffffffffffffffffffffffeeeee44e8fffffffffffff.
    44444444444444444eccce4eeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffff8888ceeeffffffffffffffffffffffffeee4444efffffffffffff.
    44444444444444444ecce4eeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffff8888eeeeffffffffffffffffffffffffee444444effffffffffff.
    444444444444444444ee44eeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffc88c44ecfffffffffffffffffffffffffe544444effffffffffff.
    44444444444444444eeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffcc444efffffffffffffffffffffffffff5444444efffffffffff.
    4444444444444444eeeee7bdbbbbbeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffeecffffffffffffffffffffffffffffe544444efffffffffff.
    444444444444444eeeeebddbbbbbbeeeeeee4efceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7544444effffffffff.
    44444444444eeeeeeebdddbbbbbbbeeeee4ecffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc554444effffffffff.
    44444444eeeeeeee7ddddbbbbbbbeeee44effffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe54444eefffffffff.
    4444444eeeeeeeebddddbbbbbbbbeee44efffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5444eeccfffffff.
    4eeee4eeeeeeeebddddbbbbbbbbee44effffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4544bbcccffffff.
    eeeeeeeeeeeeedddddbbbbbbbbe44ecfffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc554bbeccffffff.
    eeeeeeeeeeeedddddbbbbbbbb444efffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffff8868cffffffffffffffffffffffffffffffffffffffffffffffffffe54bbbefffffff.
    eeeeeeeeeebdddddbbbbbbbb44efffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecf86666888ffffffffffffffffffffffffffffffffffffffffffffffffffe54bbefffffff.
    eeeeeeeeebdddbbbbbbbbbb7efffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec666668888cfffffffffffffffffffffffffffffffffffffffffffffffff45bbbeffffff.
    44eeeeeebddddbbbbbbbbbcfffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec66668888868ffffffffffffffffffffffffffffffffffffffffffffffff44bbbcfffff.
    44444444bdddbbbbbbbbbcffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeec88888886668ffffffffffffffffffffffffffffffffffffffffffffffff5bbbbfffff.
    55555547ddbdbbbbbbbbcffffffffffffffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeeeeeeeeeeeeeec8888866668ffffffffffffffffffffffffffffffffffffffffffffffffc4dbbcffff.
    e455555dbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeec888666688cfffffffffffffffffffffffffffffffffffffffffffffffff7bbbcfff.
    ffffffcbbbbbbdbbbbcffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeec88668888ffffffffffffffffffffffffffffffffffffffffffffffffffcbbcfff.
    ffffffcbbbbbbdbbbbfffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeec8888888fffffffffffffffffffffffffffffffffffffffffffffffffffccffff.
    ffffffcbbbbbbdbbbcffffffffffffffffffffffffffffffffffffeefffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeec888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffbbbbdddbbcffffffffffffffffffffffffffffffffffffeeefffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeec88888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffcbddddbcfffffffffffffffffffffffffffffffffffffceeefffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeec8888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffccccfffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeee888cfffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffe2eeffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeee88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffe2efffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    `)
pause(1000)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2eeeeeeeeeeffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2eeeeeeeefffffeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffeeeefffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffeeeffffffffffffffffffffffffffffffffffffffffffffe2eeeeeefffffeeeefffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeffffffeeeeeeefffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffeeeefffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffeeeeeeeeffffffffffffffffffffffffffffffffffffffffffe222effffffeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffe42effffffeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeefffeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffeffffffffeeeeeeffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeefffeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffeeeee222eeeeeeffffffffffffffeefffffffffffffffffffffffffffffffeeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffe22e222222eeeeeefffffffffffeeefffffffffffffffffffffffffffffffeeeeeeeffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeffe222222222eeeeeeffffffffffeeeffffffffffffffffffffffffffffffeeeeeeeeffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeffffe222222222eeeeeffffffffe2eeeffffffffffffffffffeefffffffffeeeeeeefffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeefffffe42222222eeeeefffffffe2eeeffffffffffffffffffeeeeeeffffeeeeeefffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeefffffffee2222222eeeefffffe22eeeefffffffffffffffffeeeeeeeeeeeeeefffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffee22eeeeeeeeeeeeeeeeffffffffffe2222222eeeffffe2eeeeeffffffffffffffffffeeeeeeeeeeeeefffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222eeeeeeeeeeeeefffffffffffffee42222eeefff222eeeeefffffffffffffffffeeeeeeeeeeeeeeffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222eeeeeee22eefffffffffffffffffee222eeeffe222eeeeefffffffffffffffffeeeeeee2eeeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2222eeee22effffffffffffffffffffffee2eefffffeeeeeefffffffffffffffffeeeeee22eeeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee22222effffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeee2eeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2eeeeeeeeeeeffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeefffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffeeeeeeeeefffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeffffffffffffffffffffee2eeeeffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffeeeeeecccecfffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeefffffffffffffffffffffe22eeeffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffceeee888ceeefffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeffffffffffffffffffffffee2efffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffeee8888eeeeeffffffffffffffffffffffffffffffffffffffffffffffffffee222eeeeefffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffee888ceeeeeefffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffce88ceeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffff22eeeeeeffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffeeefffffffffffffe88e44eeeffffffffffffffffffffffffffffffffffffffffffffffffffffe2eeeeeeffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffe4eeecfffffffffffffc64444ecfffffffffffffffffffffffffffffffffeeefffffffffffffffffe2eeeefffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffc54eeefffffffffffffffce44ecfffffffffffffffffffffffffffffffffeeeeefffffffffffffffff2eeeefffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffe544ecffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeefffffffffffffffeeeeffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffc4eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeefffffffffffffffffffffffffeeeeeeeefffffffffffffffffffffffffffffffff.
    fffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffff8888cfffffffffffffffffeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffff.
    ffffffffce44effffffffffffffffffffffffffffffffffffffffffffffffc8888888ffffffffffffffffeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffff.
    ccffffe444eeeffffffffffffffffffffffffffffffffffffffffffffffff8888888888fffffffffffffffeeeeeeefffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffff.
    eeeece54eeeeefffffffffffffffffffffffffffffffffffffffffffffffc8888888888cffffffffffffffeeeeefffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffffff.
    eeeeee454eeeffffffffffffffffffffffffffffffffffffffffffffffffec6668888888fffffffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffff.
    eeeeee444eeffffffffffffffffffffffffffffffffffffffffffffffffe2c6666668888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffce66666666888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffff86666666688fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffff66666c68ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeecffffffffffffffffffffffffccffffffffffffffffffffffff866c2ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeecffffffffffffffffcee7445454444eefffffffffffffffffffceeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeecfffffffffffee45577777777744444ecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeecffffffee4555766666666666674444effffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeeeecfce45555466666666666666664444effffffffffffffffffffffffffffffcccfffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffff.
    eeeeeeeeeeeeeeeeeeeeeee455555766666666666666888c4444efffffffffffffffffffffffffee22222222ecfffffffffff2222eeeffffe22222222eeefffffffffffff222222222222222effffff.
    eeeeeeeeeeeeeeeeeeeeeeee455466666666666666688888e4444effffffffffffffffffffffe2222222222222efffffffffe22222eeffff222222222222222effffffffe2222222222222222efffff.
    eeeeeeeeeeeeeeeeeeeeeee4547666666666666666888888c44444fffffffffffffffffffff22222222222222222cfffffffe22222efffff22222222222222222fffffffe22222222222222222fffff.
    eeeeeeeeeeeeeeeeee445555566666666686666668888888644444efffffffffffffffffff2222222222222222222cffffffe22222efffff222222222222222222efffffe22222222222222222fffff.
    eeeeeeeeeeeeeee455555555576666666888886888888888844444effffffffffffffffffe2222222eec2222222222ffffffe22222ffffff22222eeeee222222222ffffffeeeeeeeee2222222efffff.
    eeeeeeeeeeeee4555555555555666666888888888888888884444eefffffffffffffffffe222222efffffffe222222efffffe22222ffffff22222fffffffe2222222fffffffffffffff222222ffffff.
    eeeeeeeeeeee45555555555555466688888888888888888884444eefffffffffffffffff222222efffffffffe222222fffffe22222ffffff22222fffffffff222222efffffffffffff222222effffff.
    eeeeeeeeee455555555555555444c8888888888888888888c444eeeffffffffffffffffe22222efffffffffff222222cffffe22222ffffff22222ffffffffff222222fffffffffffff222222fffffff.
    eeeeeeeee455555555555554444447688888888888888888c44eeeeffffffffffffffffe22222cfffffffffffe22222effffe22222ffffff22222ffffffffffe22222ffffffffffff222222ffffffff.
    eeeeeeee45555555555555444444444c888888888888888ce4eeeeeffffffffffffffff222222fffffffffffff22222effffe22222ffffff22222fffffffffff22222effffffffffe22222effffffff.
    eeeeee455555555555555444444444447c888888888888ce4eeeeeeffffffffffffffff22222efffffffffffff222222ffffe22222ffffff22222fffffffffff222222ffffffffff222222fffffffff.
    eeeee45555555555555444444444444444ec888888888c44eeeeeeefffffffffffffffc22222efffffffffffff222222ffffe22222ffffff22222fffffffffff222222fffffffff222222efffffffff.
    fcee455555555555544444444444444444444ec88888e4eeeeeeeeefffffffffffffffc22222efffffffffffff222222ffffe22222ffffff22222fffffffffffe22222ffffffffe222222ffffffffff.
    ffc4555555555445444444444444444444444444ec6e4eeeeeeeeeffffffffffffffffe22222efffffffffffff222222ffffe22222fffffc22222fffffffffffe22222ffffffff222222fffffffffff.
    fc45555555555e744444444444444444444444444444eeeeeeeeeeffffffffffffffffe22222efffffffffffff222222ffffe22222fffffc22222fffffffffffe22222effffffe22222efffffffffff.
    c45555555554ec74444444444444444444444444444eeeeeeeeeecffffffffffffffffc22222efffffffffffff222222ffffe22222fffffc22222fffffffffff2222224efffff222222ffffffffffff.
    45555555555ecce444444444444444444444444444eeeeeeeeeeefffffffffffffffffc22222efffffffffffff222222ffffe22222fffffc22222fffffffffff22222244efff222222effffffffffff.
    5444555555eccce44444444444444444444444444eeeeeeeeeeeeffffffffffffffffff22222efffffffffffff22222effffe22222fffffc22222effffffffff222222444efe222222fffffffffffff.
    dddd55555eccce44444444444444444444444444eeeeeeeeeeeeeecffffffffffffffff222222ffffffffffffe22222effffe22222fffffc22222efffffffffe22222e4444c222222ffffffffffffff.
    dddb5554eccce444444444444444444444444444eeeeeeeeeeeeeeecfffffffffffffffe22222efffffffffff222222fffffe22222fffffc22222efffffffff222222ee444222222effffffffffffff.
    dbb4554eccce4444444444444e444444444444eeeeeeeeeeeeeeeeeeecfffffffffffffe222222ffffffffffe22222efffffe22222fffffc22222effffffff2222222eee44222222fffffffffffffff.
    bbb554eccce4444444444444ee4444444444eeeeeeeeeeeeeeeeeeeeeecfffffffffffff222222effffffffe222222cfffffe22222fffffc22222effffffc2222222eeeee222222ffffffffffffffff.
    bb454eccce4444444444444ecc44444444eeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffe42222222effffe2222222effffffe22222ffffff22222eeeeee22222222eeeee2222222eeeeeeeeeeefffff.
    b454eccce4444444444444eccc44444444eeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffc5522222222222222222222fffffffe22222ffffff222222222222222222efeeee222222222222222222fffff.
    b45544444444444444444eccce4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffe44e22222222222222222effffffffe22222ffffff22222222222222222efffeee222222222222222222effff.
    45544444444444444444ecccc44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffc454efe22222222222222efffffffffe22222ffffff222222222222222ecfffffee222222222222222222effff.
    5544444444444444444ecccce4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffe554ffffe2222222222efffffffffffe22222ff888ce2222222222eeefffffffffe222222222222222222fffff.
    5444444444444444444cccce4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfe44efffffffeeeeeefffffffffffffffffffff8888cefffffffffffffffffffffffeeeeee4e88fffffffffffff.
    444444444444444444cccce444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffff88888eeefffffffffffffffffffffffeeeee44e8fffffffffffff.
    44444444444444444eccce4eeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffff8888ceeeffffffffffffffffffffffffeee4444efffffffffffff.
    44444444444444444ecce4eeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffff8888eeeeffffffffffffffffffffffffee444444effffffffffff.
    444444444444444444ee44eeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffc88c44ecfffffffffffffffffffffffffe544444effffffffffff.
    44444444444444444eeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffcc444efffffffffffffffffffffffffff5444444efffffffffff.
    4444444444444444eeeee7bdbbbbbeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffeecffffffffffffffffffffffffffffe544444efffffffffff.
    444444444444444eeeeebddbbbbbbeeeeeee4efceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7544444effffffffff.
    44444444444eeeeeeebdddbbbbbbbeeeee4ecffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc554444effffffffff.
    44444444eeeeeeee7ddddbbbbbbbeeee44effffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe54444eefffffffff.
    4444444eeeeeeeebddddbbbbbbbbeee44efffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5444eeccfffffff.
    4eeee4eeeeeeeebddddbbbbbbbbee44effffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4544bbcccffffff.
    eeeeeeeeeeeeedddddbbbbbbbbe44ecfffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc554bbeccffffff.
    eeeeeeeeeeeedddddbbbbbbbb444efffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffff8868cffffffffffffffffffffffffffffffffffffffffffffffffffe54bbbefffffff.
    eeeeeeeeeebdddddbbbbbbbb44efffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecf86666888ffffffffffffffffffffffffffffffffffffffffffffffffffe54bbefffffff.
    eeeeeeeeebdddbbbbbbbbbb7efffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec666668888cfffffffffffffffffffffffffffffffffffffffffffffffff45bbbeffffff.
    44eeeeeebddddbbbbbbbbbcfffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec66668888868ffffffffffffffffffffffffffffffffffffffffffffffff44bbbcfffff.
    44444444bdddbbbbbbbbbcffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeec88888886668ffffffffffffffffffffffffffffffffffffffffffffffff5bbbbfffff.
    55555547ddbdbbbbbbbbcffffffffffffffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeeeeeeeeeeeeeec8888866668ffffffffffffffffffffffffffffffffffffffffffffffffc4dbbcffff.
    e455555dbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeec888666688cfffffffffffffffffffffffffffffffffffffffffffffffff7bbbcfff.
    ffffffcbbbbbbdbbbbcffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeec88668888ffffffffffffffffffffffffffffffffffffffffffffffffffcbbcfff.
    ffffffcbbbbbbdbbbbfffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeec8888888fffffffffffffffffffffffffffffffffffffffffffffffffffccffff.
    ffffffcbbbbbbdbbbcffffffffffffffffffffffffffffffffffffeefffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeec888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffbbbbdddbbcffffffffffffffffffffffffffffffffffffeeefffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeec88888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffcbddddbcfffffffffffffffffffffffffffffffffffffceeefffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeec8888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffccccfffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeee888cfffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffe2eeffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeee88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffe2efffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    `)
pause(1000)
game.splash("Press A to Play")
callStart()
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
    } else if (shipcontrolled == "none") {
        ship.setVelocity(velocityx, velocityy)
        statusbar.value = saved / prisonersleft * 100
    } else {
    	
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

const Util = {

    between(x, min, max) {
        return x >= min && x <= max;
    },
    collision(unit1x, unit1y, unit1w, unit1h, unit2x, unit2y, unit2w, unit2h) {
        let unit1XHitBox = [unit1x, unit1x + unit1w];
        let unit1YHitBox = [unit1y, unit1y + unit1h];
        let unit2XHitBox = [unit2x, unit2x + unit2w];
        let unit2YHitBox = [unit2y, unit2y + unit2h];
        // debugger
        let xCollision = false;
        let yCollision = false;
        if (Util.between(unit1XHitBox[0], unit2XHitBox[0], unit2XHitBox[1]) ||
            Util.between(unit1XHitBox[1], unit2XHitBox[0], unit2XHitBox[1])) {
                xCollision = true;
                // console.log("COLLISIONX")
            }
        if (Util.between(unit1YHitBox[0], unit2YHitBox[0], unit2YHitBox[1]) ||
            Util.between(unit1YHitBox[1], unit2YHitBox[0], unit2YHitBox[1])) {
                yCollision = true;
                // console.log("COLLISIONY")
            }
        if ((xCollision === true && yCollision === true)) {
            debugger
            console.log("COLLISION")
            return true;
        }
        else {
            return false;
        }
    }
}
module.exports = Util
module.exports = function (playerAct) {
    var random = Math.random() * 3;
    if (random < 1) {
        var computerAct = "石头"
    } else if (random > 2) {
        var computerAct = "剪刀"
    } else {
        var computerAct = '布'
    }
    console.log(computerAct)
    if (playerAct == computerAct) {
        console.log("平局!")
        return 0;
    } else if (
        (playerAct === "石头" && computerAct === "剪刀") ||
        (playerAct === "剪刀" && computerAct === "布") ||
        (playerAct === "布" && computerAct === "石头")
    ) {
        console.log("你赢了!")
        return -1;
    } else {
        console.log("你输了!")
        return 1;
    }

    // node rock.js 石头
};


let info = '请您选择操作\n1.存钱\n2.取钱\n3.查看\n4.退出'

// // 存钱取钱查看退出

let choice
let val
let money = 0
f: while (true) {
    choice = parseInt(prompt(info))
    if (isNaN(choice) || choice < 1 || choice > 4) {
        alert('输入有误，请重新输入');
        continue;
    }

    switch (choice) {
        case 1:
            val = parseInt(prompt('请输入存钱金额'))
            if (isNaN(val) || val <= 0) {
                alert('输入有误，请重新输入');
            }
            money += val
            break;
        case 2:
            val = parseInt(prompt('请输入取钱金额'))
            if (isNaN(val) || val <= 0 || val > money) {
                alert('输入有误，请重新输入');
            }
            money -= val
            break;
        case 3:
            alert(`您的余额为${money}`)
            break;
        case 4:
            break f;
        default:
            break;
    }

}



// let i;
// let j;
// for (i = 0; i < 5; i++) {
//     if (i == 3) {
//         break;
//     }
//     for (j = 0; j < 5; j++) {

//         document.write(`i=${i},j=${j}` + "<br/>");
//     }
// }
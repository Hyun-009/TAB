const tabList = document.querySelectorAll('.menu li')//Act
const content = document.querySelectorAll('.content')//On

let i = 0

init(i)

function init(q) {//초기 세팅함수


    tabList[q].classList.add('Click')
    content[q].classList.add('On')
}

function reset() {//class 제거 함수
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove('Click')
        content[i].classList.remove('On')
    }
}

//이벤트
tabList.forEach(function (tab, p) {

    tab.addEventListener('click', function () {
        console.log(p);
        reset()
        init(p)

    })

})
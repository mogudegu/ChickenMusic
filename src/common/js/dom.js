export function addClass(el,className){
    if(hasClass(el,className)){
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function hasClass(el ,className){
    //正则的意思 className前面可以是以它为开头也可以是个空白字符，后面可以是个空白字符 也可以直接结束
    let reg = new RegExp('(^|\\s)'+className+'(\\s|$)') 
    
    return reg.test(el.className)
}

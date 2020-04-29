import originJSONP from 'jsonp'

export default 
//jsonp封装
function jsonp (url ,data,option){
    //url拼接 判断是否有“？”
    url += (url.indexOf('?')< 0 ?'?': '&') + param(data)
    return new Promise((resolve,rejece) =>{
        originJSONP(url,option,(err,data) =>{
            if(!err){
                //成功
                resolve(data)
            }else{
                //err
                rejece(err)
            }

        })
    })
}
//把data拼接到url上
function param(data){
    let url =''
    for ( var k in data){
        let value = data[k] !==undefined ? data[k] :''
        //url拼接
        url += `&${k}=${encodeURIComponent(value)}`
    }
    console.log("lalal",url ? url.substring(1):'')
    return url ? url.substring(1):''
}
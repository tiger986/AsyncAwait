//async-await
    
const fun1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done3')
        }, 1000)
    })
}
const fun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done2')
        }, 800)
    })
}
const fun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done1')
        }, 500)
    })
}

//注意：用await时，await外层函数要加前缀async，await后面的函数要return的是一个promise
const res = async () => {
    console.log(await fun1());
    console.log(await fun2());
    console.log(await fun3());
    console.log(0);
}
res() 
//用node执行该js文件，查看打印结果     done3 done2 done1 0

//fetch和jq的$ajax()函数return的也是一个promise,所以也可以用async-await来决定其执行顺序（用的时候要将其放在一个函数里return）
const fet = () => {
    return fetch(URL)
        .then((response) => response.json())
        .then((result) => {
            return result
        })
}
const aja = () => {
    return $ajax({
        url: '',
        type: '',
        success: function(res) {
            return res
        }
    })
}
const res2 = async () => {
    console.log(await aja());
    console.log(await fet());
}
//res2()

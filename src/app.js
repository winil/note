// 共用方法
class Common{
    constructor(){
        this.a = 1;
    }
    fun1(){
        console.log("fun1");
    }

    fun2(){
        console.log("fun2");
    }
    fun3(){
        let a = 1;
        setTimeout(()=>{
            a += 5;
            console.log("a:"+a,this,this.a);
        },500);
    }
    fun4(){
        let b = 1;
        setTimeout(function(){
            console.log(this,this.a);
        },500);
    }
    fun5(){
        for(let i=0;i<5;i++){
            console.log(i);
        }
    }
}
let a = 1;
var common = new Common();
common.a = 8;
common.fun3();
common.fun5();


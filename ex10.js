function hi() {
let r=['apple','banana','cherry','mango']//配列
for(let u=0; u<r.length; u=u+1){//アップルから順にｒの範囲で一つずつふえていく
　　alert(r[u]);//ｒの配列をuに従ってアラートする
 }
}
//課題2
function ya(){
  let c=['apple','banana','cherry','mango']//配列
  for(let d=3; d>=0; d=d-1){//マンゴーから0のアップルまで一ずつ減っていく
  　　alert(c[d]);//cの配列をｄに従ってアラートする
 }
}
//課題3
function ra() {
let p = [];
for (let t = 0;t<1000; t+1) {//配列ｐの桁数
p.push(Math.random())//０から一未満の四桁の乱数を生成
}
for (let i = 0; i < p.length; i+1) {//配列ｐの範囲で一つずつずれていく
  document.write(p[i]+"<br/>")//配列Pをiのルールで改行して表す

}
}
// 課題4
function hen(){
  let x = [];
  for (let m = 0; m <=99; m+1) {//配列にはいる範囲と動作の設定
    x.push(m);//ｘの配列にｍのルールで入れる
      }
  for (let m = 0; m < x.length; m+1){//
     x[m]=x[m]**2//2乗
     alert(x)//xをアラート
}
}
// 課題5
function gea() {
let z=document.getElementById("z").value;
  let b=['ぐー','ちょき','ぱー']
for ( i= 0;  i<=2; i+1) {
let i=[Math.floor(Math.random()*(2-0)+0)]
console.log(b[0])
}
if(z=="ぐー"&&i==2||z=="ちょき"&&i==0||z=="ぱー"&&i==1) {
  alert("相手:"+i+"あなた:"+z+"勝ちです")
}
else if (z=="ぐー"&&i==0||z=="ちょき"&&i==1||z=="ぱー"&&i==2) {
alert("相手："+i+"あなた："+z+"あいこ")
}
else {
  alert("相手："+i+"あなた："+z+"負けです")
  console.log(b);
}
 }




function sasie(a){


    document.f.T1.value= document.f.T1.value+a


}

function sasie_A(a){


    document.f.T2.value=document.f.T2.value+ document.f.T1.value+a
    document.f.T1.value= ""

}

function calcul(){
  var array_ch =[];
  var array_F = [];
  var k=0
  var a 
  var i=0
  var j
  document.f.T2.value=document.f.T2.value+document.f.T1.value
while ( document.f.T2.value != ""  ){



k=document.f.T2.value.indexOf(" ");
if(k===-1){k=document.f.T2.value.length}
array_ch[i]=Number(document.f.T2.value.slice(0,k))
if( k!=document.f.T2.value.length ) {
array_F[i]=document.f.T2.value.slice(k+1,k+2) }

document.f.T2.value=document.f.T2.value.slice(k+3,document.f.T2.value.length)
i++



}
console.log(array_ch)
console.log(array_F)
var array_ordre1=[]
var array_ordre2=[]
var x=0
var y=0
for(j=0;j<array_F.length;j++){
switch(array_F[j]){
    case '*':
    case '/':
        
    array_ordre1[x]=array_F[j] ;
    x++ 
    break ;
    case '+':
    case '-':
        array_ordre1[y]=array_F[j] ;
        y++ 
        break ;
 break ;





} }
console.log(array_ordre1)
console.log(array_ordre2)

/*while (    array_ordre1.length!=0                     ){
   
a=array_ordre1[0]
switch(a) {
case '*' :  array_ch[1]=array_ch[0]*array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_ordre1=array_ordre1.slice(1,array_ordre1.length) ;   break ;
case '/':    array_ch[1]=array_ch[0]/array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_ordre1=array_ordre1.slice(1,array_ordre1.length) ;  break;

} 

console.log(array_ordre1)



}


    while (    array_ordre2.length!=0                      ){
       
    a=array_ordre2[0]
    switch(a) {
    case '+' :  array_ch[1]=array_ch[0]+array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_ordre2=array_ordre2.slice(1,array_ordre2.length) ;   break ;
    case '-':    array_ch[1]=array_ch[0]-array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_ordre2=array_ordre2.slice(1,array_ordre2.length) ;  break;
    
    }
    console.log(array_ch)
     
}*/

while (    array_F.length!=0                     ){
   
    a=array_F[0]
    switch(a) {
    case '*' :   array_ch[1]=array_ch[0]*array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_F=array_F.slice(1,array_F.length) ;   break ;
    case '/':    array_ch[1]=array_ch[0]/array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_F=array_F.slice(1,array_F.length) ;   break;
    case '-' :   array_ch[1]=array_ch[0]-array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_F=array_F.slice(1,array_F.length) ;   break ;
    case '+':    array_ch[1]=array_ch[0]+array_ch[1]; array_ch=array_ch.slice(1,array_ch.length);    array_F=array_F.slice(1,array_F.length) ;   break;
    } 
    
    
    
    
    
    }

    document.f.T2.value =array_ch[0]














    
    document.f.T1.value =""

}

function AC(){


    document.f.T2.value=""
}
const inputNumber1=document.querySelector('.input-number-1')

const inputOperator=document.querySelector('.input-operator')

const inputNumber2=document.querySelector('.input-number-2')

const inputResult=document.querySelector('.input-result')

const audio1=document.getElementById('AudioSuccess')
const audio2=document.getElementById('AudioPress')
const audio3=document.getElementById('AudioWarning')
/////////////////////////////////////////////////////////////

const Clear=document.getElementById('clear')
const OperatorDivider=document.getElementById('operator-divider')
const OperatorMultiplication=document.getElementById('operator-multiplication')
const Delete=document.getElementById('delete')
const OperatorSubtraction=document.getElementById('operator-subtraction')
const OperatorAddition=document.getElementById('operator-addition')
const OperatorEqual=document.getElementById('operator-equal')
const OperatorPercentage=document.getElementById('operator-percentage')

/////////////////////////////////////////////////////////////
const Number1=document.getElementById('number-1')
const Number2=document.getElementById('number-2')
const Number3=document.getElementById('number-3')
const Number4=document.getElementById('number-4')
const Number5=document.getElementById('number-5')
const Number6=document.getElementById('number-6')
const Number7=document.getElementById('number-7')
const Number8=document.getElementById('number-8')
const Number9=document.getElementById('number-9')

const NumberPoint=document.getElementById('number-point')
const NumberZero=document.getElementById('number-0')
////////////////////////////////////////////////////////////

inputNumber1.readOnly=true;
inputOperator.readOnly=true;
inputNumber2.readOnly=true;
inputResult.readOnly=true;

index=1;


inputNumber1.addEventListener('click' ,function(){
index=1;
})
inputNumber2.addEventListener('click' ,function(){
    index=2;
    })
    
inputOperator.addEventListener('click',function(){
    index=3;
})
//////////////////////////////////////////////////////

Clear.addEventListener('click',function(){
index=1;
inputNumber1.value=null;
inputNumber2.value=null;
inputResult.value=null;

inputOperator.value="";

})

Delete.addEventListener('click',function(){
    
    if (index==1){
        console.log("fgfg")
        const variable1 =inputNumber1.value.slice(0,-1)
        inputNumber1.value=variable1
    }
    else if (index==2){
        const variable2 =inputNumber2.value.slice(0,-1)
        inputNumber2.value=variable2
    }
})

OperatorDivider.addEventListener('click',function(){
    if (inputNumber1.value==""){
        index=1;
    }
    else{
        index=2;
    }

inputOperator.value="/";

})

OperatorMultiplication.addEventListener('click',function(){
    if (inputNumber1.value==""){
        index=1;
    }
    else{
        index=2;
    }

inputOperator.value="*";

})

OperatorSubtraction.addEventListener('click',function(){
    if (inputNumber1.value==""){
        index=1;
    }
    else{
        index=2;
    }

inputOperator.value="-";

})

OperatorAddition.addEventListener('click',function(){
    if (inputNumber1.value==""){
        index=1;
    }
    else{
        index=2;
    }

inputOperator.value="+";

})

OperatorPercentage.addEventListener('click',function(){

if (index==1){
    const percentageinputnumber1=Number(inputNumber1.value/100)

    inputNumber1.value=percentageinputnumber1;
}


if (index==2){
    const percentageinputnumber2=Number(inputNumber2.value/100)

    inputNumber2.value=percentageinputnumber2;
    
}

})

OperatorEqual.addEventListener('click',function(){

    const input1=inputNumber1.value;
    const input2=inputNumber2.value;
    const operator=inputOperator.value;
 

    if (input1 == "" ){
        inputNumber1.style.borderColor="red"
        inputNumber1.placeholder="الحقل فارغا"
    
        console.log("method1")
        audio3.play();
        
        
        
    }
    else {
        inputNumber1.style.borderColor="black"
        inputNumber1.placeholder=""
    }
    if (input2 == "" ){
        inputNumber2.style.borderColor="red"
        inputNumber2.placeholder=" الحقل فارغا"
        console.log("method2")
        audio3.play();
        
        
        
    
    }
    else{
        inputNumber2.style.borderColor="black"
        inputNumber2.placeholder=""
    }



    if (input1!="" && input2!=""){
    switch(operator){

        case operator.value="+":

            inputResult.value=(` ${Number(input1) + (Number(input2)) }`)
            audio1.play()
            inputResult.style.borderColor="green"
            break;
        case operator.value="-":
     
            inputResult.value=(` ${Number(input1) - (Number(input2)) }`)
            audio1.play()
            inputResult.style.borderColor="green"
            break;

        case operator.value="/":
   
            inputResult.value=(` ${Number(input1) / (Number(input2)) }`)
            audio1.play()
            inputResult.style.borderColor="green"
            break;
        case operator.value="*":
       
            inputResult.value=(` ${Number(input1) * (Number(input2)) }`)
            audio1.play()
            inputResult.style.border="green"

            break;
    }
    }
    else{
        inputResult.style.borderColor="red"
    }

})
/////////////////////////////////////////////////////////

Number1.addEventListener('click',function(){
    audio2.play()
    if (index==1){

        inputNumber1.value +=(Number1.innerHTML);
        
    }
    else if (index==2){
        inputNumber2.value +=(Number1.innerHTML);
    }
})

Number2.addEventListener('click',function(){
    audio2.play()
    if (index==1){

        inputNumber1.value +=(Number2.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number2.innerHTML);
    }
})

Number3.addEventListener('click',function(){
    audio2.play()
    if (index==1){

        inputNumber1.value +=(Number3.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number3.innerHTML);
    }
})

Number4.addEventListener('click',function(){
    audio2.play()
    if (index==1){

        inputNumber1.value +=(Number4.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number4.innerHTML);
    }
})

Number5.addEventListener('click',function(){
    audio2.play()
    if (index==1){

        inputNumber1.value +=(Number5.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number5.innerHTML);
    }
})

Number6.addEventListener('click',function(){
    audio2.play()
    if (index==1){
 
        inputNumber1.value +=(Number6.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number6.innerHTML);
    }
})

Number7.addEventListener('click',function(){
    audio2.play()
    if (index==1){
     
        inputNumber1.value +=(Number7.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number7.innerHTML);
    }
})

Number8.addEventListener('click',function(){
    audio2.play()
    if (index==1){
        inputNumber1.value +=(Number8.innerHTML);
       
    }
    else if (index==2){
        inputNumber2.value +=(Number8.innerHTML);
    }
})

Number9.addEventListener('click',function(){
    audio2.play()
    if (index==1){
        inputNumber1.value +=(Number9.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(Number9.innerHTML);
    }
})

NumberPoint.addEventListener('click',function(){
    audio2.play()
    if (index==1){
        inputNumber1.value +=(".");
    }
    else if (index==2){
        inputNumber2.value +=(".");
    }
})
NumberZero.addEventListener('click',function(){
    audio2.play()
    if (index==1){
        inputNumber1.value +=(NumberZero.innerHTML);
    }
    else if (index==2){
        inputNumber2.value +=(NumberZero.innerHTML);
    }
})

////////////////////////////////////////////////






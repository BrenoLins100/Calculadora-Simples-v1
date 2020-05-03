
//Código feito por Breno Lins 26/04/2020 // 
// Ultima modificação 03/05/2020
//Versão 1.0

//adicionando evento ao carregar a janela;
window.addEventListener('load', ()=>{
  
    var visorCalc = document.querySelector('.visorCalc');

    var btns = document.querySelectorAll('.box');

    var operador = "";
    var valor = "";
    var valor2 = "";
    var operacao = 0;
    var conValor = 0;
    var conValor = 0;
    var segundoValor = false;
    var segundaOperacao = false;

    //rodando o for em todos botões;
    for(let i=0; i<btns.length; i++){
        
        //adicionando evento de clique nos botoes, parametro e representa o evento de clique
        btns[i].addEventListener('click', (e)=>{
            

            // comparando qual botão foi apertado

            if(e.target.className === 'box btn7'){
               visorCalc.value +=  '7';

               if(segundoValor === true){

                   //verificando se o botao foi apertado depois de ja exibir um valor de uma operacao anterior
                   if(valor2 > 0){
                       valor2 = 7;
                   }else{
                       valor2 +=7;
                   }

               }else{
                    valor += 7;
               }
            }

            else if(e.target.className === 'box btn8'){
                visorCalc.value += '8';

                if(segundoValor === true){

                    if(valor2 > 0){
                        valor2 = 8;
                    }else{
                        valor2 += 8
                    }
                    
               }else{
                    valor += 8;
               }
            }

            else if(e.target.className === 'box btn9'){
                visorCalc.value += '9';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 9;
                    }else{
                        valor2 +=9
                    }
                }else{
                    valor +=9
                }
            }

            else if(e.target.className === 'box btn4'){
                visorCalc.value += '4';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 4;
                    }else{
                        valor2+= 4;
                    }
                }else{
                    valor +=4
                }
            }

            else if(e.target.className === 'box btn5'){
                visorCalc.value += '5';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 5;
                    }else{
                        valor2 += 5;
                    }
                }else{
                    valor +=5
                }
            }

            else if(e.target.className === 'box btn6'){
                visorCalc.value += '6';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 6;
                    }else{
                        valor2 +=6;
                    }
                }else{
                    valor +=6
                }
            }

            else if(e.target.className === 'box btn1'){
                visorCalc.value += '1';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 1;
                    }else{
                        valor2 +=1
                    }
                }else{
                    valor +=1
                }
            }

            else if(e.target.className === 'box btn2'){
                visorCalc.value += '2';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 2;
                    }else{
                        valor2 +=2
                    }
                }else{
                    valor +=2
                }

            }

            else if(e.target.className === 'box btn3'){
                visorCalc.value += '3';

                if(segundoValor === true){
                    if(valor2 > 0){
                        valor2 = 3;
                    }else{
                        valor2 +=3;
                    }
                }else{
                    valor +=3
                }

            }

            else if(e.target.className === 'box btn0'){
                visorCalc.value += '0';
                
                if(segundoValor === true){
                    valor2 +=0
                }else{
                    valor +=0
                }

            }
            

            //Operações 

            else if(e.target.className === 'box btnMenos'){
                visorCalc.value += '-';
                operador = "-";
                segundoValor = true;
            }

            else if(e.target.className === 'box btnMais'){
                
                visorCalc.value += '+';
                operador = "+";

                segundoValor = true;
            }

            else if(e.target.className === 'box btnVezes'){
                visorCalc.value += 'x';
                operador = "x";

                segundoValor = true;
            }

            else if(e.target.className === 'box btnDivide'){
                visorCalc.value += '/';
                operador = "/";

                segundoValor = true;
            }

            else if(e.target.className === 'box btnPonto'){
                visorCalc.value += '.';
                valor += '.';
            }

            //botao clean

            else if(e.target.className === 'box btnClean'){
                visorCalc.value = '';   

                segundaOperacao = false;
                segundoValor = false;
                valor = '';
                valor2 = '';
            }

            //botao igual

            else if(e.target.className === 'box btnIgual'){

                conValor = parseFloat(valor);
                conValor2 = parseFloat(valor2);

                if(operador === '+'){

                    //caso o + seja apertado denovo após exibir o resultado de uma soma anterior
                    if(segundaOperacao === true){

                        //convertendo resultado da soma anterior em Float
                        operacao = parseFloat(operacao) + conValor2;
                    }

                    else{
                        operacao = conValor+conValor2;
                        segundaOperacao = true;
                    }
                       
                       visorCalc.value = operacao;


                }
                
                else if(operador === '-'){

                    if(segundaOperacao === true){
                        operacao = parseFloat(operacao) - conValor2
                    }else{
                        operacao = conValor-conValor2;
                    }
                    
                    visorCalc.value = operacao;
                }

                else if (operador === 'x'){

                    if(segundaOperacao === true){
                        operacao = parseFloat(operacao) * conValor2;
                    }else{
                        operacao = conValor * conValor2;
                    }
                    
                    visorCalc.value = operacao;
                }

                else if (operador === '/'){

                    if(segundaOperacao === true){
                        operacao = parseFloat(operacao) / conValor2
                    }else{
                        operacao = conValor / conValor2;
                    }
                    visorCalc.value = operacao;
                }
            }

        })
    }
    
})
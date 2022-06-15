#include<stdio.h>
#include<stdlib.h>


int seqFibonacci(int n);


int main (){
  
  int pos, j;
  
  printf("Insira o numero que deseja encontrar na sequencia:\n");
  scanf("%d", &pos);
  
  for(j = 0; j < pos; j++){
     
     printf("%d ", seqFibonacci(j));
     
     if(pos == seqFibonacci(j))
     {
       printf("\nNumero %d existe na Sequencia de Fibanacci\n", pos);
       exit(0);
     }
  }
  
  printf("\nO numero %d nao pertence a Sequencia de Fibonacci\n", pos);
  
  return 0;
  
}


int seqFibonacci(int n){

   if(n == 0){
     
     return 0;
   
   }else if(n == 1){
     
     return 1;
   
   }else{
   
     return (seqFibonacci(n - 1) + seqFibonacci(n - 2));
   
   }
  

}

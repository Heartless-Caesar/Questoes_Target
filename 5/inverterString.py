def inverter(n):
    tamDaString=len(n) 
    stringInvertida=n[tamDaString::-1]  
    print (stringInvertida)
    return stringInvertida

string = input("Insira uma string para inverter\n")
inverter(string)    
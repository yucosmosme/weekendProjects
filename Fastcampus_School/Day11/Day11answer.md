## 필수 1

1. 파이썬 데이터타입에는 어떤 것들이 있는지 강의에 나온 8가지를 작성해주세요.  

Boolean - True, False  
Numbers -  정수형(int), 실수형(float), 허수형(complex)  
String - 문자열  
Bytes  
lists - 복수의 데이터 모음. 다양한 데이터 타입의 값을 함꼐 가질 수 있다.  
tuples - 값 중복은 허용하지만, 데이터 변경을 허용하지 않는 불변형 시퀀스 데이터형이다.  
Set - 가변형  
Dictionaries  


2. print("fastcampus"[0:4])는 어떻게 출력되는지 작성해주세요.  
fast

3. 아래 파이썬에서 사용되는 연산자들이 있습니다. 해당 연산자들이 어떤 연산을 하는지 작성해주세요.   
+ 더하기  
- 빼기  
* 곱하기    
/ 나누기  
// 나누기 (몫만 나타냄)  
% 나누기 (나머지만 나타냄)  
** 지수(제곱)  
+= 덧셈 할당 연산 (a+=b 는 a=a+b와 같다)    
*= 곱셈 할당 연산 (i*=5 는 i=i*5와 같다)  


## 필수2

1. v_float이라는 변수에 9.0이라는 값을 할당했습니다. 이 v_float 변수의 값을 정수(int)로 바꾸는 코드를 작성해주세요.  
print(int(v_float)  

2. 이스케이프 문자를 활용해서 ‘I like "apples"’ 를 출력하는 print문을 작성해주세요.  
escape = "'I like \"apples\"'"  
print(escape)

3. "fastcampus" 라는 문자를 슬라이싱하여 "fast" 로 출력되게 하는 print문을 작성해주세요.  
prnit("fastcampus"[0:4])

4. -7의 절대값을 출력하는 print문을 작성해주세요.  
print(abs(-7))

## 필수3

1. "Nice Day"라는 문자열의 길이를 출력하는 print문을 작성해주세요.  
print(len("Nice Day"))

2. ‘\\ ^_^ \\’  이라는 문자열을 이스케이프 문자를 사용하지 않고 출력하도록 하는 print문을 작성해주세요.  
raw_r1= r"'\\ ^_^ \\'"  
print(raw_r1)

3. 연산자를 사용하여 ‘*’을 100개 출력하는 print문을 작성해주세요.  
print("*"*100)

4. print 함수를 한 번 사용하여, 문자열을 아래처럼 출력하는 코드를 작성해주세요.  
나는  
고양이를  
좋아한다.  

a = """  
나는  
고양이를  
좋아한다.  
"""  
print(a)  

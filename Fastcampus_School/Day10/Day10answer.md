## �ʼ�1

print �Լ��� �̿��� ���ڿ��� ����ϴ� �ڵ��Դϴ�. �ùٸ��� ��µǴ� ���⸦ �����ð�, �ùٸ��� ��µ��� �ʴ� ����� ���� �ڵ带 ���� �����ּ���.

a) print(���ȳ��ϼ���. �� �̸��� ����μ�" �Դϴ�.��)   # �ȳ��ϼ���. �� �̸��� ����μ��� �Դϴ�.

print('�ȳ��ϼ���. �� �̸��� "��μ�" �Դϴ�.')

b) print("{q}�� {b} �Դϴ�.".format(q="���", b="��"))    # ����� �� �Դϴ�.

�ùٸ��� ��µ�


## �ʼ�2

������ ���ڸ� �������ֱ����ؼ� ����ϴ� print �Լ��� �ɼ��� [   sep   ] �̴�.

print('{0} and {0} and {0}'.format('You', 'Me'))�� �������?  
You and You and You

print �Լ������� ���� %s: [  ����  ], %d: [  ����   ], %f: [   �Ǽ�  ]�� ���Ѵ�. ��ĭ�� �˸��� ������?

print("Test: %5d, Price: %4.1f" % (158, 6534.123))�� ��� ����?  
Test:  158, Price: 6534.1

\you\ �� ����ϱ����� ����Ʈ���� �ۼ����ּ���  
print('\\you\\')

��Hello���� ��Hello���� ����ϱ� ���� ����Ʈ���� �ۼ����ֽð� �� ���̿� ���� �����ּ���.  
print("'Hello'")    
print('"Hello"')  

���̴�...��������ǥ�� ������ ������ �߻��ϱ� ������, ���� �ٸ� ����ǥ�� �־���� �Ѵٴ� ��.


## �ʼ�3

���� ������� ��� print�Լ��� ���� ����� �� �ֵ��� �ڵ�� ¥������.

2019-06-13  
print('2019','06','13', sep='-')

fastcampus@gmail.com  
print('fastcampus','gmail.com',sep='@')

{a}���� {b}��° �湮�� ȯ���մϴ�.  
print("{q}���� {w}��° �湮�� ȯ���մϴ�" .format(q="{a}", w="{b}"))

3.141592�� ���������� �ݿø��� ���ڴ� 3�Դϴ�.  
print("3.141592�� ���������� �ݿø��� ���ڴ� %1d�Դϴ�." %(3.141592))


## �ʼ�4

���ǿ��� print�Լ��� ���Ͽ� �Ǽ��� �����ο� �Ҽ����� ���̸� �����ϴ� ���� ���Ͽ� ������ҽ��ϴ�.  
�׷��ٸ�, �������� ���̸� �������� �ʰ� �Ҽ����� ���̸� ������ �� �ִ� ����� ������ �������?  
%�� �̿��� ��İ� format�� �̿��� ����� �ΰ��� �ڵ带 �����Ͽ� �ֽñ� �ٶ��ϴ�. 

%�̿�� %.(���ϴ� �Ҽ��� ���� ���ڷ� �Է�)f %(�Ǽ�)) �� ǥ��  
print("%.3f" %(3333333.141592))

format �̿��: %�̿�ÿ� �����ϰ� .(�Ҽ��α���)f.format(�Ǽ�) �� ǥ��  
print("{:.2f}".format(3333333.141592))


## ��ȭ1

���� �� ���̽�(https://wikidocs.net/9)�� ���̽� �⺻���� ������ �����Դϴ�. ���ǿʹ� ������ ���̽� �⺻ ������ �����Ͻôµ� ������ �� ���̶�� �����մϴ�. 
�� ��ũ�� Ÿ�� ���ø� [01-5 ���̽� �ѷ�����]��� é�Ͱ� ���ɴϴ�. �ش� é�͸� �о�ð�, ��ټ��� ���α׷��� ���� �߿��� ������ ����, ����, ���ǹ�, �ݺ���, �Լ��� ���� � �������� �����غ�����. 
���� �ڵ带 ���� �غ��� �ڵ��� �ǹ̸� ���� �����ø� ���� �����ϴ�.
( ������ ������ ���� �ʽ��ϴ�. 01-5 ������ ����鵵 �ѹ� �о�ô� ���� ��õ�帳�ϴ�.)


## ��ȭ2

������� ���� 10���� ��ǰ�� 8������ �Ǹ����� �� �������� ������ ���ϴ� �ڵ带 �������ּ���.
������ �����ؼ� ���������� �����ΰ��ݡ��� �����ϰ� ������ �� �ֵ��� ���ּ���.
�������� �����Ӱ� �ص� ������ ������ �̸��� �������� �ʴ´ٸ� �������� - rPrice, �����ΰ���' - dPrice ��� �������� ���ŵ� �����ϴ�.
������ �����                                                     ó�� ���������� ����� ���ּž� �մϴ�. ���� ���� �����帰 ���� ���÷� �����帰���Դϴ�. print �Լ� �ȿ� ���� ������ �����ŵ� �������ϴ�.
�������� �Ҽ��� 2° �ڸ����� ǥ�����ּ���.
��Ģ���� ������, ���������� ����� ���� �� ��� Ư¡�� �ְ� ������ �������� �����غ��� �����Դϴ�.

rPrice=100000  
dPrice=80000  
print("%.2f" %(dPrice/rPrice))



## ��ȭ3

���ǿ��� %5d, {5d}�� ���� ������ �ڸ��� �����ϴ� ����� ���Ͽ� �����Ͽ� ���ҽ��ϴ�.
            ��� %5d�� �Ҵ�� ���� 5�ڸ����� ũ�� 5�ڸ��� ���ѵ�����, �̺��� ���� �ڸ����� ������ ���� �Ǹ�, ���� 5�ڸ��� ������ 
            �� �����ʺ��� ���ڰ� ä�����ϴ�.
            ��, ���ʿ��� ��ĭ�� �����ȴٴ� ���ε���. ( _ _ _ _ 1 Ȥ�� _ _ 1 2 3 Ȥ�� 1 2 3 4 5 �� ���� �������)
            ���⼭ ���ʺ��� ���ڰ� ä������ �Ǵ� ����� ã�� �ڵ带 �÷��ּ���.
            (���� 5�ڸ��� ������ �ڶ� ���ʺ��� ���ڰ� ä������: 1 _ _ _ _ Ȥ�� 1 2 3 _ _ Ȥ�� 1 2 3 4 5 �� ���� �������)

'-'�� �ٿ��ش�  
print("%-10d" %(333))

   2.      ������ ��ĭ�� 0(����)���� ä��� ����� ã��, �ڵ带 �÷��ּ���.

�տ� 0�� �ٿ��ش�  
print("%010d" %(333))

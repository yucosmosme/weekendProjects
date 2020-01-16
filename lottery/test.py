from random import *
#로또 중복 없이생성 -> set
lotto = set()


def randomlotto():
    while len(lotto) < 6:
        lotto.add(randrange(1, 45))
    print(sorted(lotto))
    lotto.clear()


print('Your lucky numbers: ')
for i in range(0, 6):
    randomlotto()

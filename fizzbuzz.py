import sys

for n in range(1, len(sys.argv)):
    if int(sys.argv[n]) % 3 == 0 and int(sys.argv[n]) % 5 == 0:
        print('fizzbuzz')
    elif int(sys.argv[n]) % 3 == 0:
        print('fizz')
    elif int(sys.argv[n]) % 5 == 0:
        print('buzz')
    else:
        print(sys.argv[n])
    
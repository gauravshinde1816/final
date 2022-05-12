from itertools import count


def toh(n ,src , aux , dest) :

    if n == 1:
        print("move 1 from " ,  src  , " to " ,  dest)
        return 1
    
    pre = toh(n-1 ,  src , dest , aux)

    print("move ", n , " from " , src , " to " , dest)

    post = toh(n-1  ,  aux , src , dest)

    return pre + post + 1



if __name__ == "__main__":

    n = int(input("Enter no of dics"))
    src = input("Enter source tower\n")
    dest = input("Enter dest tower\n")
    aux = input("Enter aux tower\n")

    count = toh( n , src , aux , dest)


    print("Moves : " , count)

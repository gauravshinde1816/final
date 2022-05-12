from collections import defaultdict
jug1, jug2, target = 4, 3, 2
visited = defaultdict(lambda: False)


def waterJugSolver(amt1, amt2):

    if (amt1 == target and amt2 == 0) or (amt2 == target and amt1 == 0):
        print(amt1,  amt2)
        return True

    if visited[(amt1,  amt2)] == False:
        print(amt1, amt2)

        visited[(amt1,  amt2)] = True

        return (waterJugSolver(amt1,  0) or
                waterJugSolver(0, amt2) or
                waterJugSolver(jug1,  amt2) or
                waterJugSolver(amt1,  jug2) or
                # pour water from jug1 to jug2
                waterJugSolver(amt1 + min(amt2,  (jug1 - amt1)), amt2 - min(amt2,  (jug1 - amt1))) or
                 # pour water from jug2 to jug1
                waterJugSolver(amt1 - min(amt1,  (jug2 - amt2)),
                               amt2 + min(amt1,  (jug2 - amt2))
                               ))
    else:
        return False


waterJugSolver(jug1 ,  jug2)
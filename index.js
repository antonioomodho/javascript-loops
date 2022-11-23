console.log("Hello npm")
//TODO create a function that requires 2 parameters and should print/log those 2 items
// Ensure fxn name = print
const print = (Value ="200",Value1 ="kgs") => console.log(Value, Value1)
 print("Message:","Hello npm")

    //print hello x5
    //for-loop
    //syntax: for(iteratio initializers; stopping condition always a boolean expression;iteration continue eg counting one by one or pair by pair etc){}Eg noding your head or using finger to count

    for(let i = 1; i < 6; i = i + 1){
        print(i, "Hello")
    }
    // (Hello, i => i*i)
    for(let i = 1; i < 6; i = i+1){
        print("Hello,=>",i*i)
    }
    // while loop =>
    //Syntax: while(boolean condition){}
    // do-while-loop=>
    //Syntax: do{}while(boolean condition)
    let j = 1;
    while(j < 6){
        print(j, "Wakanda")
        j = j + 1
        //j+= 1 is the same as j=j+1
        // ++k is pre increment
        //k++ is post increment can be replaced by k=k+1
    }
        let m = 1
        do{
            print(m, "Hello")
            m++
        } while(m < 6)

        let z = 1
        while(z<1){
            print("Takeoff","Offset")
            z++
        }
        do{
            print("Quavo", "Migos")
            z++
        }while(z < 1)

    
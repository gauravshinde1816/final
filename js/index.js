
let btn  = document.getElementById("btn")



btn.addEventListener("click" ,  ()=>{
    let i1 = document.getElementById("input1").value
    let i2 = document.getElementById("input2").value

    let x = i1.split("#").map(Number)
    let y = i2.split("#").map(Number)

    let row1 = x[0] , column1 = x[1] , num1 = x[2]
    let row2 = y[0] , column2 = y[1] , num2 = y[2]


    const table1 = document.getElementById("table1")

    let res2 = []
    const multiply = ()=>{
        for(let i=0 ; i< row1 ;i++){
            let lst = []
            for(let j=0; j<column1 ;j++){
                lst.push(mat1[i][j] * mat2[i][j])
            }
            res2.push(lst)
        }
    }


    let mat1 = []
    let mat2 = []

    
    let z = ""
    let row = ""
    for (let i = 0; i < row1; i++) {
        let lst = []
        row = "<tr>"
        let num = num1 * (i+1)
        for(let j = 0 ; j<column1 ;j++){
            row+=`<td> ${num} </td>`
            lst.push(num)
            num += (i+1)
        }
        row+="</tr>"
        mat1.push(lst)
        z+=row
    }


    table1.innerHTML = z
    const table2 = document.getElementById("table2")
    let z1=""
    let r2=""


    for(let i=0; i < row2 ; i++){
        let lst = []
        r2 = "<tr>"
        let _num = num2 * (i+1)
        for(let j=0 ; j< column2 ;j++){
             r2+= `<td> ${_num} </td>`
             lst.push(_num)
            _num = _num + (i+1)
        }
        r2+="</tr>"
        mat2.push(lst)
        z1+=r2
    }
    table2.innerHTML = z1

    const  res = document.getElementById("res")

    console.log(res)


    if(num1 == num2){
       res.innerHTML = z
    }

    else{
        multiply()
        console.log(res2)
        let z3 = ""
        let r3 = ""
        for(let i=0; i<row1 ;i++){
            r3="<tr>"
            for(let j=0; j< column1 ; j++){
                r3+=`<td>${res2[i][j]}</td>`
            }
            r3+="</tr>"
            z3+=r3
        }

        res.innerHTML = z3
    }




})


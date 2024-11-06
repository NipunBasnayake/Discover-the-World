function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
                <div class="col-lg-6 px-0  mx-auto" style="background-image: url(${element.flags.png}); background-repeat: no-repeat; background-size: cover;">
                    <h1 class="display-4">${element.name.common}</h1>
                    <p class="lead my-3">${element.flags.alt}</p>
                    <p class="lead mb-0">${element.capital[0]}</p>
                </div>
            `});

        document.getElementById("row").innerHTML=body;
        
    })
    
}


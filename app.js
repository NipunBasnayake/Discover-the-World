function searchCountry() {
    let txtSearch = document.getElementById("txtSearch").value;
    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res => res.json())
    .then(data => {
        let body = "";
        data.forEach(element => {
            body += `
                <div class="col-lg-8 mx-auto">
                    <div class="row">
                        <div class="col-md-5 d-flex align-items-center justify-content-center">
                            <img src="${element.flags.png}" alt="${element.name.common} Flag" class="img-fluid rounded-3" style="max-height: 200px;">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h2 class="card-title text-primary fw-bold">${element.name.common}</h2>
                                <p class="card-subtitle text-muted fst-italic">${element.name.official}</p>
                                <table class="table table-bordered mt-3">
                                    <tbody>
                                        <tr><th>Capital</th><td>${element.capital}</td></tr>
                                        <tr><th>Region</th><td>${element.region}, ${element.subregion}</td></tr>
                                        <tr><th>Population</th><td>${element.population}</td></tr>
                                        <tr><th>Currency</th><td>${Object.values(element.currencies).map(c => c.name).join(", ")}</td></tr>
                                        <tr><th>Timezone</th><td>${element.timezones}</td></tr>
                                        <tr><th>Languages</th><td>${element.languages && Object.values(element.languages).join(", ")}</td></tr>
                                        <tr><th>Area</th><td>${element.area} km²</td></tr>
                                        <tr><th>Internet TLD</th><td>${element.tld}</td></tr>
                                        <tr><th>Driving Side</th><td>${element.car.side}</td></tr>
                                    </tbody>
                                </table>
                                <a href="${element.maps?.googleMaps || '#'}" target="_blank" class="btn btn-primary w-100 mt-3">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById("searchRow").innerHTML = body;
    });
}

async function allCountries() {
    // console.log("All countries");
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        body += `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${element.flags.png}" class="card-img-top country-flag" alt="${element.name.common}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${element.name.common}</h5>
                        <p class="card-text">${element.name.official}</p>
                        <a href="${element.maps.googleMaps}" class="btn btn-primary mt-auto">Google Maps</a>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("allCountriesRow").innerHTML = body;
}

allCountries();



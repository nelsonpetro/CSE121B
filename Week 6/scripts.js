const coinInfo = function() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response) => {
      return response.json();
    }).then(data => {
        renderTable(data);
        document.querySelector(".search").addEventListener("keyup", function(){
            const info = document.querySelector(".info");
            while (info.firstChild) {
                info.firstChild.remove();
            }
            let search = this.value.toLowerCase();
            let filteredArray = data.filter(coin => coin.name.toLowerCase().includes(search));
            
            renderTable(filteredArray);
        });
        
        function renderTable(filteredArray) {
            filteredArray.forEach(coin => {
                let coinInfo = document.createElement("tr");
                let coinName = document.createElement("td");
                let coinPrice = document.createElement("td");
                let coinPriceChange = document.createElement("td");
                let coinImg = document.createElement("img");
                let imgCont = document.createElement("td");
                coinName.innerHTML = coin.name;
                coinPrice.innerHTML = coin.current_price.toFixed(4);
                coinPriceChange.innerHTML = coin.price_change_24h.toFixed(5);
                coinPriceChange.setAttribute("class", "change");
                coinImg.setAttribute("src", coin.image);
                coinImg.setAttribute("alt", coin.name);
                coinImg.setAttribute("class", "coinImg");
                imgCont.appendChild(coinImg);
                coinInfo.append(imgCont, coinName, coinPrice, coinPriceChange);
                document.querySelector(".info").appendChild(coinInfo);
            });
        
            document.querySelector(".infotable").style.textAlign = "center";
    
            let headings = document.querySelectorAll(".table-head td");
            headings.forEach(head =>{
                head.style.fontSize = "2em";
                head.style.maxWidth = "25%";
                head.style.padding = "20px";
                head.style.border = "1px dashed white";
            });
    
            let images = document.querySelectorAll(".coinImg");
            images.forEach(img => {
                img.style.maxWidth = "50px";
                img.style.margin = "10px";
            });
    
            let bodyInfo = document.querySelectorAll(".info tr td");
            bodyInfo.forEach(cell =>{
                cell.style.border = "1px dashed white";
                cell.style.fontSize = "1.5em";
                cell.style.padding = "10px";
            });
    
            let changes = document.querySelectorAll(".change");
            changes.forEach(change =>{
                Number(change.innerHTML) >= 0 ? change.style.color = "#009400" : change.style.color = "#CF0210";
            })
        }
        
    });
}
coinInfo();





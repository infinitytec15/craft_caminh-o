$(document).ready(function () {
	window.addEventListener("message", function (event) {
		var data = event.data;
		switch (data.action) {
			case "showMenu":
				$(".background").css("display", "flex");

				const Carros = data.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
				$(".aba1").html(`
					${Carros.map((item) => (`
						<img class="carro" src="http://181.215.254.198/Carros/${item.spawn}.png" onerror="this.src='images/sem.png';" alt="" onclick="selecionado('${item.spawn}');">
					`)).join('')}
				`);
			break;

			case "showSelecionado":
				$(".background").css("display", "flex");

				const CarroSelecionado = data.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
				$(".aba2").html(`
					${CarroSelecionado.map((item) => (`
						<img class="carrito" src="http://181.215.254.198/Carros/${item.spawn}.png" onerror="this.src='images/sem.png';" alt="" >
						<div class="nome">${item.nome}</div>
						<div class="infos">
							<div class="infos2">Peso: ${item.peso}kg</div>
							<div class="infos2">${item.pneus} Pneus</div>
							<div class="infos2">${item.motor} Motor</div>
							<div class="infos2">${item.lataria} Lataria</div>
							<div class="infos2">${item.porta} Porta</div>
							<div class="infos2">${item.capo} Capo</div>
						</div>
						<div class="produzir" onclick="produzir('${item.spawn}');">Produzir</div>
					`)).join('')}
				`);
			break;

			// ================================================================
			// FECHAR TUDO
			// ================================================================
			case "hideMenu":
				$(".background").css("display", "none");

			break;
        }
    });

	// ================================================================
	// SELECIONAR AS OPÇÕES
	// ================================================================
	document.onkeyup = function (data) {
		if (data.which == 27) {
			$.post("https://MazeCaminhao/Close");
		}
	};

});

function selecionado(carro) {
	$.post("https://MazeCaminhao/Selecionado", JSON.stringify({
		carro: carro
	}))
}

function produzir(carro) {
	$.post("https://MazeCaminhao/Produzir", JSON.stringify({
		carro: carro
	}))
}
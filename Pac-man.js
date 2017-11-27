/*
Numeração dos array's:
Fundo preto - 0
Comida do boneco - 1
Parede - 2
Chão Rápido - 3
Chão Rápido com comida - 4
Fantasma - 5
Estrela - 6
Tuneis (esq-direita) - 8
Tuneis_1 (direita-esq) - 9 
*/
var ecra = new Array(
		    new Array(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2),
            new Array(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2),
            new Array(2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2),
            new Array(2, 1, 2, 8, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 9, 2, 1, 2),
            new Array(2, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 2),
            new Array(2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2),
			new Array(2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2),
            new Array(2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2),
            new Array(2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2),
            new Array(2, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2),
			new Array(2, 2, 2, 1, 1, 1, 2, 1, 2, 6, 0, 0, 1, 0, 0, 6, 2, 1, 2, 1, 1, 1, 2, 2, 2),
            new Array(2, 2, 2, 2, 1, 4, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 2, 1, 1, 4, 1, 2, 2, 2, 2),
            new Array(2, 1, 1, 1, 1, 4, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 4, 1, 1, 1, 1, 2),
            new Array(2, 2, 2, 2, 1, 4, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 2, 1, 1, 4, 1, 2, 2, 2, 2),
            new Array(2, 2, 2, 1, 1, 4, 1, 1, 2, 6, 0, 0, 1, 0, 0, 6, 2, 1, 1, 4, 1, 1, 2, 2, 2),
            new Array(2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2),
            new Array(2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2),
            new Array(2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2),
			new Array(2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2),
            new Array(2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2),
			new Array(2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2),
            new Array(2, 1, 2, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 2, 1, 2),
            new Array(2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2),
			new Array(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2),
			new Array(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2)
            );
			
var init_position_X = 1;
var init_position_Y = 1;
var pacman_X = init_position_X + 10;
var pacman_Y = init_position_Y + 22;
var fantasma_X = init_position_X + 11;
var fantasma_Y = init_position_Y + 11;
var timer_pacman;
var timer_ghost;
var position = '-';
var vidas = 3; //numero de vidas do boneco
var pontuacao = -10;
var congelaFantasma = 0;
var congelaFantasmaTempo = 0;
var comida = 0;
var ecranAlturaX = 25;
var ecranLarguraY = 25;
var tempo = 0;
var numeroTunel;
var contadorTuneis = 0;

//tempo de jogo
function contador() 
{
    if (vidas > 0 && comida > 0) {
        document.Contador.tempo.value = tempo;
        tempo += 1;
        setTimeout("contador()", 1000);
    }

}

//imagens do jogo
function colocaimagem(y, x, a) {
    oImg = document.createElement('img');
    document.body.appendChild(oImg);
    switch (a) {
        case 0:
        //fundo do ecrã do jogo
            oImg.src = 'Imagens/fundo.jpg';
            oImg.style.position = 'absolute';
            break;
        case 1:
        //comida do boneco
            oImg.src = 'Imagens/comida.jpg';
            oImg.style.position = 'absolute';
            break;
        case 2:
        //parede com simbolo da monster energy
            oImg.src = 'Imagens/monster.jpg';
            oImg.style.position = 'absolute';
            break;
		case 3: 
		//chão rápido
			oImg.src = 'Imagens/chao_rapido.jpg';
			oImg.style.position = 'absolute';
		break;
		case 4: 
		//chão rápido com comida
			oImg.src = 'Imagens/chao_rapido1.jpg';
			oImg.style.position = 'absolute';
		break;
		case 5:
        //fantasma
            oImg.src = 'Imagens/ghost.gif';
            oImg.style.position = 'absolute';
			oImg.name="ghost";
		break;
		case 6:
        //estrela
            oImg.src = 'Imagens/star.gif';
            oImg.style.position = 'absolute';
            break;
        default:
        //tuneis
            oImg.src = 'Imagens/tunel1.png';
            oImg.style.position = 'absolute';
		break;
    }
    oImg.style.top = getPosicao_Y(y);
    oImg.style.left = getPosicao_X(x);
}

//função que coloca as imagens consoante a posição do array
function iniciaEcra() {
    for (y = 0; y < ecranLarguraY; y++) {
        for (x = 0; x < ecranAlturaX; x++) {
            if (ecra[y][x] == 2) 
                colocaimagem(y, x, 2);
            if (ecra[y][x] == 1) 
			{
                colocaimagem(y, x, 1);
                comida++;
            }
			
			if (ecra[y][x] == 3) 
                colocaimagem(y, x, 3);
			
			if (ecra[y][x] == 4)
			{			
				colocaimagem(y, x, 4);
				comida++;
			}
			
            if (ecra[y][x] == 5) 
                colocaimagem(y, x, 5);

			if (ecra[y][x] == 6) 
                colocaimagem(y, x, 6);
				
            if (ecra[y][x] > 7) {
                numeroTunel = ecra[y][x];
                colocaimagem(y, x, numeroTunel);
            }
			if (ecra[y][x] == 7) 
                colocaimagem(y, x, 7);
         }
    }
}

//inicia o ecrã do jogo
function initEcran() {
    document.Contador.Pontuação.value = pontuacao;
    document.Contador.comida.value = comida;
    document.Contador.vidas.value = vidas;
    document.Contador.tempo.value = tempo;
    iniciaEcra();
	contador();
    colocaPacmanEcra();
	move_pacman();
	colocaghostEcra();
	move_ghost();
	
}
// posição em X 
function getPosicao_X(x) {
    return 30 + x * 22;
}
// posição em Y 
function getPosicao_Y(y) {
    return 30 + y * 22;
}
//coloca o pacman no ecrã
function colocaPacmanEcra() {
    document.Contador.Pontuação.value = pontuacao;
    document.Contador.comida.value = comida;
    document.Contador.vidas.value = vidas;
    document.Contador.tempo.value = tempo;
    pacman.style.left = getPosicao_X(pacman_X);
    pacman.style.top = getPosicao_Y(pacman_Y);
}
//coloca o fantasma no ecrã
function colocaghostEcra() {
    if (congelaFantasma == 0 || congelaFantasma == 0)
        ghost.src = "Imagens/Ghost.gif";
    if (congelaFantasma == 1)
        ghost.src = "Imagens/ghost2.gif";
    ghost.style.left = getPosicao_X(fantasma_X);
    ghost.style.top = getPosicao_Y(fantasma_Y);
}

//imagens das direções do boneco (cima, baixo, direita, esquerda) com respectiva codificação
function changePosition(event) {
	
    switch (event.keyCode) {
        case 40:
            position = 'd';
            pacman.src = "Imagens/down.gif"; //baixo
            break;
        case 39:
            position = 'r';
            pacman.src = "Imagens/right.gif"; //direita
            break;
        case 37:
            position = 'l';
            pacman.src = "Imagens/left.gif"; //esquerda
            break;
        case 38:
            position = 'u';
            pacman.src = "Imagens/up.gif"; //cima
            break;
    }
}

function move_pacman() {
    //teclas para direccionar o boneco
    switch (position) {
        case 'r':
            if (ecra[pacman_Y][pacman_X + 1] != 2)
                pacman_X += 1;
            break;
        case 'l':
            if (ecra[pacman_Y][pacman_X - 1] != 2)
                pacman_X -= 1;
            break;
        case 'u':
            if (ecra[pacman_Y - 1][pacman_X] != 2)
                pacman_Y -= 1;
            break;
        case 'd':
            if (ecra[pacman_Y + 1][pacman_X] != 2)
                pacman_Y += 1;
            break;
    }
    //obriga o jogador a terminar o jogo quando já não há comida
    if (comida <= 0)
        alert("Parabéns!\nGanhou o jogo!\n->Pontos: " + pontuacao + "\n->Tempo Decorrido: " + tempo + "segundos\n\nClique F5 para novo jogo");

    //apanha a estrela e ganha 50 pontos
    if (ecra[pacman_Y][pacman_X] == 6) 
	{
        colocaimagem(pacman_Y, pacman_X, 0);
        pontuacao += 50;
        ecra[pacman_Y][pacman_X] = 0;
		alert("Parabéns! Apanhou uma estrela, ganhou 50 pontos!"); 
    }
	
    //apanha comida e ganha 20 pontos
    if (ecra[pacman_Y][pacman_X] == 1) {
        colocaimagem(pacman_Y, pacman_X, 0);
        pontuacao += 10;
        comida--;
        //se apanhar a ultima bola de comida, ganha o jogo!
        if (comida <= 0)
            alert("Parabéns!\nGanhou o jogo!\n->Pontos: " + pontuacao + "\n->Tempo Decorrido: " + tempo + "segundos\n\nClique F5 para novo jogo");
        ecra[pacman_Y][pacman_X] = 0;
    }
	
	//fantasma
    if (ecra[pacman_Y][pacman_X] == 5) {
        colocaimagem(pacman_Y, pacman_X, 0);
        congelaFantasma = 1;
        congelaFantasmaTempo = 10;
        ecra[pacman_Y][pacman_X] = 0;
    }
    if (congelaFantasma == 1) {
        if (congelaFantasmaTempo != 0)
            congelaFantasmaTempo--;
        else
            congelaFantasma = 0;
    }
	
    //tuneis
    if (ecra[pacman_Y][pacman_X] >= 7) {
        numeroTunel = ecra[pacman_Y][pacman_X];
        var auxY = pacman_Y;
        var auxX = pacman_X;
        for (y = 0; y < ecranLarguraY; y++) {
            for (x = 0; x < ecranAlturaX; x++) {
                if (ecra[y][x] == numeroTunel) {
                    if (x != auxX && y != auxY) {
                        pacman_X = x;
                        pacman_Y = y;
						position = 'd';
						pacman.src = "Imagens/down.gif";
                    }
                }
            }
        }
    }

	//compara as coordenadas do fantasma com as do pacman
    if (pacman_X == fantasma_X && pacman_Y == fantasma_Y) {
        if (congelaFantasma == 5) {
            if (vidas >= 0) {
                fantasma_X = init_position_X + 11;
                fantasma_Y = init_position_Y + 11;
                congelaFantasma = 0;
                congelaFantasmaTempo = 0;
                document.Contador.vidas.value = vidas--;
				alert("Morreu só já tem " + vidas + " vidas!"); 
            }
            if (vidas == 0)
                alert("PERDEU o jogo!\n->Pontos: " + pontuacao + "\n->Tempo Decorrido: " + tempo + "segundos\n\nClique F5 para novo jogo"); 
        }
        else
		{
            pontuacao += pontuacao + 100;
			fantasma_X = init_position_X + 11;
            fantasma_Y = init_position_Y + 11;
		}
    }
	
    //enquanto houver vidas ou comida
    if (vidas != 0 || comida == 0) {
        //no chão rápido move-se mais rápido
        if (ecra[pacman_Y][pacman_X] == 3)
            timer_pacman = window.setTimeout("move_pacman()", 70);
        else if(ecra[pacman_Y][pacman_X] == 4)
		{
			colocaimagem(pacman_Y, pacman_X, 3);
			timer_pacman = window.setTimeout("move_pacman()", 70);
			ecra[pacman_Y][pacman_X] = 3;
			pontuacao += 10;
			comida--;
		}
		else
            timer_pacman = window.setTimeout("move_pacman()", 300);
    }
    colocaPacmanEcra();
}

function move_ghost() {
    if (congelaFantasma != 1) {
        if (pacman_Y == fantasma_Y) 
		{
            if (fantasma_X < pacman_X) 
			{
                if (ecra[fantasma_Y][fantasma_X + 1] != 2)
					fantasma_X += 1;
                else if (ecra[fantasma_Y + 1][fantasma_X] != 2)
					fantasma_Y += 1;
                else if (ecra[fantasma_Y - 1][fantasma_X] != 2)
					fantasma_Y -= 1;
                else if (ecra[fantasma_Y][fantasma_X - 1] != 2)
					fantasma_X -= 1;
            }
            else if (fantasma_X > pacman_X) 
			{
                if (ecra[fantasma_Y][fantasma_X - 1] != 2)
					fantasma_X -= 1;
                else if (ecra[fantasma_Y + 1][fantasma_X] != 2)
					fantasma_Y += 1;
                else if (ecra[fantasma_Y - 1][fantasma_X] != 2)
					fantasma_Y -= 1;
                else if (ecra[fantasma_Y][fantasma_X + 1] != 2)
					fantasma_X += 1;
            }
        }
        else if (pacman_X == fantasma_X) 
		{
            if (fantasma_Y < pacman_Y) 
			{
                if (ecra[fantasma_Y + 1][fantasma_X] != 2)
					fantasma_Y += 1;
                else if (ecra[fantasma_Y][fantasma_X + 1] != 2)
					fantasma_X += 1;
                else if (ecra[fantasma_Y][fantasma_X - 1] != 2)
					fantasma_X -= 1;
                else if (ecra[fantasma_Y - 1][fantasma_X] != 2)
					fantasma_Y -= 1;
            }
            else if (fantasma_Y > pacman_Y) 
			{
                if (ecra[fantasma_Y - 1][fantasma_X] != 2)
					fantasma_Y -= 1;
                else if (ecra[fantasma_Y][fantasma_X + 1] != 2)
					fantasma_X += 1;
                else if (ecra[fantasma_Y][fantasma_X - 1] != 2)
					fantasma_X -= 1;
                else if (ecra[fantasma_Y + 1][fantasma_X] != 2)
					fantasma_Y += 1;
            }
        }
        else 
		{
            if (pacman_X < fantasma_X) 
			{
                if (ecra[fantasma_Y][fantasma_X - 1] != 2)
                    fantasma_X -= 1;
                else if (ecra[fantasma_Y + 1][fantasma_X] != 2)
                    fantasma_Y += 1;
                else if (ecra[fantasma_Y - 1][fantasma_X] != 2)
                    fantasma_Y -= 1;
                else if (ecra[fantasma_Y][fantasma_X + 1] != 2)
                    fantasma_X += 1;
            }
            else if (pacman_X > fantasma_X) 
			{
                if (ecra[fantasma_Y][fantasma_X + 1] != 2)
					fantasma_X += 1;
				else if (ecra[fantasma_Y][fantasma_X - 1] != 2)
					fantasma_X -= 1;
				else if (ecra[fantasma_Y + 1][fantasma_X] != 2)
					fantasma_Y += 1;
				else if (ecra[fantasma_Y - 1][fantasma_X] != 2)
					fantasma_Y -= 1;
            }
        }
    }
    if (vidas != 0)
        timer_ghost = window.setTimeout("move_ghost()", 210);
        colocaghostEcra();
    }
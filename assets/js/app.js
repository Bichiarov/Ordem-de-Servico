const STORAGE_KEY = 'os013_ordens_v3';
const CLIENTS_KEY = 'os013_clientes_v3';
const CLIENTES_INICIAIS = [
  {
    "id": "cli-10975",
    "codigo": "10975",
    "cliente": "BAR E LANCHES DOIS IRMAOS",
    "razaoSocial": "BAR E LANCHES PEREIRA & ANDRADE LTDA",
    "cnpj": "73176422000196",
    "loja": "10975",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10868",
    "codigo": "10868",
    "cliente": "6DEGA",
    "razaoSocial": "54.685.493 YASMIN MARTINS DE LIMA",
    "cnpj": "54685493000170",
    "loja": "10868",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10554",
    "codigo": "10554",
    "cliente": "BARDEGA D' BOA",
    "razaoSocial": "BARDEGADBOA LTDA",
    "cnpj": "62876742000132",
    "loja": "10554",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10531",
    "codigo": "10531",
    "cliente": "POINT DO SORVETE",
    "razaoSocial": "COCO BEACH BAR LTDA",
    "cnpj": "13734275000109",
    "loja": "10531",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10462",
    "codigo": "10462",
    "cliente": "BAR DO JORGE",
    "razaoSocial": "EMM DISTRIBUIDORA DE BEBIDAS E LANCHONETE",
    "cnpj": "15217273000160",
    "loja": "10462",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10442",
    "codigo": "10442",
    "cliente": "BOTECO DA COOP",
    "razaoSocial": "61.919.786 ALESSANDRA DOS SANTOS PEREIRA DA SILVA",
    "cnpj": "61919786000130",
    "loja": "10442",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10399",
    "codigo": "10399",
    "cliente": "CANTINA MANUELA",
    "razaoSocial": "SENADOR ANTONIO PEREIRA JUNIOR LTDA",
    "cnpj": "61555084000114",
    "loja": "10399",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10337",
    "codigo": "10337",
    "cliente": "NOVO BOI",
    "razaoSocial": "COMERCIO DE CARNES NOVO BOI LTDA",
    "cnpj": "48958994000180",
    "loja": "10337",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10230",
    "codigo": "10230",
    "cliente": "ANCORAS RESTAURANTE E PIZZARIA",
    "razaoSocial": "25.186.902 DAVI NUNES NOGUEIRA",
    "cnpj": "25186902000195",
    "loja": "10230",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-10172",
    "codigo": "10172",
    "cliente": "BAR DOS AMIGOS 3",
    "razaoSocial": "BAR E RESTAURANTE ALFAIA LTDA",
    "cnpj": "50043221000115",
    "loja": "10172",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9969",
    "codigo": "9969",
    "cliente": "POINT DO TEMAKI",
    "razaoSocial": "PONIT DO TEMAKI LTDA",
    "cnpj": "59418348000146",
    "loja": "9969",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9890",
    "codigo": "9890",
    "cliente": "TEMAKERIA SILVA SANTOS",
    "razaoSocial": "51.501.754 ANA PAULA SANTOS BATISTA",
    "cnpj": "51501754000166",
    "loja": "9890",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9765",
    "codigo": "9765",
    "cliente": "SALT PARRILLA E FRUTOS DO MAR",
    "razaoSocial": "MERAKI BEACH BAR LTDA",
    "cnpj": "45789463000112",
    "loja": "9765",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9598",
    "codigo": "9598",
    "cliente": "BARDEGA MEXICANO",
    "razaoSocial": "BARDEGA MEXICANO LTDA",
    "cnpj": "57300793000181",
    "loja": "9598",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9452",
    "codigo": "9452",
    "cliente": "ANCORA S RESTAURANTE E PIZZARIA",
    "razaoSocial": "25.186.902 DAVI NUNES NOGUEIRA",
    "cnpj": "25186902000195",
    "loja": "9452",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9385",
    "codigo": "9385",
    "cliente": "MARI'S BAR",
    "razaoSocial": "MARIZETE BATISTA DO NASCIMENTO",
    "cnpj": "54556799000126",
    "loja": "9385",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9282",
    "codigo": "9282",
    "cliente": "TG BURGER",
    "razaoSocial": "TG BURGER ALIMENTOS LTDA",
    "cnpj": "51097827000287",
    "loja": "9282",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9271",
    "codigo": "9271",
    "cliente": "PIZZARIA MARAPE",
    "razaoSocial": "PIZZARIA MARAPE LTDA",
    "cnpj": "53907201000133",
    "loja": "9271",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9084",
    "codigo": "9084",
    "cliente": "BOI BRANCO",
    "razaoSocial": "JOSE BATISTA PEREIRA FILHO",
    "cnpj": "08965757000121",
    "loja": "9084",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9083",
    "codigo": "9083",
    "cliente": "CREPERIA DA PRAIA CANAL III",
    "razaoSocial": "CREPERIA DA PRAIA LTDA - ME",
    "cnpj": "21409485000141",
    "loja": "9083",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-9064",
    "codigo": "9064",
    "cliente": "FAMILIA LIMA",
    "razaoSocial": "52.551.474 ROSIANE CRISTINE XAVIER",
    "cnpj": "52551474000125",
    "loja": "9064",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8854",
    "codigo": "8854",
    "cliente": "BELMONTE RESTAURANTE",
    "razaoSocial": "BELMONTE RESTAURANTE LTDA",
    "cnpj": "50757464000115",
    "loja": "8854",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8736",
    "codigo": "8736",
    "cliente": "BAR E RESTAURANTE FOS",
    "razaoSocial": "ROBERTO LEANDRO SANTOS",
    "cnpj": "51321890000174",
    "loja": "8736",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8662",
    "codigo": "8662",
    "cliente": "PRIORIDADE 13 SUSHI BAR",
    "razaoSocial": "VDG BAR E RESTAURANTE",
    "cnpj": "51312487000189",
    "loja": "8662",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8660",
    "codigo": "8660",
    "cliente": "PORTO CARIOCA BISTRO",
    "razaoSocial": "J L COUTO SUCOS",
    "cnpj": "46185251000199",
    "loja": "8660",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8655",
    "codigo": "8655",
    "cliente": "PASTELARIA CONTINENTAL EXPRESS",
    "razaoSocial": "MARCELO H SILVA ALIMENTOS",
    "cnpj": "21565224000110",
    "loja": "8655",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8521",
    "codigo": "8521",
    "cliente": "SEU LESSA ESPETARIA",
    "razaoSocial": "VICTOR SOARES GONCALEZ",
    "cnpj": "42877089000119",
    "loja": "8521",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8507",
    "codigo": "8507",
    "cliente": "BISTRO DISAN",
    "razaoSocial": "BISTRO DISAN LTDA",
    "cnpj": "51901693000124",
    "loja": "8507",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8397",
    "codigo": "8397",
    "cliente": "A CASA CAFE VINHO E MASSA",
    "razaoSocial": "49.553.275 MARILENE VIEIRA DA SILVA",
    "cnpj": "49553275000141",
    "loja": "8397",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8396",
    "codigo": "8396",
    "cliente": "CLUBE DO VINHO",
    "razaoSocial": "CLUBE DO VINHO STORE COMERCIO LTDA",
    "cnpj": "41814761000164",
    "loja": "8396",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8367",
    "codigo": "8367",
    "cliente": "ZE DAS BATIDAS",
    "razaoSocial": "TRIBOS E TRIPS BAR E RESTAURANTE LTD,A",
    "cnpj": "35798498000164",
    "loja": "8367",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8365",
    "codigo": "8365",
    "cliente": "NEMO SUSHI LOUNGE",
    "razaoSocial": "NEMO SUSHI LOUNGE & BAR LTDA",
    "cnpj": "49957833000134",
    "loja": "8365",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-8288",
    "codigo": "8288",
    "cliente": "LA PIZZA",
    "razaoSocial": "TNF PEREIRA E JVC BULGARELLI PIZZARIA LTDA",
    "cnpj": "29761146000131",
    "loja": "8288",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7903",
    "codigo": "7903",
    "cliente": "CHEF VALMIR",
    "razaoSocial": "JULIANA S DA SILVA VARIEDADES",
    "cnpj": "36056907000110",
    "loja": "7903",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7574",
    "codigo": "7574",
    "cliente": "MERAKI BEACH BAR",
    "razaoSocial": "MERAKI BEACH BAR LTDA",
    "cnpj": "45789463000112",
    "loja": "7574",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7548",
    "codigo": "7548",
    "cliente": "TOKA DA ESFIHA",
    "razaoSocial": "ODIN SCATOLLO LIMA 08419033871",
    "cnpj": "46758146000100",
    "loja": "7548",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7517",
    "codigo": "7517",
    "cliente": "LOUNGE VI BAR GRILL",
    "razaoSocial": "RONALDO OTA FERREIRA LIMA",
    "cnpj": "46401992000160",
    "loja": "7517",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7507",
    "codigo": "7507",
    "cliente": "SPECIALE CAFETERIA",
    "razaoSocial": "SPECIALE CAFETERIA LTDA",
    "cnpj": "46010861000151",
    "loja": "7507",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7286",
    "codigo": "7286",
    "cliente": "SETIMA AVENIDA",
    "razaoSocial": "GALANTE & GALANTE LTDA",
    "cnpj": "05924216000167",
    "loja": "7286",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7226",
    "codigo": "7226",
    "cliente": "PARADA BURGER",
    "razaoSocial": "PARADA BURGER ALIMENTOS LTDA",
    "cnpj": "45052505000138",
    "loja": "7226",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-7018",
    "codigo": "7018",
    "cliente": "JORGE PIZZAS",
    "razaoSocial": "WAGNER MOTTA FERNANDES RESTAURANTE",
    "cnpj": "13416174000181",
    "loja": "7018",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6965",
    "codigo": "6965",
    "cliente": "LA BARCA FOOD E DRINK",
    "razaoSocial": "MARIANA GONCALVES RIBEIRO",
    "cnpj": "43669346000190",
    "loja": "6965",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6952",
    "codigo": "6952",
    "cliente": "GOGORDO ACAI SANTOS",
    "razaoSocial": "FLR COMERCIAL LTDA",
    "cnpj": "39910697000173",
    "loja": "6952",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6913",
    "codigo": "6913",
    "cliente": "NEMO SUSHI BAR",
    "razaoSocial": "LUAN HENRIQUE ROMAO DA SILVA SANTOS",
    "cnpj": "42717288000160",
    "loja": "6913",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6831",
    "codigo": "6831",
    "cliente": "BEEP BEEP",
    "razaoSocial": "P. M. GALLO LEMOS",
    "cnpj": "42072293000162",
    "loja": "6831",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6804",
    "codigo": "6804",
    "cliente": "NONNA",
    "razaoSocial": "NONNA RESTAURANTE LTDA",
    "cnpj": "41663144000105",
    "loja": "6804",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6771",
    "codigo": "6771",
    "cliente": "ADEGA MARE ALTA VILA BELMIRO",
    "razaoSocial": "MARE ALTA VILA BELMIRO LTDA",
    "cnpj": "42294889000107",
    "loja": "6771",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6733",
    "codigo": "6733",
    "cliente": "COCO BEACH",
    "razaoSocial": "RRS TEMAKERIA LTDA",
    "cnpj": "13734275000109",
    "loja": "6733",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6698",
    "codigo": "6698",
    "cliente": "THE HOUSE E ALOHA",
    "razaoSocial": "THE HOUSE LTDA",
    "cnpj": "41816209000105",
    "loja": "6698",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6460",
    "codigo": "6460",
    "cliente": "ADEGA MARE ALTA PRAIA",
    "razaoSocial": "MARE ALTA PRAIA LTDA",
    "cnpj": "39373474000114",
    "loja": "6460",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6296",
    "codigo": "6296",
    "cliente": "BAR DO RAMIRO",
    "razaoSocial": "SPORTS PRAIA BAR LTDA",
    "cnpj": "05461588000102",
    "loja": "6296",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6247",
    "codigo": "6247",
    "cliente": "ADEGA MARE ALTA",
    "razaoSocial": "ADEGA MARE ALTA LTDA",
    "cnpj": "32147575000128",
    "loja": "6247",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-6080",
    "codigo": "6080",
    "cliente": "BARDEGA PIZZARIA E DELIVERY",
    "razaoSocial": "ARTHUR A.V. DE SOBRAL GIZZI PIZZARIA",
    "cnpj": "37421228000165",
    "loja": "6080",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5985",
    "codigo": "5985",
    "cliente": "CASA DO GUAPO",
    "razaoSocial": "CASA DO GUAPO ROTISSERIE",
    "cnpj": "33177885000158",
    "loja": "5985",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5791",
    "codigo": "5791",
    "cliente": "CASINHA AMARELA",
    "razaoSocial": "THABATA APARECIDA NABETO DIAS",
    "cnpj": "29454987000104",
    "loja": "5791",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5732",
    "codigo": "5732",
    "cliente": "TEMPERO MINEIRO",
    "razaoSocial": "ALBERTO L. DE O. ANTONIO RESTAURANTE",
    "cnpj": "13474490000100",
    "loja": "5732",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5731",
    "codigo": "5731",
    "cliente": "THII SUSHI",
    "razaoSocial": "THIAGO GOUVEIA PIRES DE SOUZA",
    "cnpj": "34681900000163",
    "loja": "5731",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5632",
    "codigo": "5632",
    "cliente": "DELLIS ICECREAM E PIZZARIA GOUMERT",
    "razaoSocial": "MELISSA MARIA FERNANDES PEREIRA EIRELI",
    "cnpj": "35067827000105",
    "loja": "5632",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5575",
    "codigo": "5575",
    "cliente": "THE BASIC ONE",
    "razaoSocial": "THE BASIC ONE BURGUER & PIZZA LTDA",
    "cnpj": "56965861000169",
    "loja": "5575",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5551",
    "codigo": "5551",
    "cliente": "ALL BLACK BURGER",
    "razaoSocial": "ORLANDO MACHION NETO",
    "cnpj": "35012591000100",
    "loja": "5551",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5283",
    "codigo": "5283",
    "cliente": "BARDEGA DRINKS E DELIVERY",
    "razaoSocial": "VITOR ALVAREZ NICACIO 39976922892",
    "cnpj": "34306320000196",
    "loja": "5283",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5266",
    "codigo": "5266",
    "cliente": "SANTA FOME RESTAURANTE",
    "razaoSocial": "SAKURA LOUNGE BAR LTDA",
    "cnpj": "00495651000108",
    "loja": "5266",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5264",
    "codigo": "5264",
    "cliente": "C5 SPORTS BAR",
    "razaoSocial": "CICERO OTACILIO PEREIRA EIRELI",
    "cnpj": "34060641000153",
    "loja": "5264",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-5233",
    "codigo": "5233",
    "cliente": "CAFE COM PIZZA",
    "razaoSocial": "RESTAURANTE CAFE COM PIZZA DE SANTOS LTDA",
    "cnpj": "29044330000160",
    "loja": "5233",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4892",
    "codigo": "4892",
    "cliente": "CREPERIA DA PRAIA",
    "razaoSocial": "CREPERIA DA PRAIA LTDA - ME",
    "cnpj": "21409485000141",
    "loja": "4892",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4844",
    "codigo": "4844",
    "cliente": "LANCHES IRLEI",
    "razaoSocial": "IRLEI MARTINS DE SA - ME",
    "cnpj": "01225449000110",
    "loja": "4844",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4843",
    "codigo": "4843",
    "cliente": "ELECTICIA",
    "razaoSocial": "ELECTICIA COMERCIAL DE PRODUTOS NATURAIS LTDA",
    "cnpj": "20703748000168",
    "loja": "4843",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4824",
    "codigo": "4824",
    "cliente": "SUSHI HOME SANTOS",
    "razaoSocial": "SUSHI HOME SANTOS LTDA",
    "cnpj": "35003381000147",
    "loja": "4824",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4823",
    "codigo": "4823",
    "cliente": "CREPERIA DA PRAIA SUPER CENTRO",
    "razaoSocial": "CREPERIA DA PRAIA III LTDA",
    "cnpj": "32147697000114",
    "loja": "4823",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4821",
    "codigo": "4821",
    "cliente": "BAR DO NENE",
    "razaoSocial": "BRENGUERE & RODRIGUES - BAR E RESTAURANTE LTDA",
    "cnpj": "31994919000171",
    "loja": "4821",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4637",
    "codigo": "4637",
    "cliente": "SABORES DA PRAIA 2",
    "razaoSocial": "SUBSALAD LTDA - ME",
    "cnpj": "27389911000109",
    "loja": "4637",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4636",
    "codigo": "4636",
    "cliente": "SABORES DA PRAIA",
    "razaoSocial": "J STREY BERGAMO",
    "cnpj": "31086352000135",
    "loja": "4636",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4605",
    "codigo": "4605",
    "cliente": "LANCHES ZERO ZERO",
    "razaoSocial": "SUCOS E LANCHES ZERO ZERO LTDA - ME",
    "cnpj": "60010402000107",
    "loja": "4605",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4440",
    "codigo": "4440",
    "cliente": "BAR DO MANECO",
    "razaoSocial": "BAR, LANCHONETE DELFIM MOREIRA LTDA - ME",
    "cnpj": "10569298000109",
    "loja": "4440",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4437",
    "codigo": "4437",
    "cliente": "ELO DIVINO",
    "razaoSocial": "M.B. CANTINA, RESTAURANTE E LANCHONETE LTDA",
    "cnpj": "12031468000122",
    "loja": "4437",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4334",
    "codigo": "4334",
    "cliente": "ICEWAY3",
    "razaoSocial": "B&M3 LTDA - ME",
    "cnpj": "24578844000182",
    "loja": "4334",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4333",
    "codigo": "4333",
    "cliente": "ICEWAY2",
    "razaoSocial": "B&M2 LTDA - ME",
    "cnpj": "21815112000170",
    "loja": "4333",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4332",
    "codigo": "4332",
    "cliente": "ICEWAY1",
    "razaoSocial": "BERGAMO & MENNUCCI LTDA - ME",
    "cnpj": "19725440000134",
    "loja": "4332",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4282",
    "codigo": "4282",
    "cliente": "RESTAURANTE KANOA",
    "razaoSocial": "KANOA SANTISTA BAR E RESTAURANTE",
    "cnpj": "29693828000154",
    "loja": "4282",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-4266",
    "codigo": "4266",
    "cliente": "KAZUKI SUSHI",
    "razaoSocial": "DANIEL PANINI FLEICHACHER - ME",
    "cnpj": "11260761000107",
    "loja": "4266",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3894",
    "codigo": "3894",
    "cliente": "GARAGE BURGER",
    "razaoSocial": "D B DE ANDRADE - ME",
    "cnpj": "20163444000155",
    "loja": "3894",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3816",
    "codigo": "3816",
    "cliente": "LOUIZ RESTAURANTE E PIZZARIA",
    "razaoSocial": "J. A. B. RESTAURANTE LTDA - ME",
    "cnpj": "10922601000105",
    "loja": "3816",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3569",
    "codigo": "3569",
    "cliente": "ALOHA POKE BEER",
    "razaoSocial": "AGNELLO SANTOS SILVA RESTAURANTE - ME",
    "cnpj": "27058240000101",
    "loja": "3569",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3445",
    "codigo": "3445",
    "cliente": "RESTAURANTE A MINEIRINHA",
    "razaoSocial": "LANCHONETE E SORVETERIA A MINEIRINHA LTDA - ME",
    "cnpj": "68134790000131",
    "loja": "3445",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3441",
    "codigo": "3441",
    "cliente": "AO DOUTOR DAS TESOURAS GONZAGA",
    "razaoSocial": "VAZ COUSELO E CIA LTDA - ME",
    "cnpj": "00005734000163",
    "loja": "3441",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3439",
    "codigo": "3439",
    "cliente": "AO DOUTOR DAS TESOURAS",
    "razaoSocial": "RAMOS COUSELO E CIA LTDA -ME",
    "cnpj": "58167263000170",
    "loja": "3439",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3394",
    "codigo": "3394",
    "cliente": "MATILDE BAR",
    "razaoSocial": "MATILDE CHOPERIA E WHISKERIA LTDA - ME",
    "cnpj": "69056257000161",
    "loja": "3394",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3305",
    "codigo": "3305",
    "cliente": "ELO DIVINO",
    "razaoSocial": "ELO DIVINO RESTAURANTE E LANCHONETE LTDA - ME",
    "cnpj": "11261631000180",
    "loja": "3305",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3225",
    "codigo": "3225",
    "cliente": "CREPERIA DA PONTA DA PRAIA",
    "razaoSocial": "CREPERIA DA PRAIA -II- LTDA - ME",
    "cnpj": "26362654000159",
    "loja": "3225",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3169",
    "codigo": "3169",
    "cliente": "PREMIUM SANTOS",
    "razaoSocial": "PREMIUM SANTOS COMERCIO DE CHOCOLATES E PRESENTES LTDA - ME",
    "cnpj": "25063523000108",
    "loja": "3169",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3088",
    "codigo": "3088",
    "cliente": "PRIMEIRA ESTACAO PIZZARIA",
    "razaoSocial": "PRIMEIRA ESTACAO PIZZARIA E RESTAURANTE LTDA - ME",
    "cnpj": "09208328000172",
    "loja": "3088",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-3042",
    "codigo": "3042",
    "cliente": "PONTO MAUA",
    "razaoSocial": "BABARUSKA - EIRELI - ME",
    "cnpj": "25118653000109",
    "loja": "3042",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2894",
    "codigo": "2894",
    "cliente": "RESTAURANTE E PIZZARIA DON JUAN",
    "razaoSocial": "ROBERVAL DE SOUZA SILVA - ME",
    "cnpj": "24303096000125",
    "loja": "2894",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2876",
    "codigo": "2876",
    "cliente": "PADARIA VILA DE AROUCA",
    "razaoSocial": "PANIFICADORA VILA DE AROUCA LTDA - EPP",
    "cnpj": "04740042000110",
    "loja": "2876",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2823",
    "codigo": "2823",
    "cliente": "LANCHONETE PASSARELA",
    "razaoSocial": "SANTIS E PRADO LTDA - ME",
    "cnpj": "00380577000176",
    "loja": "2823",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2781",
    "codigo": "2781",
    "cliente": "CAFE DA DRI",
    "razaoSocial": "A A LORENCATO RODRIGUES - EIRELI - ME",
    "cnpj": "12465394000132",
    "loja": "2781",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2754",
    "codigo": "2754",
    "cliente": "DOGS HAMBURGUERIA",
    "razaoSocial": "DOGS HAMBURGUERIA LTDA-ME",
    "cnpj": "23171314000152",
    "loja": "2754",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2705",
    "codigo": "2705",
    "cliente": "INFINITA CALCADOS",
    "razaoSocial": "ALEXANDRE CESAR MENEZES DA SILVA - ME",
    "cnpj": "16778746000160",
    "loja": "2705",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2695",
    "codigo": "2695",
    "cliente": "DEI FRATELLI",
    "razaoSocial": "DEI FRATELLI PIZZARIA LTDA - ME",
    "cnpj": "18361983000157",
    "loja": "2695",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2689",
    "codigo": "2689",
    "cliente": "SABOR CASEIRO",
    "razaoSocial": "UNIVERSAL REFEICOES E LANCHES LTDA - ME",
    "cnpj": "97554352000120",
    "loja": "2689",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2682",
    "codigo": "2682",
    "cliente": "SABORES DA CARNE",
    "razaoSocial": "VASCS BAR E RESTAURANTE LTDA EPP",
    "cnpj": "23219808000160",
    "loja": "2682",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2656",
    "codigo": "2656",
    "cliente": "PRESENTE BOQUEIRAO",
    "razaoSocial": "ANTONIO AUGUSTO DE SOUSA FONSECA NETO - ME",
    "cnpj": "08852994000186",
    "loja": "2656",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2558",
    "codigo": "2558",
    "cliente": "TEKO DE PIZZA",
    "razaoSocial": "CATELAN E RIBEIRO LTDA - ME",
    "cnpj": "23410944000132",
    "loja": "2558",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2543",
    "codigo": "2543",
    "cliente": "PADARIA DO MEIO",
    "razaoSocial": "CICERO OTACILIO PEREIRA - ME",
    "cnpj": "22978867000159",
    "loja": "2543",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2542",
    "codigo": "2542",
    "cliente": "NOVA MUNDIAL",
    "razaoSocial": "NOVA MUNDIAL RESTAURANTE E LANCHONETE LTDA - EPP",
    "cnpj": "19383647000178",
    "loja": "2542",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2385",
    "codigo": "2385",
    "cliente": "REJANE COIFFEUR",
    "razaoSocial": "ALMEIDA E UEHARA SALÃO DE BELEZA LTDA - EPP",
    "cnpj": "22695643000130",
    "loja": "2385",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2377",
    "codigo": "2377",
    "cliente": "MANJERICAO RESTAURANTE",
    "razaoSocial": "MANJERICAO LANCHONETE LTDA - ME",
    "cnpj": "12664121000117",
    "loja": "2377",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2314",
    "codigo": "2314",
    "cliente": "BAR PRESIDENTE",
    "razaoSocial": "BAR E LANCHES PRESIDENTE DE SANTOS LTDA - ME",
    "cnpj": "17957756000126",
    "loja": "2314",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2281",
    "codigo": "2281",
    "cliente": "BAR E RESTAURANTE ALENAL",
    "razaoSocial": "CARLOS ROBERTO DA SILVA ARAUJO - ME",
    "cnpj": "15987745000163",
    "loja": "2281",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2258",
    "codigo": "2258",
    "cliente": "YOW INFINITY",
    "razaoSocial": "YOW INFINITY EIRELI - EPP",
    "cnpj": "22077972000117",
    "loja": "2258",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2233",
    "codigo": "2233",
    "cliente": "NOGRAW",
    "razaoSocial": "FUKUZONO E RAPOSO LTDA - ME",
    "cnpj": "21988888000192",
    "loja": "2233",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2075",
    "codigo": "2075",
    "cliente": "M A SUPLEMENTOS E MODAS",
    "razaoSocial": "SOUZA E SILVA LTDA",
    "cnpj": "21565224000110",
    "loja": "2075",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2049",
    "codigo": "2049",
    "cliente": "BELLA ROMA",
    "razaoSocial": "V.R.S. SABINO-DISK PIZZA - ME",
    "cnpj": "08853128000100",
    "loja": "2049",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-2040",
    "codigo": "2040",
    "cliente": "BAR MUSEU",
    "razaoSocial": "MARCUS VINICIUS GONÇALVES DE AMORIM RESTAURANTES EIRELI - ME",
    "cnpj": "20325727000156",
    "loja": "2040",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1968",
    "codigo": "1968",
    "cliente": "PASTELARIA CONTINENTAL",
    "razaoSocial": "PASTELARIA CONTINENTAL DE SAO VICENTE LTDA - EPP",
    "cnpj": "56668205000102",
    "loja": "1968",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1918",
    "codigo": "1918",
    "cliente": "SABOR BRASIL",
    "razaoSocial": "LANCHONETE SABOR BRASIL LTDA - ME",
    "cnpj": "14752796000143",
    "loja": "1918",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1915",
    "codigo": "1915",
    "cliente": "BALTAZAR PIZZARIA",
    "razaoSocial": "M.A.BALTAZAR MINHOTO PIZZARIA - ME",
    "cnpj": "21120862000128",
    "loja": "1915",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1831",
    "codigo": "1831",
    "cliente": "ESPETARIA",
    "razaoSocial": "VANESSA NETREBA FAUCON ME",
    "cnpj": "12105239000105",
    "loja": "1831",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1814",
    "codigo": "1814",
    "cliente": "BAR DO NETO",
    "razaoSocial": "MARQUES & ALVAREZ - BAR - LTDA - ME",
    "cnpj": "15522890000179",
    "loja": "1814",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1737",
    "codigo": "1737",
    "cliente": "FORNALHA",
    "razaoSocial": "RRB PIZZARIA E RESTAURANTE LTDA - ME",
    "cnpj": "04919264000102",
    "loja": "1737",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1571",
    "codigo": "1571",
    "cliente": "O FOGAO DE OURO",
    "razaoSocial": "MARCOS BRANDAO MIRA PIZZARIA-ME",
    "cnpj": "04160109000147",
    "loja": "1571",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1570",
    "codigo": "1570",
    "cliente": "BAR DO JORGE",
    "razaoSocial": "TRIBOS E TRIPS BAR E RESTAURANTE EIRELI",
    "cnpj": "35798498000164",
    "loja": "1570",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1500",
    "codigo": "1500",
    "cliente": "MARLIN PARADISE",
    "razaoSocial": "MARLIN BAR E FOOD LTDA - EPP",
    "cnpj": "06039755000186",
    "loja": "1500",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1476",
    "codigo": "1476",
    "cliente": "BAR DA VIRADA",
    "razaoSocial": "W J SANTOS LANCHES LTDA ME",
    "cnpj": "51079093000122",
    "loja": "1476",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1469",
    "codigo": "1469",
    "cliente": "PRATO RESTAURANTE",
    "razaoSocial": "PRATO COFFEE SHOP REFEICOES LTDA ME",
    "cnpj": "03354096000184",
    "loja": "1469",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  },
  {
    "id": "cli-1260",
    "codigo": "1260",
    "cliente": "RRSYSTEM AUTOMACAO COMERCIAL",
    "razaoSocial": "23.515.297 RAFAEL RUIZ DE OLIVEIRA",
    "cnpj": "23515297000123",
    "loja": "1260",
    "responsavel": "",
    "telefone": "",
    "email": "",
    "endereco": ""
  }
];

const form = document.getElementById('formOS');
const listaOS = document.getElementById('listaOS');
const busca = document.getElementById('busca');
const contadorOS = document.getElementById('contadorOS');
const clienteSelect = document.getElementById('clienteSelect');
const contadorClientes = document.getElementById('contadorClientes');
const moneyFields = ['valorServico', 'valorPecas', 'desconto'];
let ordens = [];
let clientes = [];
let selectedNumero = null;
let signaturePad = null;
let isDrawingSignature = false;
let hasSignatureStroke = false;

const exemplo = {
  numero: 'OS-' + new Date().getFullYear() + '-0001',
  data: new Date().toISOString().slice(0, 10),
  status: 'Aberta',
  cliente: '',
  loja: '',
  razaoSocial: '',
  cnpj: '',
  responsavel: '',
  telefone: '',
  email: '',
  endereco: '',
  servico: 'Suporte presencial',
  equipamento: '',
  descricao: '',
  tecnico: 'Alexander',
  diagnostico: '',
  solucao: '',
  observacoes: '',
  valorServico: '0,00',
  valorPecas: '0,00',
  desconto: '0,00',
  assinaturaCliente: '',
  assinaturaDataHora: '',
  aceiteCliente: ''
};

function moneyToNumber(value) {
  if (!value) return 0;
  return Number(String(value).replace(/\./g, '').replace(',', '.')) || 0;
}
function numberToMoney(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function getFormData() {
  const data = new FormData(form);
  const obj = {};
  for (const [key, value] of data.entries()) obj[key] = value;
  return obj;
}
function setFormData(os) {
  Object.entries({ ...exemplo, ...os }).forEach(([key, value]) => {
    const field = document.getElementById(key);
    if (field) field.value = value ?? '';
  });
  const aceite = document.getElementById('aceiteCliente');
  if (aceite) aceite.checked = os.aceiteCliente === 'sim';
  selectedNumero = os.numero || null;
  loadSignatureToCanvas(os.assinaturaCliente || '', os.assinaturaDataHora || '');
  updateTotals();
  renderList();
}
function saveLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ordens));
}
function saveClientsLocal() {
  localStorage.setItem(CLIENTS_KEY, JSON.stringify(clientes));
}
function normalizeCnpj(value) { return String(value || '').replace(/\D/g, ''); }
function clienteKey(c) {
  const cnpj = normalizeCnpj(c.cnpj);
  if (cnpj) return 'cnpj:' + cnpj;
  if (c.codigo || c.loja) return 'codigo:' + String(c.codigo || c.loja).trim().toLowerCase();
  return 'nome:' + String(c.cliente || '').trim().toLowerCase();
}
function mergeClients(base, extra) {
  const map = new Map();
  [...base, ...extra].forEach(c => {
    if (!c || !c.cliente) return;
    const normalized = {
      id: c.id || ('cliente-' + Date.now() + '-' + Math.random().toString(16).slice(2)),
      codigo: String(c.codigo || c.loja || '').trim(),
      cliente: String(c.cliente || '').trim(),
      razaoSocial: String(c.razaoSocial || '').trim(),
      cnpj: String(c.cnpj || '').trim(),
      loja: String(c.loja || c.codigo || '').trim(),
      responsavel: String(c.responsavel || '').trim(),
      telefone: String(c.telefone || '').trim(),
      email: String(c.email || '').trim(),
      endereco: String(c.endereco || '').trim()
    };
    const key = clienteKey(normalized);
    map.set(key, { ...(map.get(key) || {}), ...normalized });
  });
  return [...map.values()].sort((a,b) => String(a.cliente).localeCompare(String(b.cliente), 'pt-BR'));
}
function loadClientsLocal() {
  try {
    const raw = localStorage.getItem(CLIENTS_KEY);
    const existing = raw ? JSON.parse(raw) : [];
    clientes = mergeClients(CLIENTES_INICIAIS, existing);
  } catch (e) {
    clientes = mergeClients(CLIENTES_INICIAIS, []);
  }
  saveClientsLocal();
}
function getClientFormData() {
  return {
    id: 'cliente-' + Date.now(),
    codigo: document.getElementById('cadCodigo').value.trim(),
    cliente: document.getElementById('cadCliente').value.trim(),
    razaoSocial: document.getElementById('cadRazaoSocial').value.trim(),
    cnpj: document.getElementById('cadCnpj').value.trim(),
    loja: document.getElementById('cadCodigo').value.trim(),
    responsavel: document.getElementById('cadResponsavel').value.trim(),
    telefone: document.getElementById('cadTelefone').value.trim(),
    email: document.getElementById('cadEmail').value.trim(),
    endereco: document.getElementById('cadEndereco').value.trim()
  };
}
function fillClientRegister(c) {
  document.getElementById('cadCodigo').value = c.codigo || c.loja || '';
  document.getElementById('cadCliente').value = c.cliente || '';
  document.getElementById('cadRazaoSocial').value = c.razaoSocial || '';
  document.getElementById('cadCnpj').value = c.cnpj || '';
  document.getElementById('cadResponsavel').value = c.responsavel || '';
  document.getElementById('cadTelefone').value = c.telefone || '';
  document.getElementById('cadEmail').value = c.email || '';
  document.getElementById('cadEndereco').value = c.endereco || '';
}
function clearClientRegister() { fillClientRegister({}); }
function upsertClient(c) {
  if (!c.cliente) return false;
  clientes = mergeClients(clientes, [c]);
  saveClientsLocal();
  renderClients();
  return true;
}
function renderClients() {
  contadorClientes.textContent = clientes.length;
  const current = clienteSelect.value;
  clienteSelect.innerHTML = '<option value="">Selecionar cliente...</option>' + clientes.map(c => {
    const code = c.codigo || c.loja;
    const label = `${c.cliente || 'Sem nome'}${code ? ' - ' + code : ''}${c.cnpj ? ' - CNPJ ' + c.cnpj : ''}`;
    return `<option value="${escapeHtml(c.id)}">${escapeHtml(label)}</option>`;
  }).join('');
  if ([...clienteSelect.options].some(o => o.value === current)) clienteSelect.value = current;
}
function applyClientToOS() {
  const c = clientes.find(item => item.id === clienteSelect.value);
  if (!c) { alert('Selecione um cliente cadastrado.'); return; }
  const map = { cliente: c.cliente, loja: c.codigo || c.loja, razaoSocial: c.razaoSocial, cnpj: c.cnpj, responsavel: c.responsavel, telefone: c.telefone, email: c.email, endereco: c.endereco };
  Object.entries(map).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (field) field.value = value || '';
  });
}
function saveClientFromOS() {
  const os = getFormData();
  const ok = upsertClient({
    id: 'cliente-' + Date.now(),
    codigo: os.loja.trim(),
    cliente: os.cliente.trim(),
    loja: os.loja.trim(),
    razaoSocial: (os.razaoSocial || '').trim(),
    cnpj: (os.cnpj || '').trim(),
    responsavel: os.responsavel.trim(),
    telefone: os.telefone.trim(),
    email: os.email.trim(),
    endereco: os.endereco.trim()
  });
  if (!ok) { alert('Informe o nome do cliente na OS antes de salvar no cadastro.'); return; }
  alert('Cliente salvo no cadastro.');
}
function registerClient() {
  const c = getClientFormData();
  if (!c.cliente) { alert('Informe o nome do cliente/empresa.'); document.getElementById('cadCliente').focus(); return; }
  upsertClient(c);
  clearClientRegister();
  alert('Cliente cadastrado com sucesso.');
}
function deleteClient() {
  const id = clienteSelect.value;
  if (!id) { alert('Selecione um cliente para excluir.'); return; }
  const c = clientes.find(item => item.id === id);
  if (!confirm(`Deseja excluir o cliente ${c?.cliente || ''}?`)) return;
  clientes = clientes.filter(item => item.id !== id);
  saveClientsLocal();
  renderClients();
}
function importClients() {
  const raw = document.getElementById('importClientes').value.trim();
  if (!raw) { alert('Cole a lista de clientes antes de importar.'); return; }
  let total = 0;
  raw.split(/\n+/).forEach(line => {
    const sep = line.includes('	') ? '	' : ';';
    const cols = line.split(sep).map(v => v.trim());
    if (!cols[0]) return;
    // Código; Nome; Razão Social; CNPJ; Responsável; Telefone; E-mail; Endereço
    const ok = upsertClient({
      id: 'cliente-' + Date.now() + '-' + total,
      codigo: cols[0] || '',
      loja: cols[0] || '',
      cliente: cols[1] || cols[0] || '',
      razaoSocial: cols[2] || '',
      cnpj: cols[3] || '',
      responsavel: cols[4] || '',
      telefone: cols[5] || '',
      email: cols[6] || '',
      endereco: cols[7] || ''
    });
    if (ok) total++;
  });
  document.getElementById('importClientes').value = '';
  alert(`${total} cliente(s) importado(s)/atualizado(s).`);
}

function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    ordens = raw ? JSON.parse(raw) : [];
  } catch (e) { ordens = []; }
}
function nextOSNumber() {
  const year = new Date().getFullYear();
  const sameYear = ordens.map(o => String(o.numero || '')).filter(n => n.includes(`OS-${year}-`)).map(n => Number(n.split('-').pop())).filter(Boolean);
  const next = sameYear.length ? Math.max(...sameYear) + 1 : 1;
  return `OS-${year}-${String(next).padStart(4, '0')}`;
}
function newOS() {
  setFormData({ ...exemplo, numero: nextOSNumber(), data: new Date().toISOString().slice(0, 10), tecnico: 'Alexander' });
  selectedNumero = null;
  renderList();
}
function saveOS() {
  syncSignatureFields();
  const os = getFormData();
  os.aceiteCliente = document.getElementById('aceiteCliente')?.checked ? 'sim' : '';
  if (!os.cliente.trim()) { alert('Informe o cliente antes de salvar a ordem de serviço.'); document.getElementById('cliente').focus(); return; }
  const idx = ordens.findIndex(item => item.numero === (selectedNumero || os.numero));
  if (idx >= 0) ordens[idx] = os; else ordens.push(os);
  selectedNumero = os.numero;
  saveLocal(); renderList(); alert('Ordem de serviço salva com sucesso.');
}
function deleteOS() {
  if (!selectedNumero) { alert('Selecione uma ordem de serviço para excluir.'); return; }
  if (!confirm('Deseja excluir esta ordem de serviço?')) return;
  ordens = ordens.filter(os => os.numero !== selectedNumero);
  saveLocal(); newOS();
}
function statusClass(status) {
  const s = String(status || '').toLowerCase();
  if (s.includes('andamento')) return 'andamento';
  if (s.includes('aguardando')) return 'aguardando';
  if (s.includes('concl')) return 'concluida';
  if (s.includes('cancel')) return 'cancelada';
  return 'aberta';
}
function renderList() {
  const term = busca.value.trim().toLowerCase();
  const filtered = ordens.filter(os => [os.numero, os.cliente, os.loja, os.cnpj, os.status, os.servico, os.telefone, os.tecnico].join(' ').toLowerCase().includes(term));
  contadorOS.textContent = filtered.length;
  listaOS.innerHTML = filtered.map(os => `
    <button class="os-item ${os.numero === selectedNumero ? 'active' : ''}" data-numero="${escapeHtml(os.numero)}">
      <div class="os-item__top">
        <div><strong>${escapeHtml(os.numero || '')}</strong><small>${escapeHtml(os.cliente || 'Sem cliente')}</small>${os.loja ? `<br><small>Código/Loja ${escapeHtml(os.loja)}</small>` : ''}</div>
        <span class="badge ${statusClass(os.status)}">${escapeHtml(os.status || 'Aberta')}</span>
      </div>
      <p>${escapeHtml(os.descricao || 'Sem descrição informada.')}</p>
    </button>
  `).join('');
  document.querySelectorAll('.os-item').forEach(btn => btn.addEventListener('click', () => {
    const os = ordens.find(item => item.numero === btn.dataset.numero);
    if (os) setFormData(os);
  }));
}
function updateTotals() {
  const subtotal = moneyToNumber(document.getElementById('valorServico').value) + moneyToNumber(document.getElementById('valorPecas').value);
  const total = Math.max(0, subtotal - moneyToNumber(document.getElementById('desconto').value));
  document.getElementById('subtotal').textContent = `R$ ${numberToMoney(subtotal)}`;
  document.getElementById('total').textContent = `R$ ${numberToMoney(total)}`;
}
function formatMoneyField(e) {
  const field = e.target;
  let value = field.value.replace(/[^\d]/g, '');
  if (!value) value = '0';
  field.value = numberToMoney(Number(value) / 100);
  updateTotals();
}
function escapeHtml(value) {
  return String(value || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function setupSignaturePad() {
  const canvas = document.getElementById('assinaturaCanvas');
  if (!canvas) return;
  signaturePad = canvas;
  resizeSignatureCanvas(false);
  window.addEventListener('resize', () => resizeSignatureCanvas(true));

  function getPoint(event) {
    const rect = canvas.getBoundingClientRect();
    const source = event.touches ? event.touches[0] : event;
    return {
      x: (source.clientX - rect.left) * (canvas.width / rect.width),
      y: (source.clientY - rect.top) * (canvas.height / rect.height)
    };
  }
  function start(event) {
    event.preventDefault();
    isDrawingSignature = true;
    hasSignatureStroke = true;
    canvas.parentElement.classList.add('has-signature');
    const ctx = canvas.getContext('2d');
    const p = getPoint(event);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }
  function move(event) {
    if (!isDrawingSignature) return;
    event.preventDefault();
    const ctx = canvas.getContext('2d');
    const p = getPoint(event);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  }
  function end(event) {
    if (!isDrawingSignature) return;
    event.preventDefault();
    isDrawingSignature = false;
  }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  window.addEventListener('mouseup', end);
  canvas.addEventListener('touchstart', start, { passive: false });
  canvas.addEventListener('touchmove', move, { passive: false });
  canvas.addEventListener('touchend', end, { passive: false });
}
function resizeSignatureCanvas(keepImage) {
  const canvas = document.getElementById('assinaturaCanvas');
  if (!canvas) return;
  const previous = keepImage && hasSignatureStroke ? canvas.toDataURL('image/png') : '';
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(600, Math.floor(rect.width * ratio));
  canvas.height = Math.max(160, Math.floor(rect.height * ratio));
  const ctx = canvas.getContext('2d');
  ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = Math.max(2.2 * ratio, 2);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (previous) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.src = previous;
  }
}
function clearSignature() {
  const canvas = document.getElementById('assinaturaCanvas');
  if (!canvas) return;
  hasSignatureStroke = false;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  canvas.parentElement.classList.remove('has-signature');
  document.getElementById('assinaturaCliente').value = '';
  document.getElementById('assinaturaDataHora').value = '';
  updateSignaturePreview('', '');
}
function confirmSignature() {
  const canvas = document.getElementById('assinaturaCanvas');
  if (!canvas || !hasSignatureStroke) { alert('Peça para o cliente assinar no quadro antes de confirmar.'); return; }
  const dataUrl = canvas.toDataURL('image/png');
  const stamp = new Date().toLocaleString('pt-BR');
  document.getElementById('assinaturaCliente').value = dataUrl;
  document.getElementById('assinaturaDataHora').value = stamp;
  document.getElementById('aceiteCliente').checked = true;
  updateSignaturePreview(dataUrl, stamp);
  alert('Assinatura digital confirmada. Agora salve a OS.' );
}
function syncSignatureFields() {
  const hidden = document.getElementById('assinaturaCliente');
  const canvas = document.getElementById('assinaturaCanvas');
  if (canvas && hasSignatureStroke && hidden && !hidden.value) {
    hidden.value = canvas.toDataURL('image/png');
    document.getElementById('assinaturaDataHora').value = new Date().toLocaleString('pt-BR');
  }
}
function updateSignaturePreview(dataUrl, stamp) {
  const img = document.getElementById('assinaturaPreviewPrint');
  const info = document.getElementById('assinaturaInfoPrint');
  const status = document.getElementById('assinaturaStatus');
  if (img) {
    if (dataUrl) {
      img.src = dataUrl;
      img.classList.add('has-signature');
    } else {
      img.removeAttribute('src');
      img.classList.remove('has-signature');
    }
  }
  if (info) info.textContent = dataUrl ? `Assinado digitalmente em ${stamp}` : 'Nome e assinatura';
  if (status) status.textContent = dataUrl ? `Assinatura confirmada em ${stamp}.` : 'Nenhuma assinatura confirmada.';
}
function loadSignatureToCanvas(dataUrl, stamp) {
  const canvas = document.getElementById('assinaturaCanvas');
  if (!canvas) return;
  clearSignature();
  if (!dataUrl) return;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    hasSignatureStroke = true;
    canvas.parentElement.classList.add('has-signature');
    document.getElementById('assinaturaCliente').value = dataUrl;
    document.getElementById('assinaturaDataHora').value = stamp || '';
    updateSignaturePreview(dataUrl, stamp || '');
  };
  img.src = dataUrl;
}


function safeFileName(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'ordem-de-servico';
}

function createPrintablePdfClone() {
  const source = document.getElementById('formOS');
  const wrapper = document.createElement('div');
  wrapper.className = 'pdf-capture-wrapper';
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-99999px';
  wrapper.style.top = '0';
  wrapper.style.width = '210mm';
  wrapper.style.height = 'auto';
  wrapper.style.opacity = '1';
  wrapper.style.pointerEvents = 'none';
  wrapper.style.zIndex = '-1';

  const clone = source.cloneNode(true);
  clone.id = 'formOSPdfClone';
  clone.classList.add('pdf-capture');

  const sourceFields = source.querySelectorAll('input, select, textarea');
  const cloneFields = clone.querySelectorAll('input, select, textarea');
  sourceFields.forEach((field, index) => {
    const target = cloneFields[index];
    if (!target) return;
    if (field.type === 'checkbox' || field.type === 'radio') {
      target.checked = field.checked;
    } else {
      target.value = field.value;
    }
  });

  const assinatura = document.getElementById('assinaturaCliente')?.value || '';
  const dataHora = document.getElementById('assinaturaDataHora')?.value || '';
  const preview = clone.querySelector('#assinaturaPreviewPrint');
  const info = clone.querySelector('#assinaturaInfoPrint');
  if (preview) {
    if (assinatura) {
      preview.src = assinatura;
      preview.classList.add('has-signature');
    } else {
      preview.removeAttribute('src');
      preview.classList.remove('has-signature');
    }
  }
  if (info) info.textContent = assinatura ? `Assinado digitalmente em ${dataHora}` : 'Nome e assinatura';

  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);
  return { wrapper, clone };
}

function waitForCloneAssets(clone) {
  const images = Array.from(clone.querySelectorAll('img'));
  const imagePromises = images.map(img => {
    if (img.complete && img.naturalWidth !== 0) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  });
  return Promise.all(imagePromises).then(() => new Promise(resolve => setTimeout(resolve, 250)));
}

async function generateOSPdfBlob() {
  syncSignatureFields();
  const assinatura = document.getElementById('assinaturaCliente')?.value || '';
  const dataHora = document.getElementById('assinaturaDataHora')?.value || '';
  updateSignaturePreview(assinatura, dataHora);

  if (!window.html2canvas || !window.jspdf) {
    throw new Error('Bibliotecas de PDF não carregadas. Verifique sua conexão com a internet e tente novamente.');
  }

  const { wrapper, clone } = createPrintablePdfClone();
  await waitForCloneAssets(clone);

  try {
    const canvas = await html2canvas(clone, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
      windowWidth: clone.scrollWidth,
      windowHeight: clone.scrollHeight
    });

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    const pageWidth = 210;
    const pageHeight = 297;
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
    return pdf.output('blob');
  } finally {
    wrapper.remove();
  }
}

async function sendOSPdfWhatsApp() {
  try {
    saveOS();
    const blob = await generateOSPdfBlob();
    const numero = document.getElementById('numero')?.value || 'OS';
    const cliente = document.getElementById('cliente')?.value || 'cliente';
    const fileName = `${safeFileName(numero)}-${safeFileName(cliente)}.pdf`;
    const texto = `Segue a ordem de serviço ${numero} em PDF.`;

    // Evita a janela nativa de compartilhamento do Windows/Chrome que estava gerando erro.
    // Em qualquer aparelho, o fluxo fica previsível: baixa o PDF idêntico ao impresso e abre o WhatsApp com a mensagem pronta.
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);

    const msg = `${texto}

O PDF foi baixado no seu dispositivo. Anexe o arquivo ${fileName} nesta conversa do WhatsApp.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    setTimeout(() => window.open(whatsappUrl, '_blank'), 450);
  } catch (error) {
    alert(error.message || 'Não foi possível gerar o PDF para envio.');
  }
}

['btnNova'].forEach(id => document.getElementById(id).addEventListener('click', newOS));
['btnSalvar', 'btnSalvar2'].forEach(id => document.getElementById(id).addEventListener('click', saveOS));
['btnImprimir', 'btnImprimir2'].forEach(id => document.getElementById(id).addEventListener('click', () => {
  syncSignatureFields();
  const assinatura = document.getElementById('assinaturaCliente')?.value || '';
  const dataHora = document.getElementById('assinaturaDataHora')?.value || '';
  updateSignaturePreview(assinatura, dataHora);
  setTimeout(() => window.print(), 120);
}));
['btnWhatsappPdf', 'btnWhatsappPdf2'].forEach(id => document.getElementById(id)?.addEventListener('click', sendOSPdfWhatsApp));
document.getElementById('btnExcluir').addEventListener('click', deleteOS);
document.getElementById('btnAplicarCliente').addEventListener('click', applyClientToOS);
document.getElementById('btnSalvarCliente').addEventListener('click', saveClientFromOS);
document.getElementById('btnCadastrarCliente').addEventListener('click', registerClient);
document.getElementById('btnExcluirCliente').addEventListener('click', deleteClient);
document.getElementById('btnImportarClientes').addEventListener('click', importClients);
clienteSelect.addEventListener('change', () => { const c = clientes.find(item => item.id === clienteSelect.value); if (c) fillClientRegister(c); });
busca.addEventListener('input', renderList);
moneyFields.forEach(id => {
  const field = document.getElementById(id);
  field.addEventListener('blur', formatMoneyField);
  field.addEventListener('input', updateTotals);
});
form.addEventListener('input', updateTotals);
document.getElementById('btnLimparAssinatura')?.addEventListener('click', clearSignature);
document.getElementById('btnConfirmarAssinatura')?.addEventListener('click', confirmSignature);
const labels = ['Serviço', 'Problema relatado', 'Técnico'];
document.querySelectorAll('.service-table .td').forEach((td, idx) => td.setAttribute('data-label', labels[idx]));

setupSignaturePad();
loadLocal();
loadClientsLocal();
renderClients();
if (ordens.length) setFormData(ordens[0]); else newOS();
renderList();

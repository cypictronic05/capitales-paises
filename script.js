const countries = [
  {
    "country": "Afganistán",
    "capital": "Kabul",
    "flag": "https://flagcdn.com/af.svg"
  },
  {
    "country": "Albania",
    "capital": "Tirana",
    "flag": "https://flagcdn.com/al.svg"
  },
  {
    "country": "Alemania",
    "capital": "Berlín",
    "flag": "https://flagcdn.com/de.svg"
  },
  {
    "country": "Andorra",
    "capital": "Andorra la Vieja",
    "flag": "https://flagcdn.com/ad.svg"
  },
  {
    "country": "Angola",
    "capital": "Luanda",
    "flag": "https://flagcdn.com/ao.svg"
  },
  {
    "country": "Antigua y Barbuda",
    "capital": "Saint John’s",
    "flag": "https://flagcdn.com/ag.svg"
  },
  {
    "country": "Arabia Saudita",
    "capital": "Riad",
    "flag": "https://flagcdn.com/sa.svg"
  },
  {
    "country": "Argelia",
    "capital": "Argel",
    "flag": "https://flagcdn.com/dz.svg"
  },
  {
    "country": "Argentina",
    "capital": "Buenos Aires",
    "flag": "https://flagcdn.com/ar.svg"
  },
  {
    "country": "Armenia",
    "capital": "Ereván",
    "flag": "https://flagcdn.com/am.svg"
  },
  {
    "country": "Australia",
    "capital": "Canberra",
    "flag": "https://flagcdn.com/au.svg"
  },
  {
    "country": "Austria",
    "capital": "Viena",
    "flag": "https://flagcdn.com/at.svg"
  },
  {
    "country": "Azerbaiyán",
    "capital": "Bakú",
    "flag": "https://flagcdn.com/az.svg"
  },
  {
    "country": "Bahamas",
    "capital": "Nasáu",
    "flag": "https://flagcdn.com/bs.svg"
  },
  {
    "country": "Bangladés",
    "capital": "Daca",
    "flag": "https://flagcdn.com/bd.svg"
  },
  {
    "country": "Barbados",
    "capital": "Bridgetown",
    "flag": "https://flagcdn.com/bb.svg"
  },
  {
    "country": "Baréin",
    "capital": "Manama",
    "flag": "https://flagcdn.com/bh.svg"
  },
  {
    "country": "Bélgica",
    "capital": "Bruselas",
    "flag": "https://flagcdn.com/be.svg"
  },
  {
    "country": "Belice",
    "capital": "Belmopán",
    "flag": "https://flagcdn.com/bz.svg"
  },
  {
    "country": "Benín",
    "capital": "Porto-Novo",
    "flag": "https://flagcdn.com/bj.svg"
  },
  {
    "country": "Bielorrusia",
    "capital": "Minsk",
    "flag": "https://flagcdn.com/by.svg"
  },
  {
    "country": "Bolivia",
    "capital": "Sucre/La Paz",
    "flag": "https://flagcdn.com/bo.svg"
  },
  {
    "country": "Bosnia y Herzegovina",
    "capital": "Sarajevo",
    "flag": "https://flagcdn.com/ba.svg"
  },
  {
    "country": "Botsuana",
    "capital": "Gaborone",
    "flag": "https://flagcdn.com/bw.svg"
  },
  {
    "country": "Brasil",
    "capital": "Brasilia",
    "flag": "https://flagcdn.com/br.svg"
  },
  {
    "country": "Brunéi",
    "capital": "Bandar Seri Begawan",
    "flag": "https://flagcdn.com/bn.svg"
  },
  {
    "country": "Bulgaria",
    "capital": "Sofía",
    "flag": "https://flagcdn.com/bg.svg"
  },
  {
    "country": "Burkina Faso",
    "capital": "Uagadugú",
    "flag": "https://flagcdn.com/bf.svg"
  },
  {
    "country": "Burundi",
    "capital": "Gitega",
    "flag": "https://flagcdn.com/bi.svg"
  },
  {
    "country": "Bután",
    "capital": "Timbu",
    "flag": "https://flagcdn.com/bt.svg"
  },
  {
    "country": "Cabo Verde",
    "capital": "Praia",
    "flag": "https://flagcdn.com/cv.svg"
  },
  {
    "country": "Camboya",
    "capital": "Nom Pen",
    "flag": "https://flagcdn.com/kh.svg"
  },
  {
    "country": "Camerún",
    "capital": "Yaundé",
    "flag": "https://flagcdn.com/cm.svg"
  },
  {
    "country": "Canadá",
    "capital": "Ottawa",
    "flag": "https://flagcdn.com/ca.svg"
  },
  {
    "country": "Catar",
    "capital": "Doha",
    "flag": "https://flagcdn.com/qa.svg"
  },
  {
    "country": "Chad",
    "capital": "Yamena",
    "flag": "https://flagcdn.com/td.svg"
  },
  {
    "country": "Chile",
    "capital": "Santiago",
    "flag": "https://flagcdn.com/cl.svg"
  },
  {
    "country": "China",
    "capital": "Pekín",
    "flag": "https://flagcdn.com/cn.svg"
  },
  {
    "country": "Chipre",
    "capital": "Nicosia",
    "flag": "https://flagcdn.com/cy.svg"
  },
  {
    "country": "Colombia",
    "capital": "Bogotá",
    "flag": "https://flagcdn.com/co.svg"
  },
  {
    "country": "Comoras",
    "capital": "Moroni",
    "flag": "https://flagcdn.com/km.svg"
  },
  {
    "country": "Congo",
    "capital": "Brazzaville",
    "flag": "https://flagcdn.com/cg.svg"
  },
  {
    "country": "Corea del Norte",
    "capital": "Pionyang",
    "flag": "https://flagcdn.com/kp.svg"
  },
  {
    "country": "Corea del Sur",
    "capital": "Seúl",
    "flag": "https://flagcdn.com/kr.svg"
  },
  {
    "country": "Costa Rica",
    "capital": "San José",
    "flag": "https://flagcdn.com/cr.svg"
  },
  {
    "country": "Costa de Marfil",
    "capital": "Yamusukro",
    "flag": "https://flagcdn.com/ci.svg"
  },
  {
    "country": "Croacia",
    "capital": "Zagreb",
    "flag": "https://flagcdn.com/hr.svg"
  },
  {
    "country": "Cuba",
    "capital": "La Habana",
    "flag": "https://flagcdn.com/cu.svg"
  },
  {
    "country": "Dinamarca",
    "capital": "Copenhague",
    "flag": "https://flagcdn.com/dk.svg"
  },
  {
    "country": "Dominica",
    "capital": "Roseau",
    "flag": "https://flagcdn.com/dm.svg"
  },
  {
    "country": "Ecuador",
    "capital": "Quito",
    "flag": "https://flagcdn.com/ec.svg"
  },
  {
    "country": "Egipto",
    "capital": "El Cairo",
    "flag": "https://flagcdn.com/eg.svg"
  },
  {
    "country": "El Salvador",
    "capital": "San Salvador",
    "flag": "https://flagcdn.com/sv.svg"
  },
  {
    "country": "Emiratos Árabes Unidos",
    "capital": "Abu Dabi",
    "flag": "https://flagcdn.com/ae.svg"
  },
  {
    "country": "Eritrea",
    "capital": "Asmara",
    "flag": "https://flagcdn.com/er.svg"
  },
  {
    "country": "Eslovaquia",
    "capital": "Bratislava",
    "flag": "https://flagcdn.com/sk.svg"
  },
  {
    "country": "Eslovenia",
    "capital": "Liubliana",
    "flag": "https://flagcdn.com/si.svg"
  },
  {
    "country": "España",
    "capital": "Madrid",
    "flag": "https://flagcdn.com/es.svg"
  },
  {
    "country": "Estados Unidos",
    "capital": "Washington D. C.",
    "flag": "https://flagcdn.com/us.svg"
  },
  {
    "country": "Estonia",
    "capital": "Tallin",
    "flag": "https://flagcdn.com/ee.svg"
  },
  {
    "country": "Esuatini",
    "capital": "Mbabane",
    "flag": "https://flagcdn.com/sz.svg"
  },
  {
    "country": "Etiopía",
    "capital": "Adís Abeba",
    "flag": "https://flagcdn.com/et.svg"
  },
  {
    "country": "Fiyi",
    "capital": "Suva",
    "flag": "https://flagcdn.com/fj.svg"
  },
  {
    "country": "Filipinas",
    "capital": "Manila",
    "flag": "https://flagcdn.com/ph.svg"
  },
  {
    "country": "Finlandia",
    "capital": "Helsinki",
    "flag": "https://flagcdn.com/fi.svg"
  },
  {
    "country": "Francia",
    "capital": "París",
    "flag": "https://flagcdn.com/fr.svg"
  },
  {
    "country": "Gabón",
    "capital": "Libreville",
    "flag": "https://flagcdn.com/ga.svg"
  },
  {
    "country": "Gambia",
    "capital": "Banjul",
    "flag": "https://flagcdn.com/gm.svg"
  },
  {
    "country": "Georgia",
    "capital": "Tiflis",
    "flag": "https://flagcdn.com/ge.svg"
  },
  {
    "country": "Ghana",
    "capital": "Acra",
    "flag": "https://flagcdn.com/gh.svg"
  },
  {
    "country": "Granada",
    "capital": "Saint George’s",
    "flag": "https://flagcdn.com/gd.svg"
  },
  {
    "country": "Grecia",
    "capital": "Atenas",
    "flag": "https://flagcdn.com/gr.svg"
  },
  {
    "country": "Guatemala",
    "capital": "Ciudad de Guatemala",
    "flag": "https://flagcdn.com/gt.svg"
  },
  {
    "country": "Guinea",
    "capital": "Conakri",
    "flag": "https://flagcdn.com/gn.svg"
  },
  {
    "country": "Guinea Ecuatorial",
    "capital": "Malabo",
    "flag": "https://flagcdn.com/gq.svg"
  },
  {
    "country": "Guinea-Bisáu",
    "capital": "Bisáu",
    "flag": "https://flagcdn.com/gw.svg"
  },
  {
    "country": "Guyana",
    "capital": "Georgetown",
    "flag": "https://flagcdn.com/gy.svg"
  },
  {
    "country": "Haití",
    "capital": "Puerto Príncipe",
    "flag": "https://flagcdn.com/ht.svg"
  },
  {
    "country": "Honduras",
    "capital": "Tegucigalpa",
    "flag": "https://flagcdn.com/hn.svg"
  },
  {
    "country": "Hungría",
    "capital": "Budapest",
    "flag": "https://flagcdn.com/hu.svg"
  },
  {
    "country": "India",
    "capital": "Nueva Delhi",
    "flag": "https://flagcdn.com/in.svg"
  },
  {
    "country": "Indonesia",
    "capital": "Yakarta",
    "flag": "https://flagcdn.com/id.svg"
  },
  {
    "country": "Irak",
    "capital": "Bagdad",
    "flag": "https://flagcdn.com/iq.svg"
  },
  {
    "country": "Irán",
    "capital": "Teherán",
    "flag": "https://flagcdn.com/ir.svg"
  },
  {
    "country": "Irlanda",
    "capital": "Dublín",
    "flag": "https://flagcdn.com/ie.svg"
  },
  {
    "country": "Islandia",
    "capital": "Reikiavik",
    "flag": "https://flagcdn.com/is.svg"
  },
  {
    "country": "Islas Marshall",
    "capital": "Majuro",
    "flag": "https://flagcdn.com/mh.svg"
  },
  {
    "country": "Islas Salomón",
    "capital": "Honiara",
    "flag": "https://flagcdn.com/sb.svg"
  },
  {
    "country": "Israel",
    "capital": "Jerusalén",
    "flag": "https://flagcdn.com/il.svg"
  },
  {
    "country": "Italia",
    "capital": "Roma",
    "flag": "https://flagcdn.com/it.svg"
  },
  {
    "country": "Jamaica",
    "capital": "Kingston",
    "flag": "https://flagcdn.com/jm.svg"
  },
  {
    "country": "Japón",
    "capital": "Tokio",
    "flag": "https://flagcdn.com/jp.svg"
  },
  {
    "country": "Jordania",
    "capital": "Amán",
    "flag": "https://flagcdn.com/jo.svg"
  },
  {
    "country": "Kazajistán",
    "capital": "Astaná",
    "flag": "https://flagcdn.com/kz.svg"
  },
  {
    "country": "Kenia",
    "capital": "Nairobi",
    "flag": "https://flagcdn.com/ke.svg"
  },
  {
    "country": "Kirguistán",
    "capital": "Biskek",
    "flag": "https://flagcdn.com/kg.svg"
  },
  {
    "country": "Kiribati",
    "capital": "Tarawa Sur",
    "flag": "https://flagcdn.com/ki.svg"
  },
  {
    "country": "Kuwait",
    "capital": "Kuwait",
    "flag": "https://flagcdn.com/kw.svg"
  },
  {
    "country": "Laos",
    "capital": "Vientián",
    "flag": "https://flagcdn.com/la.svg"
  },
  {
    "country": "Lesoto",
    "capital": "Maseru",
    "flag": "https://flagcdn.com/ls.svg"
  },
  {
    "country": "Letonia",
    "capital": "Riga",
    "flag": "https://flagcdn.com/lv.svg"
  },
  {
    "country": "Líbano",
    "capital": "Beirut",
    "flag": "https://flagcdn.com/lb.svg"
  },
  {
    "country": "Liberia",
    "capital": "Monrovia",
    "flag": "https://flagcdn.com/lr.svg"
  },
  {
    "country": "Libia",
    "capital": "Trípoli",
    "flag": "https://flagcdn.com/ly.svg"
  },
  {
    "country": "Liechtenstein",
    "capital": "Vaduz",
    "flag": "https://flagcdn.com/li.svg"
  },
  {
    "country": "Lituania",
    "capital": "Vilna",
    "flag": "https://flagcdn.com/lt.svg"
  },
  {
    "country": "Luxemburgo",
    "capital": "Luxemburgo",
    "flag": "https://flagcdn.com/lu.svg"
  },
  {
    "country": "Macedonia del Norte",
    "capital": "Skopie",
    "flag": "https://flagcdn.com/mk.svg"
  },
  {
    "country": "Madagascar",
    "capital": "Antananarivo",
    "flag": "https://flagcdn.com/mg.svg"
  },
  {
    "country": "Malasia",
    "capital": "Kuala Lumpur",
    "flag": "https://flagcdn.com/my.svg"
  },
  {
    "country": "Malaui",
    "capital": "Lilongüe",
    "flag": "https://flagcdn.com/mw.svg"
  },
  {
    "country": "Maldivas",
    "capital": "Malé",
    "flag": "https://flagcdn.com/mv.svg"
  },
  {
    "country": "Malí",
    "capital": "Bamako",
    "flag": "https://flagcdn.com/ml.svg"
  },
  {
    "country": "Malta",
    "capital": "La Valeta",
    "flag": "https://flagcdn.com/mt.svg"
  },
  {
    "country": "Marruecos",
    "capital": "Rabat",
    "flag": "https://flagcdn.com/ma.svg"
  },
  {
    "country": "Mauricio",
    "capital": "Port Louis",
    "flag": "https://flagcdn.com/mu.svg"
  },
  {
    "country": "Mauritania",
    "capital": "Nuakchot",
    "flag": "https://flagcdn.com/mr.svg"
  },
  {
    "country": "México",
    "capital": "Ciudad de México",
    "flag": "https://flagcdn.com/mx.svg"
  },
  {
    "country": "Micronesia",
    "capital": "Palikir",
    "flag": "https://flagcdn.com/fm.svg"
  },
  {
    "country": "Moldavia",
    "capital": "Chisináu",
    "flag": "https://flagcdn.com/md.svg"
  },
  {
    "country": "Mónaco",
    "capital": "Mónaco",
    "flag": "https://flagcdn.com/mc.svg"
  },
  {
    "country": "Mongolia",
    "capital": "Ulán Bator",
    "flag": "https://flagcdn.com/mn.svg"
  },
  {
    "country": "Montenegro",
    "capital": "Podgorica",
    "flag": "https://flagcdn.com/me.svg"
  },
  {
    "country": "Mozambique",
    "capital": "Maputo",
    "flag": "https://flagcdn.com/mz.svg"
  },
  {
    "country": "Myanmar",
    "capital": "Naipyidó",
    "flag": "https://flagcdn.com/mm.svg"
  },
  {
    "country": "Namibia",
    "capital": "Windhoek",
    "flag": "https://flagcdn.com/na.svg"
  },
  {
    "country": "Nauru",
    "capital": "Yaren",
    "flag": "https://flagcdn.com/nr.svg"
  },
  {
    "country": "Nepal",
    "capital": "Katmandú",
    "flag": "https://flagcdn.com/np.svg"
  },
  {
    "country": "Nicaragua",
    "capital": "Managua",
    "flag": "https://flagcdn.com/ni.svg"
  },
  {
    "country": "Nigeria",
    "capital": "Abuya",
    "flag": "https://flagcdn.com/ng.svg"
  },
  {
    "country": "Noruega",
    "capital": "Oslo",
    "flag": "https://flagcdn.com/no.svg"
  },
  {
    "country": "Nueva Zelanda",
    "capital": "Wellington",
    "flag": "https://flagcdn.com/nz.svg"
  },
  {
    "country": "Níger",
    "capital": "Niamey",
    "flag": "https://flagcdn.com/ne.svg"
  },
  {
    "country": "Omán",
    "capital": "Mascate",
    "flag": "https://flagcdn.com/om.svg"
  },
  {
    "country": "Pakistán",
    "capital": "Islamabad",
    "flag": "https://flagcdn.com/pk.svg"
  },
  {
    "country": "Palaos",
    "capital": "Ngerulmud",
    "flag": "https://flagcdn.com/pw.svg"
  },
  {
    "country": "Palestina",
    "capital": "Jerusalén Este",
    "flag": "https://flagcdn.com/ps.svg"
  },
  {
    "country": "Panamá",
    "capital": "Ciudad de Panamá",
    "flag": "https://flagcdn.com/pa.svg"
  },
  {
    "country": "Papúa Nueva Guinea",
    "capital": "Puerto Moresby",
    "flag": "https://flagcdn.com/pg.svg"
  },
  {
    "country": "Paraguay",
    "capital": "Asunción",
    "flag": "https://flagcdn.com/py.svg"
  },
  {
    "country": "Países Bajos",
    "capital": "Ámsterdam",
    "flag": "https://flagcdn.com/nl.svg"
  },
  {
    "country": "Perú",
    "capital": "Lima",
    "flag": "https://flagcdn.com/pe.svg"
  },
  {
    "country": "Polonia",
    "capital": "Varsovia",
    "flag": "https://flagcdn.com/pl.svg"
  },
  {
    "country": "Portugal",
    "capital": "Lisboa",
    "flag": "https://flagcdn.com/pt.svg"
  },
  {
    "country": "Reino Unido",
    "capital": "Londres",
    "flag": "https://flagcdn.com/gb.svg"
  },
  {
    "country": "República Centroafricana",
    "capital": "Bangui",
    "flag": "https://flagcdn.com/cf.svg"
  },
  {
    "country": "República Checa",
    "capital": "Praga",
    "flag": "https://flagcdn.com/cz.svg"
  },
  {
    "country": "República Democrática del Congo",
    "capital": "Kinsasa",
    "flag": "https://flagcdn.com/cd.svg"
  },
  {
    "country": "República Dominicana",
    "capital": "Santo Domingo",
    "flag": "https://flagcdn.com/do.svg"
  },
  {
    "country": "Ruanda",
    "capital": "Kigali",
    "flag": "https://flagcdn.com/rw.svg"
  },
  {
    "country": "Rumania",
    "capital": "Bucarest",
    "flag": "https://flagcdn.com/ro.svg"
  },
  {
    "country": "Rusia",
    "capital": "Moscú",
    "flag": "https://flagcdn.com/ru.svg"
  },
  {
    "country": "Samoa",
    "capital": "Apia",
    "flag": "https://flagcdn.com/ws.svg"
  },
  {
    "country": "San Cristóbal y Nieves",
    "capital": "Basseterre",
    "flag": "https://flagcdn.com/kn.svg"
  },
  {
    "country": "San Marino",
    "capital": "San Marino",
    "flag": "https://flagcdn.com/sm.svg"
  },
  {
    "country": "San Vicente y las Granadinas",
    "capital": "Kingstown",
    "flag": "https://flagcdn.com/vc.svg"
  },
  {
    "country": "Santa Lucía",
    "capital": "Castries",
    "flag": "https://flagcdn.com/lc.svg"
  },
  {
    "country": "Santo Tomé y Príncipe",
    "capital": "Santo Tomé",
    "flag": "https://flagcdn.com/st.svg"
  },
  {
    "country": "Senegal",
    "capital": "Dakar",
    "flag": "https://flagcdn.com/sn.svg"
  },
  {
    "country": "Serbia",
    "capital": "Belgrado",
    "flag": "https://flagcdn.com/rs.svg"
  },
  {
    "country": "Seychelles",
    "capital": "Victoria",
    "flag": "https://flagcdn.com/sc.svg"
  },
  {
    "country": "Sierra Leona",
    "capital": "Freetown",
    "flag": "https://flagcdn.com/sl.svg"
  },
  {
    "country": "Singapur",
    "capital": "Singapur",
    "flag": "https://flagcdn.com/sg.svg"
  },
  {
    "country": "Siria",
    "capital": "Damasco",
    "flag": "https://flagcdn.com/sy.svg"
  },
  {
    "country": "Somalia",
    "capital": "Mogadiscio",
    "flag": "https://flagcdn.com/so.svg"
  },
  {
    "country": "Sri Lanka",
    "capital": "Sri Jayawardenepura Kotte",
    "flag": "https://flagcdn.com/lk.svg"
  },
  {
    "country": "Sudáfrica",
    "capital": "Pretoria",
    "flag": "https://flagcdn.com/za.svg"
  },
  {
    "country": "Sudán",
    "capital": "Jartum",
    "flag": "https://flagcdn.com/sd.svg"
  },
  {
    "country": "Sudán del Sur",
    "capital": "Yuba",
    "flag": "https://flagcdn.com/ss.svg"
  },
  {
    "country": "Suecia",
    "capital": "Estocolmo",
    "flag": "https://flagcdn.com/se.svg"
  },
  {
    "country": "Suiza",
    "capital": "Berna",
    "flag": "https://flagcdn.com/ch.svg"
  },
  {
    "country": "Surinam",
    "capital": "Paramaribo",
    "flag": "https://flagcdn.com/sr.svg"
  },
  {
    "country": "Tailandia",
    "capital": "Bangkok",
    "flag": "https://flagcdn.com/th.svg"
  },
  {
    "country": "Tanzania",
    "capital": "Dodoma",
    "flag": "https://flagcdn.com/tz.svg"
  },
  {
    "country": "Tayikistán",
    "capital": "Dusambé",
    "flag": "https://flagcdn.com/tj.svg"
  },
  {
    "country": "Timor Oriental",
    "capital": "Dili",
    "flag": "https://flagcdn.com/tl.svg"
  },
  {
    "country": "Togo",
    "capital": "Lomé",
    "flag": "https://flagcdn.com/tg.svg"
  },
  {
    "country": "Tonga",
    "capital": "Nukualofa",
    "flag": "https://flagcdn.com/to.svg"
  },
  {
    "country": "Trinidad y Tobago",
    "capital": "Puerto España",
    "flag": "https://flagcdn.com/tt.svg"
  },
  {
    "country": "Turkmenistán",
    "capital": "Asjabad",
    "flag": "https://flagcdn.com/tm.svg"
  },
  {
    "country": "Turquía",
    "capital": "Ankara",
    "flag": "https://flagcdn.com/tr.svg"
  },
  {
    "country": "Tuvalu",
    "capital": "Funafuti",
    "flag": "https://flagcdn.com/tv.svg"
  },
  {
    "country": "Túnez",
    "capital": "Túnez",
    "flag": "https://flagcdn.com/tn.svg"
  },
  {
    "country": "Ucrania",
    "capital": "Kiev",
    "flag": "https://flagcdn.com/ua.svg"
  },
  {
    "country": "Uganda",
    "capital": "Kampala",
    "flag": "https://flagcdn.com/ug.svg"
  },
  {
    "country": "Uruguay",
    "capital": "Montevideo",
    "flag": "https://flagcdn.com/uy.svg"
  },
  {
    "country": "Uzbekistán",
    "capital": "Taskent",
    "flag": "https://flagcdn.com/uz.svg"
  },
  {
    "country": "Vanuatu",
    "capital": "Port Vila",
    "flag": "https://flagcdn.com/vu.svg"
  },
  {
    "country": "Vaticano",
    "capital": "Ciudad del Vaticano",
    "flag": "https://flagcdn.com/va.svg"
  },
  {
    "country": "Venezuela",
    "capital": "Caracas",
    "flag": "https://flagcdn.com/ve.svg"
  },
  {
    "country": "Vietnam",
    "capital": "Hanói",
    "flag": "https://flagcdn.com/vn.svg"
  },
  {
    "country": "Yemen",
    "capital": "Saná",
    "flag": "https://flagcdn.com/ye.svg"
  },
  {
    "country": "Yibuti",
    "capital": "Yibuti",
    "flag": "https://flagcdn.com/dj.svg"
  },
  {
    "country": "Zambia",
    "capital": "Lusaka",
    "flag": "https://flagcdn.com/zm.svg"
  },
  {
    "country": "Zimbabue",
    "capital": "Harare",
    "flag": "https://flagcdn.com/zw.svg"
  }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let streak = 0;
let selectedAnswer = null;

const app = document.getElementById("app") || document.body;

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createLayout() {
  app.innerHTML = `
    <main class="game-wrapper">
      <section class="hero">
        <p class="eyebrow">🌎 Juego educativo</p>
        <h1>Reto de Capitales del Mundo</h1>
        <p>Mira la bandera, lee el país y elige la capital correcta.</p>
      </section>

      <section class="stats-card">
        <div>
          <span>Puntaje</span>
          <strong id="score">0</strong>
        </div>
        <div>
          <span>Aciertos</span>
          <strong id="correct">0</strong>
        </div>
        <div>
          <span>Errores</span>
          <strong id="wrong">0</strong>
        </div>
        <div>
          <span>Racha</span>
          <strong id="streak">0</strong>
        </div>
      </section>

      <section class="progress-area">
        <div class="progress-text">
          <span id="questionCounter">Pregunta 1 de ${countries.length}</span>
          <span id="percentage">0%</span>
        </div>
        <div class="progress-bar">
          <div id="progressFill"></div>
        </div>
      </section>

      <section class="question-card" id="questionCard">
        <div class="flag-box">
          <img id="flagImage" src="" alt="" loading="lazy">
        </div>

        <p class="country-label">País</p>
        <h2 id="countryName"></h2>
        <p class="question-text">¿Cuál es la capital de este país?</p>

        <div class="options-grid" id="optionsContainer"></div>

        <p id="feedback" class="feedback"></p>

        <div class="actions">
          <button id="nextButton" class="next-button" disabled>Siguiente</button>
          <button id="restartButton" class="restart-button">Reiniciar</button>
        </div>
      </section>
      <footer class="site-credit">
        Realizada por 
        <a href="https://www.instagram.com/cypictronic" target="_blank" rel="noopener noreferrer">
          Cypictronic
        </a>
      </footer>      
    </main>
  `;

  document.getElementById("nextButton").addEventListener("click", nextQuestion);
  document.getElementById("restartButton").addEventListener("click", restartGame);
}

function startGame() {
  questions = shuffleArray(countries);
  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  streak = 0;
  selectedAnswer = null;

  updateStats();
  loadQuestion();
}

function loadQuestion() {
  selectedAnswer = null;

  const currentCountry = questions[currentQuestionIndex];
  const flagImage = document.getElementById("flagImage");
  const countryName = document.getElementById("countryName");
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("nextButton");
  const questionCard = document.getElementById("questionCard");

  questionCard.classList.remove("show");
  setTimeout(() => questionCard.classList.add("show"), 50);

  flagImage.src = currentCountry.flag;
  flagImage.alt = `Bandera de ${currentCountry.country}`;
  flagImage.onerror = () => {
    flagImage.style.display = "none";
    feedback.textContent = "No se pudo cargar la bandera, pero puedes seguir jugando.";
  };
  flagImage.onload = () => {
    flagImage.style.display = "block";
  };

  countryName.textContent = currentCountry.country;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;

  renderOptions(currentCountry);
  updateProgress();
}

function renderOptions(currentCountry) {
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  const incorrectOptions = shuffleArray(
    countries.filter(item => item.capital !== currentCountry.capital)
  )
    .slice(0, 3)
    .map(item => item.capital);

  const options = shuffleArray([currentCountry.capital, ...incorrectOptions]);

  options.forEach(option => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => validateAnswer(button, option, currentCountry.capital));
    optionsContainer.appendChild(button);
  });
}

function validateAnswer(button, selectedCapital, correctCapital) {
  if (selectedAnswer !== null) return;

  selectedAnswer = selectedCapital;

  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("nextButton");
  const optionButtons = document.querySelectorAll(".option-button");

  optionButtons.forEach(btn => {
    btn.disabled = true;

    if (btn.textContent === correctCapital) {
      btn.classList.add("correct");
    }
  });

  if (selectedCapital === correctCapital) {
    score += 1;
    correctAnswers += 1;
    streak += 1;
    button.classList.add("correct");
    feedback.textContent = "✅ ¡Correcto! Sumaste 1 punto.";
    feedback.classList.add("success");
    playTone(700, 0.12);
  } else {
    score -= 2;
    wrongAnswers += 1;
    streak = 0;
    button.classList.add("wrong");
    feedback.textContent = `❌ Incorrecto. La capital correcta es ${correctCapital}. Restaste 2 puntos.`;
    feedback.classList.add("error");
    playTone(220, 0.18);
  }

  updateStats();
  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    showFinalResult();
    return;
  }

  loadQuestion();
}

function updateStats() {
  document.getElementById("score").textContent = score;
  document.getElementById("correct").textContent = correctAnswers;
  document.getElementById("wrong").textContent = wrongAnswers;
  document.getElementById("streak").textContent = streak;
}

function updateProgress() {
  const questionCounter = document.getElementById("questionCounter");
  const percentage = document.getElementById("percentage");
  const progressFill = document.getElementById("progressFill");

  const current = currentQuestionIndex + 1;
  const total = questions.length;
  const percent = Math.round((currentQuestionIndex / total) * 100);

  questionCounter.textContent = `Pregunta ${current} de ${total}`;
  percentage.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function showFinalResult() {
  const total = questions.length;
  const percentage = Math.round((correctAnswers / total) * 100);

  let message = "Puedes mejorar. Inténtalo otra vez 💪";

  if (percentage >= 90) {
    message = "Excelente. Eres nivel experto mundial 🌍🏆";
  } else if (percentage >= 70) {
    message = "Muy bien. Tienes gran memoria geográfica 🚀";
  } else if (percentage >= 50) {
    message = "Bien. Vas por buen camino ⭐";
  }

  app.innerHTML = `
    <main class="game-wrapper">
      <section class="final-card">
        <p class="eyebrow">Resultado final</p>
        <h1>${message}</h1>

        <div class="final-score">${score}</div>
        <p class="final-label">Puntaje final</p>

        <div class="final-grid">
          <div>
            <span>Aciertos</span>
            <strong>${correctAnswers}</strong>
          </div>
          <div>
            <span>Errores</span>
            <strong>${wrongAnswers}</strong>
          </div>
          <div>
            <span>Porcentaje</span>
            <strong>${percentage}%</strong>
          </div>
          <div>
            <span>Preguntas</span>
            <strong>${total}</strong>
          </div>
        </div>

        <button class="next-button" id="playAgainButton">Jugar otra vez</button>
      </section>
    </main>
  `;

  document.getElementById("playAgainButton").addEventListener("click", () => {
    createLayout();
    startGame();
  });
}

function restartGame() {
  startGame();
}

function playTone(frequency = 440, duration = 0.1) {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.frequency.value = frequency;
    oscillator.type = "sine";

    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.log("Audio no disponible en este navegador.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createLayout();
  startGame();
});